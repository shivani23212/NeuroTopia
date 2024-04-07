console.log("LMAOO HII");


function remove() {
    console.log("remove")
    const rug = document.getElementById("popup-rug").style.display = "none";
    const light = document.getElementById("popup-light").style.display = "none";
    const technology = document.getElementById("popup-technology").style.display = "none";
    const toys = document.getElementById("popup-toys").style.display = "none";
}

function display() {
    console.log("KIOGBJIOTSRJBUSGFPOBDFOP")

    let feature = sessionStorage.getItem("feature");
    console.log(feature+" is the feature");

    if (feature == "rug") {
        console.log("hiiiiiiiiiiiiiiiiiiii")
        // remove();
        rug.style.display = "block";
      }
    else if (feature == "light") {
        // remove();
        light.style.display = "block";
      }
    else if (feature == "technology") {
        remove();
        technology.style.display = "block";
      }
    else if (feature == "toys") {
        remove();
        toys.style.display = "block";
      }

}
