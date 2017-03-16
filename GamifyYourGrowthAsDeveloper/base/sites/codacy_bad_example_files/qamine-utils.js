"use strict";

(function($, window) {

  var ClassVariable;

  ClassVariable = (function() {

    function QamineUtils() {
    }

    function ajaxRequest(type, url, contentType, payload, callback, errorCallback) {
      if (!url) {
        errorCallback("undefined url");
        return;
      }

      $.ajax({
        url: url,
        type: type,
        data: payload,
        contentType: contentType,
        success: function(response) {
          if (response.redirect) {
            window.location = response.redirect;
          } else if (callback) {
            callback(response);
          }
        },
        error: function(e, m) {
          if (errorCallback) {
            errorCallback(e, m);
          }
        },
        complete: function() {
        }
      });
    }

    /**
     *
     * @param url {String}
     * @param [callback] {function(str:String)}
     * @param [errorCallback] {function()}
     */
    QamineUtils.prototype.request = function(url, callback, errorCallback) {
      ajaxRequest("GET", url, $.ajaxSettings.contentType, "", callback, errorCallback);
    };

    /**
     *
     * @param url {String}
     * @param variable {String}
     * @param [callback] {function(str:String)}
     * @param [errorCallback] {function()}
     */
    QamineUtils.prototype.post = function(url, variable, callback, errorCallback) {
      ajaxRequest("POST", url, "application/json", JSON.stringify(variable), callback, errorCallback);
    };

    QamineUtils.prototype.JSend = function(url, post, successCallback, failureCallback, failureMessage) {
      var jsonFunction = function(data) {
        if (data.status === "success") {
          successCallback(data.data);
        }
        else if (data.status === "fail") {
          failureCallback(data.data);
        }
        else if (data.status === "error") {
          failureCallback(data.message);
        }
        else {
          console.log("Response is not JSend: " + data);
          failureCallback(failureMessage);
        }
      };

      var errorCallback = function(e, m) {
        console.log(e);
        console.log(m);
        failureCallback(failureMessage);
      };

      QamineUtils.prototype.post(url, post, jsonFunction, errorCallback);
    };

    /**
     *
     * @param searchTerm {String}
     * @param text {String}
     */
    QamineUtils.prototype.contains = function(searchTerm, text) {
      if (!searchTerm) {
        return true;
      }

      var textToSearch = text.toLowerCase();
      var termsToSearch = searchTerm.toLowerCase().split(" ");

      for (var i = 0; i < termsToSearch.length; i++) {
        if (termsToSearch[i].trim() && textToSearch.indexOf(termsToSearch[i]) !== -1) {
          return true;
        }
      }
      return false;
    };

    QamineUtils.prototype.startsWith = function(searchTerm, text) {
      return text.indexOf(searchTerm) === 0;
    };

    QamineUtils.prototype.addCSS = function(url) {
      var head = document.getElementsByTagName("head")[0];
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = url;
      link.media = "all";
      head.appendChild(link);
    };

    QamineUtils.prototype.addTo = function(selector, url, callback) {
      QamineUtils.prototype.request(url, function(result) {
        $(selector).html(result);
        if (callback) {
          callback();
        }
      });
    };

    /* QamineUtilsUI - Should we make a new JS for this? */

    QamineUtils.prototype.prettyTime = function() {
      $(".PrettyTime").timeago();
    };

    //adds named anchors to the url when you switch tabs
    QamineUtils.prototype.initializeTabs = function(tabsClass) {
      var hash = window.location.hash;
      tabsClass = tabsClass || "nav";

      hash && $("ul." + tabsClass + " a[href='" + hash + "']").tab("show");

      $("." + tabsClass + " a").click(function(e) {
        $(this).tab("show");
      });
    };


    QamineUtils.prototype.showNotification = function(notification) {
      if (!notification.notificationType || notification.notificationType === "Silent") {
        return;
      }
      $(".notifications").notify({
        type: notification.notificationType.toLowerCase(),
        message: {html: "<b>" + notification.title + "</b>:&nbsp;" + notification.message + "&nbsp;"},
        fadeOut: {enabled: true, delay: 10000},
        onClosed: function() {
          if (ClassVariable.markAsReadUrl) {
            var postVariable = {};
            postVariable.notificationId = "" + notification.id;
            QamineUtils.prototype.post(ClassVariable.markAsReadUrl, postVariable);
          }
        }
      }).show();
    };

    QamineUtils.prototype.createNotification = function(type, title, message) {
      var notification = {};
      notification.notificationType = type;
      notification.title = title;
      notification.message = message;
      return notification;
    };

    QamineUtils.prototype.initDial = function(selector, width, percentage, delta) {

      var normalizedDelta = delta;
      if (delta < 0) {
        normalizedDelta = Math.abs(delta);
      } else if (delta >= 99) {
        normalizedDelta = 99;
      }

      var series = {series: [percentage, normalizedDelta, 100 - (percentage + normalizedDelta)]};

      if (percentage === 0 && delta === 0) {
        series = {series: [100]};
      }

      var options = {
        donut: true,
        donutWidth: width / 12.0,
        startAngle: 0,
        showLabel: false,
        width: width
      };

      options.classNames = {};
      if (percentage === 0 && delta === 0) {
        options.classNames.series = 'ct-series-empty';
      }
      if (delta < 0) {
        options.classNames.series = 'ct-series-delta';
      }

      Chartist.Pie(selector, series, options);

    };

    QamineUtils.prototype.initDialSeries = function(selector, width, values, showLabel, hoverEvent) {

      var options = {
        donut: true,
        donutWidth: width / 12.0,
        startAngle: 0,
        showLabel: showLabel,
        labelOffset: -17,
        width: width + 'px'
      };

      var series;
      if (values.length) {
        series = {series: values};
      } else {
        options.showLabel = false;
        options.classNames = {};
        options.classNames.series = 'ct-series-empty';

        series = {series: [100]};
      }

      if (hoverEvent) {
        var chart = Chartist.Pie(selector, series, options);
        chart.on('draw', function() {
          var issueGraph = document.querySelectorAll('.ct-slice-donut');

          for (var i = 0; i < issueGraph.length; i++) {
            issueGraph[i].addEventListener('mouseover', function() {
              var $chart = $('.jsIssueBreakdownChart');
              $chart.find('.text').text(this.getAttribute('ct:value')).next().text(getComputedStyle(this.parentElement, 'content').content.split('"')[1]);
              this.setAttribute('style', 'stroke-width: 25px !important');
            });
            issueGraph[i].addEventListener('mouseout', function() {
              var $chart = $('.jsIssueBreakdownChart');

              $chart.find('.text').text($('.text').data('total'));
              $chart.find('.tag').text('Total Issues');
              this.setAttribute('style', '');
            });
          }

          $('.categoryLink').hover(
            function() {
              var $value = $(this).data('result');
              var $category = $(this).data('value');

              $('.jsIssueBreakdownChart').find('.text').text($value).next().text($category);
              $('.jsIssueBreakdownChart .ct-chart-donut').find('.' + $category.replace(" ", '-')).children().attr('style', 'stroke-width: 25px !important');
            }, function() {
              $('.jsIssueBreakdownChart').find('.text').text($('.text').data('total')).next().text('Total Issues');
              $('.jsIssueBreakdownChart .ct-chart-donut path').attr('style', '');
            }
          );
        });
      } else {
        Chartist.Pie(selector, series, options);
      }


    };


    QamineUtils.prototype.htmlDecode = function(value) {
      return $("<div/>").html(value).text();
    };

    QamineUtils.prototype.clipboard = function() {
      var clipboard = new Clipboard('.js-copy');

      clipboard.on('success', function(e) {
        $(e.trigger)
          .attr('data-title', 'Copied!')
          .tooltip('show')
          .mouseout(function() {
            $(this).tooltip('destroy');
          });
      }).on('error', function(e) {
        $(e.trigger)
          .attr('data-title', 'Press ⌘ + c to copy')
          .tooltip('show')
          .mouseout(function() {
            $(this).tooltip('destroy');
          });
      });
    };

    var ESC_KEY = 27;
    var ENTER_KEY = 13;
    var BACKSPACE_KEY = 8;
    var DOWN_KEY = 40;
    var UP_KEY = 38;
    var FIRST_LETTER = 48;
    var LAST_LETTER = 90;

    QamineUtils.prototype.dropdownSearch = function() {
      var $array = [];

      $(".dropdown-search").each(function(i, elem) {
        var searchBox = $(elem);
        var searchBoxInput = searchBox.find('input');

        $(this).on('hide.bs.dropdown', function() {
          closeDropdown($(this).find('.dropdown-menu-search'));
        }).on('show.bs.dropdown', function() {
          $array = [];
          searchBox.find("ul > li.dropdown-item").each(function() {
            $array.push($(this));
          });
        });

        //focus caret on search box
        searchBox.find(".dropdown-toggle").click(function() {
          setTimeout(function() {
            searchBoxInput.focus();
          });
        });

        function dropdownUpdateSearch(searchText) {
          var results = _.filter($array, function(val) {
            return val.text().trim().toLowerCase().search(searchText) > -1
          });

          return results.sort();
        }

        function updateDropdown(names, dropdownMenuSearch, callback) {
          dropdownMenuSearch.nextAll('li.dropdown-item').remove();
          dropdownMenuSearch.after(names);
          if(callback) {
            callback(dropdownMenuSearch);
          }
        }

        function closeDropdown(dropdownEl) {
          dropdownEl.find('input').val("");
          var names = dropdownUpdateSearch("");
          updateDropdown(names, dropdownEl, function(response) {
            updateDropdownArrow(response.parents('.dropdown-search'));
          });
        }

        function updateDropdownArrow(el) {
          var searchBoxId = el.attr('id');
          var labelWidth = el.width();
          el.find(".dropdown-menu").css("min-width", labelWidth + 'px');
          var menuWidth = el.find('ul').width();
          var margin = parseInt(el.find('ul').css("margin-left"), 10);
          var width = menuWidth - labelWidth + margin;
          var styleRemove = $('[data-remove="'+searchBoxId+'"]');
          if(!_.isUndefined(styleRemove)) {
            styleRemove.remove();
          }
          if (searchBoxId === "dropdown-branch-name") {
            $('<style data-remove="'+searchBoxId+'">#' + searchBoxId + ' .dropdown-menu::before { right: ' + width + 'px;} #' + searchBoxId + ' .dropdown-menu::after { right: ' + (width + 1) + 'px;}</style>').appendTo('head');
          } else {
            $('<style data-remove="'+searchBoxId+'">#' + searchBoxId + ' .dropdown-menu::before, #' + searchBoxId + ' .dropdown-menu::after { right: ' + (width + 20) + 'px;}</style>').appendTo('head');
          }
        }

        //branch search
        searchBoxInput.on("keyup", function(e) {
          var dropdownEl = $(this).parent();
          var searchText = searchBoxInput.val().toLowerCase();
          var names = dropdownUpdateSearch(searchText);

          if (e.keyCode === ESC_KEY) {
            searchBox.find('.dropdown-toggle').trigger('click');
          }

          //Keyup for the alpha numerics from Z to 0.
          if(e.keyCode <= LAST_LETTER && e.keyCode >= FIRST_LETTER || e.keyCode === BACKSPACE_KEY) {
            updateDropdown(names, dropdownEl, function(response) {
              updateDropdownArrow(response.parents('.dropdown-search'));
            });

          } else if(e.keyCode === DOWN_KEY) {
            $(this).parent().next().find('a').get(0).focus();
            dropdownEl.find('input').val($(this).parent().next().find('a').text().trim());
          }

          var nrShownBranches = searchBox.find('ul > li.dropdown-item:not(:hidden)').length;
          var noMatchesLabel = searchBox.find('.search-empty');
          if (nrShownBranches > 0) {
            noMatchesLabel.hide();
          } else {
            noMatchesLabel.show();
          }
        });

        $(document).on('keydown', '.dropdown-menu > li.dropdown-item', function(e) {
          var element = $(this);
          var previousEl = element.prev();
          var nextEl = element.next();

          if(e.keyCode === UP_KEY) {
            if(element.prev().hasClass('dropdown-menu-search')) {
              e.preventDefault();
              e.stopPropagation();

              $('.dropdown-menu-search > input').val("");
              previousEl.find('input')[0].focus();

            } else if(!_.isUndefined(previousEl.find('a')[0])) {
              element.siblings('.dropdown-menu-search').find('input').val(previousEl.find('a').text().trim());
            }
          } else if(e.keyCode === DOWN_KEY && !_.isUndefined(nextEl.find('a')[0])) {
            element.siblings('.dropdown-menu-search').find('input').val(nextEl.find('a').text().trim());
          } else if(e.keyCode === ESC_KEY) {
            searchBox.find('.dropdown-toggle').trigger('click');
          }

        });

        updateDropdownArrow(searchBox);
      });
    };

    QamineUtils.prototype.dropdownBranchSearch = function() {
      $(".dropdown-menu").each(function(i, elem) {
        var searchBox = $(elem);
        var searchBoxInput = searchBox.find('input');

        //branch search
        searchBoxInput.on("keyup", function(e) {
          if (e.keyCode === ENTER_KEY) {
            searchBox.find('li:visible:not(.dropdown-menu-search)').find('a')[0].click();
          }
        });
      });
    };


    QamineUtils.prototype.bindUserActions = function() {
      $(".jsCheckboxGeneric").on("click", function(e) {
        e.preventDefault();

        var $this = $(this);
        var url = $this.data("url");
        var canAccess = $this.prop('checked');
        var targetURL = url.replace("=false", "=" + canAccess);

        QamineUtils.prototype.post(targetURL, {}, function() {
          location.reload(true);
        });
      });

    };


    var instance;
    return {
      getInstance: function() {
        if (instance === undefined) {
          instance = new QamineUtils();
          // Hide the constructor so the returned objected can't be new'd...
          instance.constructor = null;
        }
        return instance;
      }
    };

  })();

  window.QamineUtils = ClassVariable;
  return window.QamineUtils;

})(jQuery, window);
