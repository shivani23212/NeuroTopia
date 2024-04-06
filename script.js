var background = document.getElementsByClassName("peephole")[0];
var info_title = document.getElementById("info-overlay-title");
var dyslexia_info = document.getElementById("dyslexia-info");
var adhd_info = document.getElementById("adhd-info");
var asd_info = document.getElementById("asd-info");

window.onload = function() {
    const div = document.querySelector('.peephole');
    let isIn = false;
    div.addEventListener('mouseover', function() {
      isIn = true;
    });
    div.addEventListener('mouseout', function() {
      isIn = false;
    });
    div.addEventListener('mousemove', function(event) {
      if (isIn) {
        div.style.setProperty('--x', event.clientX-200 + 'px');
        div.style.setProperty('--y', event.clientY-200 + 'px');
      }
    });
  }

  function displayBackground(condition) {
    if (condition == 'dyslexia') {
      background.style.backgroundImage="url(./dyslexia.png)";
      info_title.innerHTML = "Dyslexia in the Classroom";
      adhd_info.style.display = "none";
      asd_info.style.display = "none";
      dyslexia_info.style.display = "block";  
    }
  else if (condition == 'adhd') {
    background.style.backgroundImage="url(./adhd.png)";
    info_title.innerHTML = "ADHD in the Classroom";
    adhd_info.style.display = "block";
    asd_info.style.display = "none";
    dyslexia_info.style.display = "none";  
  }
  else if (condition == 'asd') {
    background.style.backgroundImage="url(./asd.png)";
    info_title.innerHTML = "ASD in the Classroom";
    asd_info.style.display = "block";
    dyslexia_info.style.display = "none";  
    adhd_info.style.display = "none";
  }
    off();
}

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function on_info_popup() {
    document.getElementById("info-overlay").style.display = "block";
  }

  function off_info_popup() {
    document.getElementById("info-overlay").style.display = "none";
  }
