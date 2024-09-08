// Grabbing the button and the skills section
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Adding an event listener to the button to toggle the visibility of the skills section
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});