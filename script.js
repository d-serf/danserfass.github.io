// Function to show the selected page and hide others
function showPage(pageId) {
    document.querySelectorAll('.container').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Wait until the page is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('homeBtn').addEventListener('click', () => showPage('home'));
    document.getElementById('experienceBtn').addEventListener('click', () => showPage('experience'));
    document.getElementById('projectsBtn').addEventListener('click', () => showPage('projects'));
    document.getElementById('aboutBtn').addEventListener('click', () => showPage('about'));

    // Set home page as default
    showPage('home');
});
