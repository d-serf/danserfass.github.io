function showPage(pageId) {
    document.querySelectorAll('.container').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}
