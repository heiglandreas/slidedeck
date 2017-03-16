(function($, window) {
  var classVar = (function() {

    var utils = QamineUtils.getInstance();

    function Issues() {
    }

    Issues.prototype.bindDismiss = function(resultId) {

      var bindIgnoreButton = function(resultId, button) {
        button.click(function(e) {
          e.preventDefault();
          var self = $(this);
          var url = self.data("url");
          var fileWrapper = button.closest(".file-issue-container");
          if (fileWrapper.children(".IssueItem").length === 1) {
            fileWrapper.slideUp(400, function() {
              fileWrapper.remove();
            });
          }
          var panel = button.closest(".IssueItem");

          $(".empty-space." + resultId + "").slideUp(100, function() {
            $(this).closest(".code-line").css("height", "");
            $(".HideDetail[data-result-id='" + resultId + "']").hide();
          });

          panel.slideUp(400, function() {
            utils.JSend(
              utils.htmlDecode(url),
              {},
              function() {
                panel.remove();
                utils.showNotification(utils.createNotification("Success", "Result ignored", "Result was successfully ignored"));
              },
              function() {
                panel.slideDown();
                utils.showNotification(utils.createNotification("Warning", "Failed to ignore result", "Please try again"));
              }
            );
          });
        });
      };

      bindIgnoreButton(
        resultId,
        $(".IgnoreResult." + resultId)
      );
      bindIgnoreButton(
        resultId,
        $(".IgnorePattern." + resultId)
      );
    };

    Issues.prototype.bindEvaluate = function(resultId) {

      var onError = function() {
        utils.showNotification(utils.createNotification("Warning", "Failed to evaluate result", "Please try again"));
      };

      var clickPost = function(thisButton, onSuccessCallback) {
        thisButton.click(function(e) {
          e.preventDefault();
          var self = $(this);

          if (!self.hasClass("active")) {

            var url = self.data("url");
            utils.post(
              url,
              {},
              function(response) {
                if (response.status === "success") {
                  onSuccessCallback(response.data)
                }
                else {
                  onError();
                }
              },
              onError
            );

          }
        });
      };

      var bindEvalButtons = function(upvoteButton, downvoteButton, dismissButton) {

        clickPost(upvoteButton, function(response) {
          if (response === true) {
            upvoteButton.addClass("active");
            downvoteButton.removeClass("active");

            upvoteButton.tooltip('show');
            setTimeout(function() {
              upvoteButton.tooltip('hide');
              if (dismissButton.is(':visible')) {
                dismissButton.animate({width: 0, opacity: "hide"}, 500);
              }
            }, 1000);
          }
          else {
            onError();
          }
        });

        clickPost(downvoteButton, function(response) {
          upvoteButton.tooltip('hide');
          if (response === false) {
            downvoteButton.addClass("active");
            upvoteButton.removeClass("active");
            dismissButton.css("width", 0).animate({width: 80, opacity: "show"}, 500);
          }
          else {
            onError();
          }
        });

      };

      bindEvalButtons(
        $(".EvaluateResult-" + resultId + " > .UpVote"),
        $(".EvaluateResult-" + resultId + " > .DownVote"),
        $(".EvaluateResult-" + resultId + " > .IgnoreResult")
      );
    };

    Issues.prototype.bindRemoteServices = function(resultId) {
      var modalWrapper = $(".modal-wrapper." + resultId);

      var bind = function(type, typeName) {
        var submitClick = function($button, url) {
          var payload = {};

          var modalBody = modalWrapper.find(".modal-edit-" + type);
          payload.message = modalBody.find(".message").val();

          var titleElem = modalBody.find(".title");
          if (titleElem.length) {
            payload.title = titleElem.val();
          }

          utils.post(url, payload,
            function(res) {
              /* Show created label and replace button to view content */
              $button.off("click");
              $button.text("View " + typeName);
              $button.removeClass(type + "-option");
              $button.attr("target", "_blank").attr("rel", "noopener noreferrer");
              $button.attr("href", res.success);

              /* Show success modal */
              var successModal = modalWrapper.find(".modal-edit-success");
              successModal.find(".btn-view").attr("href", res.success);

              var messageContainer = successModal.find(".message-container");
              messageContainer.find(".message").val("Your " + typeName + " was created successfully!");

              var urlField = messageContainer.find(".url");
              urlField.attr("href", res.success);
              urlField.text(type);

              modalWrapper.find(".modal-edit-" + type).modal("hide");
              successModal.modal({
                "backdrop": true,
                "keyboard": true,
                "show": true
              });
            },
            function() {
              var modalError = modalWrapper.find(".modal-edit-error");

              modalError.find(".message").val("Error creating the " + type + ".");
              modalWrapper.find(".modal-edit-" + type).modal("hide");
              modalError.modal({
                "backdrop": true,
                "keyboard": true,
                "show": true
              });
            }
          );
        };

        var createButton = $("." + type + "-option." + resultId);
        createButton.click(function(e) {
          e.preventDefault();

          var $button = $(this);
          var url = $button.data("url");

          var showEditor = function() {

            var modalComment = modalWrapper.find(".modal-edit-" + type);
            modalComment.find(".btn-create").click(function(e) {
              e.preventDefault();
              $(this).attr("disabled", true);
              submitClick($button, url);
            });

            modalComment.modal({
              "backdrop": true,
              "keyboard": true,
              "show": true
            });
          };

          var form = $button.data("form");
          utils.request(form, function(result) {
            modalWrapper.find(".modal-edit-" + type).remove();
            modalWrapper.append(result);
            showEditor();
          });
        });
      };

      bind("comment", "Comment");
      bind("issue", "Issue");
    };

    //surrounding source code is in a separate request because it may take longer
    Issues.prototype.bindShowDetails = function(detailURL, fileLineURL, visibleSurroundingCode) {

      var tmpSurroundingLines = function() {
        var lines = "";
      };


      //gets the issue explanation and appends it to DOM
      var getDetail = function(branchId, detailBranchId, commitId, resultId, container, showDetailFunction) {
        var url = detailURL.replace(-1, branchId)
          .replace(-2, detailBranchId)
          .replace(-3, commitId)
          .replace(-4, resultId);
        utils.request(url, function(result) {
          container.html(result);

          var reader = new commonmark.Parser();
          var writer = new commonmark.HtmlRenderer();

          var explanationContainer = container.find('.PatternExplanation');
          var explanation = explanationContainer.text().replace(/\s*$/, ""); //trims the end
          var parsed = reader.parse(explanation);
          var result = writer.render(parsed);
          explanationContainer.html(result);

          showDetailFunction();
        });
      };

      //gets the surrounding lines and stores it in the tmp variable
      var getSurroundingLines = function(commitId, resultId, showFileDetailFunction, tmpSourceCode) {
        var url = fileLineURL
          .replace(-1, commitId)
          .replace(-2, resultId);
        utils.request(url, function(result) {
          if ($.trim(result).length) {
            tmpSourceCode.lines = result;
          }
          showFileDetailFunction();
        });
      };

      //if we have the surrounding lines append them to DOM
      var showSurroundingLines = function(detailContainer, tmpSourceCode, resultId) {
        var numberOfCodeLines = $(".IssueDetailContainer." + resultId).find(".DetailLines").children().length;

        if (numberOfCodeLines > 1) {
          hideLoading(resultId);
        }
        else if (tmpSourceCode.lines || !visibleSurroundingCode) {
          hideLoading(resultId);
          detailContainer.find('.DetailLines').html(tmpSourceCode.lines);
        }
        else {
          showLoading(resultId);
        }
      };

      //functions used only in file view to move down the code while we expand the slider
      var adjustHeight = function(initialHeight, parentHeight, detailContainer, emptySpaces) {
        var minimumHeight = initialHeight;
        var currentHeight = detailContainer.outerHeight();

        $.each(emptySpaces, function() {
          $(this).css('height', minimumHeight + currentHeight);
        });
        $(this).closest(".code-line").css('height', parentHeight + currentHeight); //safari needs to adjust height of parent
      };
      var generateAdjustHeight = function(resultId) {
        var $box = $(".IssueDetailContainer." + resultId);
        var $emptySpaces = $(".empty-space." + resultId);
        var baseHeight = 29;

        var nrIssuesInLine = $box.closest(".code-line").find(".empty-space").length;
        var parentHeight = 29 * nrIssuesInLine + 17;

        return _.partial(adjustHeight, baseHeight, parentHeight, $box, $emptySpaces);
      };

      //slide down detail of issue
      var showDetail = function(showBtn, detailContainer, fileSource, showFileDetailFunction, adjustHeightFunction) {
        showFileDetailFunction();

        fileSource.hide();
        detailContainer.slideDown({
          progress: adjustHeightFunction
        });

        showBtn.closest(".IssueItem").unbind('mouseenter mouseleave');

        showBtn.find(".js-chevron-down").toggleClass("js-active").toggle();
        showBtn.find(".js-chevron-up").toggleClass("js-active").toggle();
      };


      //Loading indicators
      var showLoading = function(resultId) {
        var singeClodeLine = $('.FileSource.' + resultId)[0].outerHTML;
        var targetId = "LoadingFile-" + resultId;
        var targetContainer = $("#" + targetId);
        var targetDiv = targetContainer.find('.singleLine');

        if (!$.trim(targetDiv.html()).length) {
          targetDiv.append(singeClodeLine);
        }

        targetContainer.show();
      };
      var hideLoading = function(resultId) {
        var targetId = "LoadingFile-" + resultId;
        $("#" + targetId).hide();
      };

      var showDetailHandler = function($this) {
        var branchId = $this.data('branch-id');
        var detailBranchId = $this.data('detail-branch-id');
        var commitId = $this.data('commit-id');
        var resultId = $this.data('result-id');
        var $detailContainer = $('.IssueDetailContainer.' + resultId);
        var $detail = $detailContainer.find('.IssueDetail');
        var $originalSourceCode = $('.FileSource.' + resultId);
        var $detailedSourceCode = $detailContainer.find('.DetailLines');
        var tmpSourceCode = new tmpSurroundingLines();
        var adjustHeightFunction = generateAdjustHeight(resultId);

        var showSurroundingLinesFunction = _.partial(showSurroundingLines, $detailContainer, tmpSourceCode, resultId);
        var showDetailFunction = _.partial(showDetail, $this, $detailContainer, $originalSourceCode,
          showSurroundingLinesFunction, adjustHeightFunction);

        if (!$.trim($detailedSourceCode.html()).length && visibleSurroundingCode) {
          getSurroundingLines(commitId, resultId, showSurroundingLinesFunction, tmpSourceCode);
        }
        if (!$.trim($detail.html()).length) {
          getDetail(branchId, detailBranchId, commitId, resultId, $detail, showDetailFunction);
        } else {
          showDetailFunction();
        }
      };
      var hideDetailHandler = function($this) {
        var resultId = $this.data('result-id');
        var $detailContainer = $('.IssueDetailContainer.' + resultId);
        var $sourceCode = $('.FileSource.' + resultId);
        var adjustHeightFunction = generateAdjustHeight(resultId);

        $detailContainer.slideUp({
          complete: function() {
            $sourceCode.show();
          },
          progress: adjustHeightFunction
        });

        $this.find(".js-chevron-down").toggleClass("js-active").toggle();
        $this.find(".js-chevron-up").toggleClass("js-active").toggle();

        $this.closest('.IssueHeader').unbind('mouseenter mouseleave');
      };
      $(".js-trigger-detail").off("click").click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var detailIsEmpty = $this.find(".js-chevron-down").hasClass("js-active");

        if (detailIsEmpty) {
          showDetailHandler($this);
        } else {
          hideDetailHandler($this);
        }
      });
    };

    Issues.prototype.bindUnignoreButton = function() {
      $('.btn-unignore').click(function(e) {
        e.preventDefault();

        var btn = $(this);
        var url = btn.data('unignore-url');

        var utils = QamineUtils.getInstance();
        utils.post(url, "{}", function() {
            //hide issue
            btn.closest('.IssueItem').hide();
          },
          function(error) {
            console.error("error: " + error.status + " -> " + error.responseJSON.error);
          });
      })
    };

    var instance;
    return {
      getInstance: function() {
        if (instance === undefined) {
          instance = new Issues();
          // Hide the constructor so the returned objected can't be new'd...
          instance.constructor = null;
        }
        return instance;
      }
    };
  })();

  window.Issues = classVar;
  return window.Issues;

})(jQuery, window);
