function showPage(pageId) {
    document.querySelectorAll('.container').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

document.getElementById('homeBtn').addEventListener('click', () => showPage('home'));
document.getElementById('experienceBtn').addEventListener('click', () => showPage('experience'));
document.getElementById('projectsBtn').addEventListener('click', () => showPage('projects'));
document.getElementById('aboutBtn').addEventListener('click', () => showPage('about'));
