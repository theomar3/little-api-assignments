'use strict';
if (this.practice === undefined) this.practice = {};

(function (context){

  var $searchInput = $('#searchInput');
  var $searchList = $('#searchList');

  function postSearch(data) {
    console.log(data);

    
  }

  function keyUpHappened(evt) {
    if(evt.keyCode === 13) {
      var promise = $.ajax({
        url: 'https://api.github.com/search/repositories?q='  +$searchInput.val();
      });
      promise.done(postSearch);
    }
  }

  function start() {

    $searchInput.on('keyup', keyUpHappened);

  }

  context.start=start;

})(window.practice);
