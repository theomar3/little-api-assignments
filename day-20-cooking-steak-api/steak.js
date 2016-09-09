'use strict'
if (this.Steak === undefined) this.Steak = {};

(function (context){
  var $steakTable = $('#steak-table');


  function steaks(data) {
    $steakTable.empty();
    console.log(data);

    var $templateHtml = $('#steak-template').html();
    var htmlFactory = _.template($templateHtml);

    for(var i = 0; i < data.levels.length; i++) {
      var html = htmlFactory(
        {
          type: data.levels[i].name,
          description: data.levels[i].description,
          picture: data.levels[i].imageUrl
        }
      );
      $steakTable.append(html);
    }
  }

  function start() {

    $steakTable.html('Your table is loading, please wait');

    var promise = $.ajax({
      url:'http://tiy.ericsowell.com/api/cookingsteaks'
    });

    promise.done(steaks);

  }
  context.start = start;

})(window.Steak);












// $steakTable = $('#steak-table');
//
//
// var promise = $.ajax({
//
//   url:'http://tiy.ericsowell.com/api/cookingsteaks'
// });
//
// function recipeBook(data) {
//   console.log(data)
//
//
//   for(i = 0; i < data.levels.length; i++) {
//     var html =
//       '<tr>' +
//       '<td>' +
//       data.levels[i].name +
//       '</td>' +
//       '<td>' +
//       data.levels[i].description +
//       '</td>' +
//       '<td>' +
//       '<img src="' + data.levels[i].imageUrl + '" />' +
//       '</td>' +
//       '</tr>'
//
//     $steakTable.append(html);
//   };
// }
//
//
// promise.done(recipeBook);
