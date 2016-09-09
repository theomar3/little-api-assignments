$emojiChart = $('.emoji-chart');

function addStuffByUsingLotsOfStringConcatenation(data) {
  //for every key in the data, one at a time, do something.
  for (var key in data) { //kind of like a for loop for array.length

    var html =
    '<div class="emoji">'
    + '<div class="key-name">' + key + '</div>'
    + '<img src="' + data[key] + '" />'
    + '</div>';
    $emojiChart.append(html);
  }
}


var promise = $.ajax({
  url:'https://api.github.com/emojis'
});

function emoji(data){
  console.log(data);


   addStuffByUsingLotsOfStringConcatenation(data);
}

promise.done(emoji);
