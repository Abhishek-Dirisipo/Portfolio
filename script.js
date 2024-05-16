function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Flickity carousel
    var flkty = new Flickity('.certificates-carousel', {
        wrapAround: true,
        cellAlign: 'left',
        contain: true
    });

    // Handle previous button click
    document.querySelector('.prev-btn').addEventListener('click', function() {
        flkty.previous();
    });

    // Handle next button click
    document.querySelector('.next-btn').addEventListener('click', function() {
        flkty.next();
    });

    // Handle certificate click to enlarge
    var certificates = document.querySelectorAll('.certificate img');
    certificates.forEach(function(certificate) {
        certificate.addEventListener('click', function() {
            certificates.forEach(function(c) {
                if (c !== certificate) {
                    c.classList.remove('enlarged');
                }
            });
            certificate.classList.add('enlarged');
        });
    });

    // Function to handle certificate size based on visibility
    function handleCertificateSize() {
        certificates.forEach(function(certificate) {
            var rect = certificate.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                certificate.classList.add('enlarged');
            } else {
                certificate.classList.remove('enlarged');
            }
        });
    }

    // Event listener for scroll
    window.addEventListener('scroll', handleCertificateSize);

    // Initial call to handle certificate size on page load
    handleCertificateSize();
});
