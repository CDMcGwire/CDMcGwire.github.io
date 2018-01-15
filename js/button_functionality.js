// Establish mobile menu drawer functionality
var drawerToggle = document.getElementById("menu-handle-toggle");
var drawerHandle = document.getElementById("menu-handle");
var drawerImage = document.getElementById("menu-graphic")
var header = document.getElementById("menu");

var menuInitial = header.style.bottom;
var baseColor = drawerHandle.style.backgroundColor;
var selectedColor = "#FA0";

drawerToggle.onclick = function() {
  if (drawerToggle.checked) {
    header.style.bottom = "0";
    drawerHandle.style.backgroundColor = selectedColor;
    drawerImage.style.transform = "rotate(180deg)";
  } else {
    header.style.bottom = menuInitial;
    drawerHandle.style.backgroundColor = baseColor;
    drawerImage.style.transform = "rotate(0deg)";
  }
};


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};


// Setup comment bubble functionality
var activeSideviewTexts = null;
var activeSideviewButton = null;
var activeSideviewPhoto = null;
function makeCollapseableButtonCallback(button) {
  var views = document.getElementsByClassName(button.value);
  var originalColor = button.style.backgroundColor;
  var displayType = "block";

  return function () {
    if (activeSideviewTexts && (activeSideviewTexts !== views)) {
      activeSideviewButton.style.background = originalColor;
      Array.prototype.forEach.call(views, view => {
        activeSideviewText.style.display = "none"
      });
    }
    if (views[0].style.display === displayType) {
      activeSideviewTexts = null;
      activeSideviewButton = null;
    }
    else {
      activeSideviewText = views[i];
      activeSideviewButton = button;
    }
    Array.prototype.forEach.call(views, view => {
      if (view.style.display === displayType) {
        view.style.display = "none";
        button.style.background = originalColor;
      }
      else {
        view.style.display = displayType;
        button.style.background = "#7BB2FF"
      }
    });
  }
};
  
// Establish comment functionality on desktop.
var textButtons = document.getElementsByClassName("button-context");
for (var i = 0; i < textButtons.length; i++) {
  var button = textButtons[i];

  textButtons[i].onclick = makeCollapseableButtonCallback(button);
}


if (!isMobile()) {
  // Setup side image functionality
  var activeImage = null;
  var imageContainer = document.getElementById("container-sideview");
  function makeImageButtonCallback(button) {
    console.log(imageContainer);
    var parent = imageContainer.parentNode;
    console.log(parent);
    var image = document.getElementById(button.value);

    return function() {
      if (activeImage && button.value === activeImage) return;
      console.log("replacing image " + button.value);

      var cleared = imageContainer.cloneNode(false);
      parent.replaceChild(cleared, imageContainer);
      imageContainer = cleared;

      imageContainer.appendChild(image.cloneNode(true));
      activeImage = image;
    };
  };
  
  // Establish image button functionality on desktop
  var imgButtons = document.getElementsByClassName("button-image");
  for (var i = 0; i < imgButtons.length; i++) {
    var button = imgButtons[i];
    var image = document.getElementById(button.value);
    console.log("Setting up Image Button for " + button.value);
    
    imgButtons[i].onclick = makeImageButtonCallback(button);
    if (imgButtons.length > 0) imgButtons[0].onclick.apply(imgButtons[0]);
  }
};
