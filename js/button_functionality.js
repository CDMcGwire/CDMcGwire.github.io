// Establish mobile menu drawer functionality
var drawerToggle = document.getElementById("menu-handle-toggle");
var header = document.getElementById("menu");
var menuInitial = header.style.bottom;
drawerToggle.onclick = function() {
  if (drawerToggle.checked) {
    header.style.bottom = "0";
  } else {
    header.style.bottom = menuInitial;
  }
};


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};


// Setup comment bubble functionality
var activeSideviewText = null;
var activeSideviewButton = null;
var activeSideviewPhoto = null;
function makeSideviewButtonCallback(button) {
  var view = document.getElementById(button.value).parentNode;
  var originalColor = button.style.backgroundColor;

  return function() {
    if (activeSideviewText && activeSideviewText !== view) {
      activeSideviewButton.style.background = originalColor;
      activeSideviewText.style.display = "none";
    }

    if (view.style.display === "inline-block") {
      view.style.display = "none";
      button.style.background = originalColor;
      activeSideviewText = null;
      activeSideviewButton = null;
    }
    else {
      view.style.display = "inline-block";
      button.style.background = "#7BB2FF"
      activeSideviewText = view;
      activeSideviewButton = button;
    }
  }
};
  
// Establish comment functionality on desktop.
var textButtons = document.getElementsByClassName("button-context");
for (var i = 0; i < textButtons.length; i++) {
  var button = textButtons[i];

  textButtons[i].onclick = makeSideviewButtonCallback(button);
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
      console.log("replacing image");

      var cleared = imageContainer.cloneNode(false);
      parent.replaceChild(cleared, imageContainer);
      imageContainer = cleared;

      imageContainer.appendChild(image.cloneNode(false));
      activeImage = image;
    };
  };
  
  // Establish image button functionality on desktop
  var imgButtons = document.getElementsByClassName("button-image");
  for (var i = 0; i < imgButtons.length; i++) {
    var button = imgButtons[i];
    var image = document.getElementById(button.value);
    console.log("adding function");
    
    imgButtons[i].onclick = makeImageButtonCallback(button);
    if (imgButtons.length > 0) imgButtons[0].onclick.apply(imgButtons[0]);
  }
};
