$steakTable = $('#steak-table');


var promise = $.ajax({

  url:'http://tiy.ericsowell.com/api/cookingsteaks'
});

function recipeBook(data) {
  console.log(data)


  for(i = 0; i < data.levels.length; i++) {
    var html =
      '<tr>' +
      '<td>' +
      data.levels[i].name +
      '</td>' +
      '<td>' +
      data.levels[i].description +
      '</td>' +
      '<td>' +
      '<img src="' + data.levels[i].imageUrl + '" />' +
      '</td>' +
      '</tr>'

    $steakTable.append(html);
  };
}


promise.done(recipeBook);
