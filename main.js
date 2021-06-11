var reasons = [
    "Dad",
    "Me",
    "Mom",
  
  ];
  var images = [
   "https://hdqwalls.com/wallpapers/rog-logo-eg.jpg",
    "https://hdqwalls.com/wallpapers/rog-logo-eg.jpg",
    "https://hdqwalls.com/wallpapers/rog-logo-eg.jpg"
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  
  
  