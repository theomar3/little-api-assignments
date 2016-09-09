var $theTable = $('#the-table');

function dataRetrieved(data) {
  for(var i=0; i<data.characters.length; i++) {
    var html =
    '<tr>' +
    '<td>' + data.characters[i].name + '</td>' +
    '<td>' + data.characters[i].race + '</td>'+
    '<td>' + data.characters[i].description + ' </td>'+
    '</tr>';

    $theTable.append(html);
  }
}

var promise = $.ajax({

  url: 'http://localhost:5003/api/dragonlance'
});
