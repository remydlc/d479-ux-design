function showPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-content');
    sections.forEach(sec => sec.classList.remove('active'));

    // Show the specific section
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    }

    // Update active tab styling
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Correct for the 'get-around' button ID mapping
    const btnId = pageId === 'get-around' ? 'btn-get' : 'btn-' + pageId;
    document.getElementById(btnId).classList.add('active');

    // Scroll back to top
    window.scrollTo(0, 0);
}

function filterContent() {
    const query = document.getElementById('site-search').value.toLowerCase();
    
    // Automatically switch to attractions page to show results if query is typed
    if (query.length > 2) {
        showPage('attractions');
    }

    const attractionsText = document.querySelectorAll('#page-attractions p, #page-attractions li');
    
    attractionsText.forEach(el => {
        const text = el.textContent.toLowerCase();
        if (text.includes(query) && query !== "") {
            el.style.display = "block";
            el.style.backgroundColor = "#a8e3d9"; // Morning Glory highlight
        } else if (query === "") {
            el.style.display = "block";
            el.style.backgroundColor = "transparent";
        } else {
            el.style.backgroundColor = "transparent";
        }
    });
}