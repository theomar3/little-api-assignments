'use strict'

if (this.JSApp === undefined) this.JSApp = {};

(function(context) {

  var $inputValue = $('#searchInput');
  var $searchList = $('#searchList');

  function searchRepo(data) {
    console.log(data);

    var $templateHtml = $('#name-template').html();
    var htmlFactory = _.template($templateHtml);

    for (var i = 0; i < data.items.length; i++) {
      var html = htmlFactory(
        {
          fullName: data.items[i].full_name
        }
      );

      $searchList.append(html);
    }
  }

  function keyUpHappened(evt) {

    $searchList.empty();



    if(evt.keyCode == 13) {
      var promise = $.ajax({
        url:'https://api.github.com/search/repositories?q='+$inputValue.val()
      });

      promise.done(searchRepo);
    }
  }

  function start() {

    $inputValue.on('keyup', keyUpHappened);

  }


  context.start = start;
})(window.JSApp);
