var $nameList = $('#name-list');
var $raceList = $('#race-list');
var $descriptionList = $('#description-list');


var promise = $.ajax( {
  url: 'http://localhost:5003/api/dragonlance'

});

function dragonLance(data) {
  console.log(data);
  for(var i = 0; i < data.characters.length; i++) {
    var names = data.characters[i].name;
    $nameList.append('<li>' + names + '</li>');
  }

  for(var i = 0; i < data.characters.length; i++) {
    var races = data.characters[i].race;
    $raceList.append('<li>' + races + '</li>');
  }

  for(var i = 0; i < data.characters.length; i++) {
    var descriptions = data.characters[i].description;
    $descriptionList.append('<li>' + descriptions + '</li>');
  }
};




promise.done(dragonLance);
