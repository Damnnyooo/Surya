// Smooth Scrolling Functionality for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset for fixed header
            behavior: 'smooth'
        });
    });
});
