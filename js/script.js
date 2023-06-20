function openImage(imageElement) {
    var fullImageElement = document.getElementById("fullImage");
    var overlayElement = document.getElementById("overlay");
  
    fullImageElement.src = imageElement.src;
    overlayElement.style.display = "block";
  
    overlayElement.classList.remove("show");
    overlayElement.offsetHeight; // Trigger reflow
    overlayElement.classList.add("show");
  }
  
  

  function closeImage() {
    var overlayElement = document.getElementById("overlay");

    overlayElement.style.display = "none";
  }

    setTimeout(function () {
      overlayElement.style.opacity = 1;
    }, 50);