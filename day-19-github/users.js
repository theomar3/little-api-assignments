// var people = ["Jack", "Mark", "Bob"];

var $userList = $('#users');
var $userInput = $('#user-input');


function getData() {
  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q='+$userInput.val()
  });

  promise.done(function(data){
    $userList.empty();

    for(var i = 0; i < data.items.length; i++) {
      $userList.append('<li>' + data.items[i].login +
  '</li>');
    }

  });
}

function keyUpHappened(evt) {
  if(evt.keyCode === 13) {
    getData();
  }
}

$userInput.on('keyup', keyUpHappened);
