"use strict";

function DropdownSearch() {
  this.bindSearch = function(mainClassSelector) {
    var searchBox = $(mainClassSelector + " .jsSearchInput");
    var searchBoxInput = searchBox.find('input');

    //focus caret on search box
    $(mainClassSelector).click(function() {
      setTimeout(function() {
        searchBoxInput.focus();
      }, 200)
    });

    //stop the dropdown from closing on the search button
    searchBox.on("click", function(e) {
      e.stopPropagation();
    });

    //item search
    searchBox.on("keyup", function(e) {
      var searchText = searchBoxInput.val();

      $(mainClassSelector + " .jsSearchElement").each(function() {
        var itemName = $(this).find('.jsSearchName').text();

        if (itemName.toLowerCase().search(searchText.toLowerCase()) > -1) {
          $(this).show();
        }
        else {
          $(this).hide();
        }
      });

      var nrShownItems = $(mainClassSelector + ' .jsSearchElement:not(:hidden)').length;
      var noMatchesLabel = $(mainClassSelector + ' .jsSearchNoMatch');
      if (nrShownItems > 0) {
        noMatchesLabel.hide();
      } else {
        noMatchesLabel.show();
      }
    });
  }
}