// Any project-specific code — listeners and triggers for plugins

// Will output a random number between 0 and Max.
// If "7" is the max, 0-6 will be output
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// console.log(getRandomInt(7));
// 
// // If JS is loaded, change the body class
// document.addEventListener("DOMContentLoaded", function() {
//   document.body.classList.remove("no-js");
//   document.body.classList.add("js");
// });
// 
// // Randomize
// document.getElementById('randomize').addEventListener("DOMContentLoaded", function() {
//   var listitems = document.getElementById('randomize li');
//   Array.prototype.forEach.call(listitems, function(el, index, array){
//     if (el.classList.contains('show')) {
//       el.classList.remove('show');
//       el.classList.add('hide');
//     }
//   });
// });

function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

document.addEventListener("DOMContentLoaded", function(){

  // If JS is loaded, change the body class
  $('html').removeClass('no-js').addClass('js');

  var items = $('#randomize li').hide().toArray(),
      i = 0;
  shuffle(items);
  
  (function cycle() { 
    $(items[i]).fadeIn(250)
      .delay(5000)
      .fadeOut(250, cycle);
    i = ++i % items.length;
  })();
});
