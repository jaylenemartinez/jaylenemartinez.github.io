// Function to handle the intersection
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains('b')) {
      document.getElementById('title-heading').innerText = 'is an ...';
      $(document).ready(function() {
        $(".title.b").hover(
          function() {
            $(".intro-container .profile-picture").css("background", "url('images/artistprofile6.png')");
          },
          function() {
            $(".intro-container .profile-picture").css("background", "url('images/normalprofile.png')");
          }
        );
      });
      
    } else if (!entry.isIntersecting && entry.target.classList.contains('b')) {
      const text = document.getElementById('title-heading').innerText;
      document.getElementById('title-heading').innerText = 'is a ...';
    } 
  });
};

// Create an intersection observer instance
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5, // Intersection threshold
});

// Get the target element ('ARTIST' element)
const artistElement = document.querySelector('.title.b');

// Observe the target element
observer.observe(artistElement);


$(document).ready(function() {
  $(".title.c").hover(
    function() {
      $(".intro-container .profile-picture").css("background", "url('images/graphicdesignprofile.png')");
    },
    function() {
      $(".intro-container .profile-picture").css("background", "url('images/normalprofile.png')");
    }
  );
});


$(document).ready(function() {
  $(".title.a").hover(
    function() {
      $(".intro-container .profile-picture").css("background", "url('images/softwareprofile.png')");
    },
    function() {
      $(".intro-container .profile-picture").css("background", "url('images/normalprofile.png')");
    }
  );
});

function loadImageAsync(src, callback) {
  var img = new Image();
  img.onload = function() {
    callback(null, img);
  };
  img.onerror = function() {
    callback('Error loading image: ' + src);
  };
  img.src = src;
}

// An array of image sources to load asynchronously
var imageSources = [
  'images/graphicdesignprofile.png',
  'images/artistprofile6.png',
  'images/normalprofile.png',
  'images/softwareprofile.png',
];

// Load all images asynchronously
var loadedImages = [];
var imagesLoaded = 0;

function checkAllImagesLoaded() {
  imagesLoaded++;
  if (imagesLoaded === imageSources.length) {
    // All images have been loaded
    console.log('All images loaded');
    // You can perform any additional actions here
  }
}

for (var i = 0; i < imageSources.length; i++) {
  loadImageAsync(imageSources[i], function(error, img) {
    if (error) {
      console.error(error);
    } else {
      loadedImages.push(img);
    }
    checkAllImagesLoaded();
  });
}