const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const color = e.target.id; // Get the ID of the clicked button
    if (color) { // Ensure the ID exists
      body.style.backgroundColor = color; // Change background color
    }
  });
});
