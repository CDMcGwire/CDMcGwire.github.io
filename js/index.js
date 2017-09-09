function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
  // Establish comment functionality on desktop.
  var text_buttons = document.getElementsByClassName("button-context");

  var activeSideviewText = null;
  var activeSideviewButton = null;
  var activeSideviewPhoto = null;

  for (var i = 0; i < text_buttons.length; i++) {
    let button = text_buttons[i];
    let contextText = document.getElementById(button.value);
    let originalColor = contextText.style.backgroundColor;

    text_buttons[i].onclick = function(args) {
      if (activeSideviewText && activeSideviewText !== contextText) {
        activeSideviewButton.style.background = originalColor;
        activeSideviewText.style.display = "none";
      }
      
      if (contextText.style.display === "inline-block") {
        contextText.style.display = "none";
        button.style.background = originalColor;
        activeSideviewText = null;
        activeSideviewButton = null;
      }
      else {
        contextText.style.display = "inline-block";
        button.style.background = "#7BB2FF"
        activeSideviewText = contextText;
        activeSideviewButton = button;
      }
    }
  }
  
  // Establish image button functionality on desktop
  var img_buttons = document.getElementsByClassName("button-image");
  var img_container = document.getElementById("container-sideview");
  let parent = img_container.parentNode;
  
  var active_img = null;
  
  for (var i = 0; i < img_buttons.length; i++) {
    let button = img_buttons[i];
    let image = document.getElementById(button.value);
    console.log("adding function");
    
    img_buttons[i].onclick = function() {
      if (active_img && button.value === active_img) return;
      console.log("replacing image");
      
      var cleared = img_container.cloneNode(false);
      parent.replaceChild(cleared, img_container);
      img_container = cleared;
      
      img_container.appendChild(image.cloneNode(false));
      active_img = image;
    };
  }
  if (img_buttons.length > 0) img_buttons[0].onclick.apply(img_buttons[0]);
}