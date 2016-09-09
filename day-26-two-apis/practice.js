'use strict';
if (this.AppName === undefined) this.AppName = {};

(function(context) {

  var $apis = $('#apis');

  function secondaryApiCallRetrieved(data) {
    console.log(data);
  }

  function firstApiCall(data) {
    console.log(data);

    for(key in data) {
      var value = data[key];
      var html = '<li data-url="' + value + '">' + key + '</li>';
      $apis.append(html);
    }
  }

  function generateApiURL(evt) {
    var $li = evt.target;
    var url = $li.data('url');

    var promise = $.ajax({
      url: url
    });

    promise.done(secondaryApiCallRetrieved);
  }

  function start() {

    var promise = $.ajax({
      url: 'http://api.github.com'
    });

    promise.done(firstApiCall);

    $apis.on('click', generateApiURL);

  }

  context.start = start;

})(window.AppName);
