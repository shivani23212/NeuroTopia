var background = document.getElementsByClassName("peephole")[0];
var info_title = document.getElementById("info-overlay-title");
var dyslexia_info = document.getElementById("dyslexia-info");
var adhd_info = document.getElementById("adhd-info");
var asd_info = document.getElementById("asd-info");

window.onload = function () {
  const div = document.querySelector(".peephole");
  let isIn = false;
  div.addEventListener("mouseover", function () {
    isIn = true;
  });
  div.addEventListener("mouseout", function () {
    isIn = false;
  });
  div.addEventListener("mousemove", function (event) {
    if (isIn) {
      div.style.setProperty("--x", event.clientX - 200 + "px");
      div.style.setProperty("--y", event.clientY - 200 + "px");
    }
  });
};

function displayBackground(condition) {
  if (condition == "dyslexia") {
    background.style.backgroundImage = "url(../images/dyslexia.png)";
    info_title.innerHTML = "Dyslexia in the Classroom";
    adhd_info.style.display = "none";
    asd_info.style.display = "none";
    dyslexia_info.style.display = "block";
  } else if (condition == "adhd") {
    background.style.backgroundImage = "url(../images/adhd.png)";
    info_title.innerHTML = "ADHD in the Classroom";
    adhd_info.style.display = "block";
    asd_info.style.display = "none";
    dyslexia_info.style.display = "none";
  } else if (condition == "asd") {
    background.style.backgroundImage = "url(../images/asd.png)";
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

function passOnFeature(feature) {
  console.log("HIIIIIIIIIIIIIIIIII");
  if (feature == "rug") {
    sessionStorage.setItem('feature', 'rug');
  }
  else if (feature == "light") {
    sessionStorage.setItem('feature', 'light');
  }
  else if (feature == "technology") {
    sessionStorage.setItem('feature', 'technology');
  }
  else if (feature == "toys") {
    sessionStorage.setItem('feature', 'toys');
  }

  console.log(sessionStorage.getItem("feature"));
}


function Popup(item) {
  var myDialog = document.createElement("dialog");
  myDialog.style.width = "50%";
  document.body.appendChild(myDialog)
  if (item == "rug") {
    var text = "According to current evidence, expecting students to use traditional desks for extended periods of time without movement only leads to less attentiveness and increased misbehaviour [1], therefore it is crucial we provide flexible seating to support learning. These seating arrangements should be designed with neurodiversity in mind. Recommendations of potential arrangements include a mix of therapy balls [2], armchairs, standing desks and equipment for children to ‘fidget’ with during class. This in particular helps children who process sensory inputs differently to neurotypical students [3]. Placing a rug or carpet in the middle of the classroom and cloth under chair legs helps to reduce the noise travelling along the room, making it easier for students who may experience overstimulation more often [4]."
  }
  else if (item == "light") {
    var text = "Natural lighting is encouraged over fluorescent lighting due to several reasons. Firstly, children with ASD may be distracted by the humming of fluorescent fixtures [1], or may feel the light is harsh on their eyes [2], which has been shown to increase repetitive behaviours in children [3]. Bubble tube lamps and lava lamps are also recommended to help children feel at ease and comfortable enough to learn [4]. If artificial lighting must be used, they should be accompanied by a dimmer, to alter the lighting to the childrens’ needs and lamps should be of a warm colour temperature, between 3000-3500K [5].";
  }
  else if (item == "technology") {
    var text = "Assistive technologies such as text-to-speech, voice-recognition and interactive whiteboard software can be used to help children communicate with their peers and the teacher. These technologies have also been proven to significantly improve academic achievement in students with disabilities across multiple studies [1]. In particular, the use of mobile devices such as iPads and smartphones has proven to be useful due to being portable enough to be taken home and used by the child for out-of-classroom learning [2]. However it is important to recognise that teachers will require training regarding how to cater these technologies to the individual needs of each student [3].";
  }
  else if (item == "toys") {
    var text = "Storing an array of sensory and fidget toys for students to use during class promotes a more relaxed and engaged learning atmosphere. These toys help neurodivergent students to ‘tune in’ and are recommended by mental health counsellors to help individuals ‘stay calm and self-regulated in order to focus, attend, listen, and participate’ [1]. They have also been shown to help children with autism develop social skills such as turn taking and imitation [2]. A recent argument has been put in place by Fan et al. for multi-sensory educational toys, due to their study showing how interaction ‘not only increased average engagement times but also higher learning improvements compared to groups with traditional toys’ [3].";
  }
  var paragraph = document.createTextNode(text);
  myDialog.appendChild(paragraph);

  var br = document.createElement("br");
  myDialog.appendChild(br);

  const newButton = document.createElement('button');
  newButton.textContent = 'Close';
  newButton.style.marginLeft = "50%";
  newButton.style.marginTop = "10px";
  myDialog.appendChild(newButton);

  newButton.addEventListener('click', () => {
    myDialog.close();
  });
  myDialog.showModal();
}

function setReferenceToNone() {
  document.getElementById("dystopia-dyslexia").style.display = "none";
  document.getElementById("dystopia-adhd").style.display = "none";
  document.getElementById("dystopia-asd").style.display = "none";
  document.getElementById("utopia-seating").style.display = "none";
  document.getElementById("utopia-lighting").style.display = "none";
  document.getElementById("utopia-tech").style.display = "none";
  document.getElementById("utopia-toys").style.display = "none";
}

function displayReferences(category) {
  setReferenceToNone();
  if (category == "dystopia-dyslexia") {
    document.getElementById("dystopia-dyslexia").style.display = "block";
  }
  else if (category == "dystopia-adhd") {
    document.getElementById("dystopia-adhd").style.display = "block";
  }
  else if (category == "dystopia-asd") {
    document.getElementById("dystopia-asd").style.display = "block";
  }
  else if (category == "utopia-seating") {
    document.getElementById("utopia-seating").style.display = "block";
  }
  else if (category == "utopia-lighting") {
    document.getElementById("utopia-lighting").style.display = "block";
  }
  else if (category == "utopia-tech") {
    document.getElementById("utopia-tech").style.display = "block";
  }
  else if (category == "utopia-toys") {
    document.getElementById("utopia-toys").style.display = "block";
  }




}
