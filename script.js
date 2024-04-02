// on window load
window.onbeforeunload  = function () {
  console.log("window loaded");
  var card = document.getElementsByClassName("card");
//   card.style.height = '45%';
//   card.style.zIndex = '3';
  for (var i = 0; i < card.length; i++) {
    card[i].style.height = "45%";
    card[i].style.zIndex = "3";
    card[i].style.transform = "scale(1.0)";
  }
};

document.addEventListener("DOMContentLoaded", function() {
    console.log("window loaded");
    var card = document.getElementsByClassName("card");
  //   card.style.height = '45%';
  //   card.style.zIndex = '3';
    for (var i = 0; i < card.length; i++) {
      card[i].style.height = "45%";
      card[i].style.zIndex = "3";
    }
  })

var cards = document.getElementsByClassName("card");
// add eventlistener for each item in card list

function addCardEvent() {
  // set high z index to make sure card is on top
  this.style.zIndex = "1000";
  // scale card element up over 5 seconds
  this.style.transition = "transform 3s";
  this.style.transform = "scale(10.0)";

  // change webpage after the transition
  setTimeout(function() {
    // card.style.transition = 'transform 0s';
    // this.style.transform = "scale(1.0)";
    // this.style.height = "45%";
    window.location.href = "./dystopia.html";
  }, 2000);
}

for (var i = 0, len = cards.length; i < len; i++) {
    cards[i].onclick = addCardEvent
  }
  

// card.addEventListener('click', function() {
//     // set high z index to make sure card is on top
//     card.style.zIndex = '1000';
//     // scale card element up over 5 seconds
//     card.style.transition = 'transform 3s';
//     card.style.transform = 'scale(10.0)';

//     // change webpage after the transition
//     setTimeout(function() {
//         // card.style.transition = 'transform 0s';
//         card.style.transform = 'scale(1.0)';
//         card.style.height = '45%';
//         window.location.href = "./dystopia.html";

//     }, 2000);

//     }
// );


// on back browser button click, reset card to original state
