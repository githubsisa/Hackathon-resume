// Grabbing the button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Adding an event listener to the button to toggle the visibility of the skills section
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
