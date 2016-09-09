'use strict';
if (this.Dragonlance === undefined) this.Dragonlance = {};

(function(context){

  function characters(data) {
    var $templateHtml = $('#character-template');
    var htmlFactory = _.template($templateHtml);
    var $characterTable = $('.character-table');

    for(var i = 0; i < data.characters.length; i++) {
      var html = htmlFactory(
        {
          names: characters[i].name,
          race: characters[i].race,
          description: characters[i].description;
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
