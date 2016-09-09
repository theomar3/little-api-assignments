'use strict';
if (this.Dragonlance === undefined) this.Dragonlance = {};

(function(context){

  function characters(data) {
    var $templateHtml = $('#character-template').html();
    var htmlFactory = _.template($templateHtml);
    var $characterTable = $('.character-table');

    for(var i = 0; i < data.characters.length; i++) {
      var html = htmlFactory(
        {
          names: data.characters[i].name,
          race: data.characters[i].race,
          description: data.characters[i].description
        }
      );
      $characterTable.append(html);
    }
  }

  function start() {


    var promise = $.ajax({
      url: 'http://localhost:5003/api/dragonlance'
    });

    promise.done(characters);

  }

  context.start = start;

})(window.Dragonlance);


// var $nameList = $('#name-list');
// var $raceList = $('#race-list');
// var $descriptionList = $('#description-list');
//
//
// var promise = $.ajax( {
//   url: 'http://localhost:5003/api/dragonlance'
//
// });
//
// function dragonLance(data) {
//   console.log(data);
//   for(var i = 0; i < data.characters.length; i++) {
//     var names = data.characters[i].name;
//     $nameList.append('<li>' + names + '</li>');
//   }
//
//   for(var i = 0; i < data.characters.length; i++) {
//     var races = data.characters[i].race;
//     $raceList.append('<li>' + races + '</li>');
//   }
//
//   for(var i = 0; i < data.characters.length; i++) {
//     var descriptions = data.characters[i].description;
//     $descriptionList.append('<li>' + descriptions + '</li>');
//   }
// };
//
//
//
//
// promise.done(dragonLance);
