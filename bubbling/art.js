// Generate a random DOM.
// http://twitter.com/cowboy/status/65845594400362496
var s;
function add() {
  var bodyHeight = document.body.scrollHeight;
  var windowHeight = window.innerHeight;
  if (bodyHeight > 2 * windowHeight) {
    reset();
  }
  var method = Math.random() > 0.5 ? 'appendTo' : 'prependTo';
  var e = $('<div/>')[method](s[~~(Math.random()*(s.length-1))]);
  s.push(e);
  requestAnimationFrame(function() {
    e.addClass('styled');
  });
}

function reset() {
  s = ['body'];
  $('body').empty();
}

requestAnimationFrame(function scroll() {
  var bodyHeight = document.body.scrollHeight;
  var windowHeight = window.innerHeight;
  document.body.scrollTop = (bodyHeight - windowHeight) / 2;
  requestAnimationFrame(scroll);
});

reset();
add();
setInterval(add, 100);

// Cycle bg, starting at a random color.
(function(time){
  var start = Math.floor(Math.random() * time) + 1;
  var dec = "animation: bgcolors -" + start + "s " + time + "s linear infinite;";
  var html = "<style>html{-webkit-" + dec + dec + "}</style>";
  $("head").append(html);
}(10));
