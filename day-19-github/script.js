function dataBackFromApi(data) {
  console.log(data)
  $('#query-box').val(data.user_search_url);
}

var promise = $.ajax({
  url: 'https://api.github.com/'
});

promise.done(dataBackFromApi);

function searchComplete(data) {
  console.log(data);
}

function searchNow() {
  var query = $('#query-box').val();

var promise =  $.ajax({
    url: query
  });

  promise.done(searchComplete);
}

$('#do-user-search').on('click', searchNow);
