"use strict";

(function($, window) {
  var ClassVariable;

  ClassVariable = (function() {

    var utils = QamineUtils.getInstance();

    var COMMIT_LIST = "#commit-list";

    function ProjectDetail() {
    }

    //sliding animation when you select the plans
    ProjectDetail.prototype.disableMenu = function() {
      $(".panel-tabs.disabled a").click(function() {
        return false;
      });
    };

    ProjectDetail.prototype.bindIgnoreFile = function(projectId, filename, branchId, forceRedirect) {
      var onSuccess = function(response) {
        if (forceRedirect === true && response.ignoreFileRedirect) {
          window.location = response.ignoreFileRedirect;
        } else {
          window.location.reload();
        }
      };

      var onError = function() {
      };

      $(".BtnIgnoreFile").click(function(e) {
        // e.preventDefault();

        var ignoreUrl = $(this).data("url");
        var postIgnore = {};
        postIgnore.projectId = projectId;
        postIgnore.file = filename;
        postIgnore.branchId = branchId;
        utils.post(ignoreUrl, postIgnore, onSuccess, onError);
      });

      $(".BtnUnignoreFile").click(function(e) {
        e.preventDefault();

        var unignoreUrl = $(this).attr("href");
        var postUnignore = {};
        postUnignore.projectId = projectId;
        postUnignore.file = filename;
        utils.post(unignoreUrl, postUnignore, onSuccess, onError);
      });
    };

    //globalContainer is the selector for the html element that contains all items (outside the partial)
    //offsetSelector is the class used to count the number of received items
    ProjectDetail.prototype.bindLoadMore = function(globalContainer, offsetSelector, onComplete) {
      var updateOffset = function() {
        var $infiniteLink = $('.infinite-more-link');
        var offset = $(offsetSelector).length;
        var url = $infiniteLink.attr("href").replace('-1', offset);
        var queryString = url.indexOf('?') === -1 ? window.location.search : window.location.search.substring(1);
        $infiniteLink.attr("href", url + '&' + queryString);

        if (onComplete) {
          onComplete();
        }
      };

      updateOffset();

      $(globalContainer).waypoint('infinite', {
        container: '.infinite-container',
        items: '.infinite-item',
        more: '.infinite-more-link',
        offset: 'bottom-in-view',
        loadingClass: 'infinite-loading',
        onBeforePageLoad: $.noop,
        onAfterPageLoad: updateOffset
      });
    };

    ProjectDetail.prototype.bindRetry = function() {

      $('.commit-retry-feedback').hide();
      $('.pr-retry-feedback').hide();

      var retry = function(url, $feedback, button) {
        utils.post(url, {}, function() {
          button.html("Reviewing");
          button.attr("disabled", true);
          $feedback.hide();
        }, function() {
          $feedback.show();
        });
      };

      $('.commit-retry').click(function() {
        var url = $(this).data('url');

        var $feedback = $('.commit-retry-feedback');
        var button = $(this);
        retry(url, $feedback, button);
      });

      $('.pr-retry').click(function() {
        var url = $(this).data('url');

        var $feedback = $('.pr-retry-feedback');
        var button = $(this);

        retry(url, $feedback, button);
      });
    };

    ProjectDetail.prototype.bindRetryAnalysis = function(projectId, url, notifyTeam) {
      $(".RetryAnalysis").click(function() {

        var postVariable = {};
        postVariable.projectId = projectId.toString();
        if (notifyTeam === true) {
          postVariable.notifyTeam = true;
        }

        utils.post(url, postVariable, function(e) {
          if (e.error) {
            $(".RetryAnalysisFeedback").showError(e.error);
          } else {
            $(".RetryAnalysisFeedback").showSuccess("Done");
            window.location.reload(true);
          }
        }, function() {
          $(".RetryAnalysisFeedback").showError("Could not start analysis, please try again later.");
        });
      });
    };

    var instance;
    return {
      getInstance: function() {
        if (instance === undefined) {
          instance = new ProjectDetail();
          // Hide the constructor so the returned objected can't be new'd...
          instance.constructor = null;
        }
        return instance;
      }
    };


  })();

  window.ProjectDetail = ClassVariable;
  return window.ProjectDetail;

})(jQuery, window);
