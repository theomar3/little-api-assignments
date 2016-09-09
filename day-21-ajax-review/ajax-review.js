'use strict';
//name space
if (this.JSApp === undefined) this.JSApp  = {};
//whatever is passed into that empty object is passed into the variable in the funciton on line 7.

//this starts the IIFE
(function(context) {

  var $issuesList;

  function requestCompleted(data) {
    console.log('data' ,data);

    $issuesList.empty();

    // forEach style

    function addItemToList(item) {
      var body = item.body;
      if (body !== null) {
        var bodyContainsStyle = body.indexOf('<style') > -1;
        if(bodyContainsStyle) {
          body = body.replace('<style', '<pre')
          body = body.replace('</style', '</pre')
        }
      }

      var html =
      '<li>' +
        '<div class="title">' + item.title + '</div>' +
        '<div class="state">'+ item.state + '</div>' +
        '<div class="body">' + body + '</div>' +
      '</li>'

      $issuesList.append(html);
    }

    data.items.forEach(addItemToList);




    // for loop style

    // for (var i = 0; i < data.items.length; i++) {
    //
    //   var body = data.items[i].body;
    //   var bodyContainsStyle = body.indexOf('<style') > -1;
    //   if (body !== null && bodyContainsStyle) {
    //     body = body.replace('<style', '<pre')
    //     body = body.replace('</style', '</pre')
    //   }
    //
    //   var html =
    //   '<li>' +
    //     '<div class="title">' + data.items[i].title + '</div>' +
    //     '<div class="state">'+ data.items[i].state + '</div>' +
    //     '<div class="body">' + body + '</div>' +
    //   '</li>'
    //
    //   $issuesList.append(html);
    // }
  }

  function start() {
    //call your code here

    $issuesList = $('.issues');

    $('.issues').append('<li> Hold please. we are loading. </li>');

    var promise = $.ajax({
      url: 'https://api.github.com/search/issues?q=pizza'
    });

    promise.done(requestCompleted);
  }

  context.start = start;

})(window.JSApp); //the IIFE ends here. This parameter gets passed in the function on line 7
