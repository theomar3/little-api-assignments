'use strict';
if (this.UserApp === undefined) this.UserApp = {};

(function(context) {

var $userInput;

  function getData(){
    var promise = $.ajax({
      url: 'https://api.github.com/search/users?q='+$userInput.val()
    });

    function theUsers(data) {
      var $userList = $('#users');
      $userList.empty();

      console.log(data);

      for(var i = 0; i < data.items.length; i++) {
        var html =
        '<li>' + data.items[i].login + '</li>';
        $userList.append(html);
      }
    }

    promise.done(theUsers);
  }

  function keyUpHappened(evt) {
    if(evt.keyCode === 13) {
      getData();
    }
  }

  function start() {
    $userInput = $('#user-input');

    $userInput.on('keyup', keyUpHappened);

  }

  context.start = start;

})(window.UserApp);
