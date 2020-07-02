//Logica del boton Share
let toggleShareStatus = false;
const togglerShare = () => {
  let shareContainer = document.getElementById("share-container");

  if (toggleShareStatus == false) {
    shareContainer.style.visibility = "visible";
    toggleShareStatus = true;
  } else {
    shareContainer.style.visibility = "hidden";
    toggleShareStatus = false;
  }
};
