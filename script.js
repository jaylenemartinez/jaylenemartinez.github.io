// Function to handle the intersection
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains('b')) {
      document.getElementById('title-heading').innerText = 'is an ...';
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
