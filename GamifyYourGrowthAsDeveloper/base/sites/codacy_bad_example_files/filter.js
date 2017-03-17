"use strict";

(function($, window) {
  var ClassVariable;

  ClassVariable = (function() {

    var FILTER_PANEL = ".filter-panel";
    var FILTER_GROUP = ".filter-group";
    var FILTER_GROUP_LIST = ".select-filter-list";
    var FILTER_GROUP_VALUE = ".select-filter";

    function Filter() {
      $(FILTER_GROUP).each(function(i, elem) {
        var $elem = $(elem);
        var buttonWidth = $elem.width();
        var dropDown = $elem.find("ul");
        if (dropDown.width() < buttonWidth) {
          dropDown.width(buttonWidth);
        }
      });
    }

    Filter.prototype.bind = function() {

      $(FILTER_GROUP_VALUE).click(function(e) {
        e.preventDefault();

        var $this = $(this);
        $this.closest(FILTER_GROUP_LIST).find(FILTER_GROUP_VALUE + ".active").removeClass("active");
        $this.toggleClass("active");

        var filterPanel = $(FILTER_PANEL);

        var payload = [];

        $(FILTER_GROUP).each(function(i, elem) {
          var element = $(elem);

          var filterId = element.data("type");

          payload[i] = {};
          payload[i].id = filterId;
          payload[i].values = [];

          element.find(FILTER_GROUP_VALUE + ".active").each(function(j, elem) {
            payload[i].values[j] = $(elem).data("filter");
          });
        });

        /* TODO: Make this asynchronous (this should not be seen in the URL) */
        var url = filterPanel.data("url");

        window.location = Filter.prototype.createUrl(url, payload);
      });
    };

    Filter.prototype.createSimplePayload = function(filterCategory, filterValue) {
      var payload = [];
      payload[0] = {};
      payload[0].id = filterCategory;
      payload[0].values = [];
      payload[0].values[0] = filterValue;

      return payload;
    };

    Filter.prototype.createUrl = function(url, payload) {
      var paramStart = "?";
      if (url.indexOf("?") > -1) {
        paramStart = "";
      }

      var compressedPayload = window.btoa(JSON.stringify(payload));
      return url + paramStart + "&filters=" + compressedPayload;
    };

    var instance;
    return {
      getInstance: function() {
        if (instance === undefined) {
          instance = new Filter();
          // Hide the constructor so the returned objected can't be new'd...
          instance.constructor = null;
        }
        return instance;
      }
    };
  })();

  window.Filter = ClassVariable;
  return window.Filter;

})(jQuery, window);
