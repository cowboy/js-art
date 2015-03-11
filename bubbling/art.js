// Generate a random DOM.
// http://twitter.com/cowboy/status/65845594400362496
var s;
function add() {
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

reset();

var delay = 0;
var lastAddTime = new Date;
requestAnimationFrame(function main() {
  var bodyHeight = document.body.scrollHeight;
  var windowHeight = window.innerHeight;
  var heightRatio = bodyHeight / windowHeight;
  if (heightRatio > 3) {
    reset();
  }
  var currentTime = new Date;
  if (currentTime - lastAddTime > delay) {
    delay = 100 * Math.random();
    lastAddTime = currentTime;
    add();
  }
  $(window).scrollTop((bodyHeight - windowHeight) / 2);
  requestAnimationFrame(main);
});

// Cycle bg, starting at a random color.
(function(time){
  var start = Math.floor(Math.random() * time) + 1;
  var dec = "animation: bgcolors -" + start + "s " + time + "s linear infinite;";
  var html = "<style>html{-webkit-" + dec + dec + "}</style>";
  $("head").append(html);
}(10));
