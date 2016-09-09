'use strict';
if (this.GitSearch === undefined) this.GitSearch = {};

(function(context) {
  var $queryBox = $('#query-box');

  function getDataFromApi(data) {
    console.log(data)

    $queryBox.val(data.user_search_url);

  }

  function searchComplete(data) {
    var $userList = $('#user-list');
    console.log(data);
    for(var i = 0; i < data.items.length; i++) {
      var logins = data.items[i].login;
      var html =
      '<li>' + logins + '</li>';
      $userList.append(html);
    }

    

  }

  function searchNow() {
    var query = $queryBox.val();

    var promise = $.ajax({
      url: query
    });

    promise.done(searchComplete);
  }

  function start() {



    var promise = $.ajax({
      url:'https://api.github.com/'
    });
    promise.done(getDataFromApi);

    var $userSearch = $('#do-user-search');

    $userSearch.on('click', searchNow);

  }

  context.start = start;

})(window.GitSearch);
