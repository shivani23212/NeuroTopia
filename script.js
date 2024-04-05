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
        div.style.setProperty('--x', event.clientX-100 + 'px');
        div.style.setProperty('--y', event.clientY-100 + 'px');
      }
    });
  }

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }