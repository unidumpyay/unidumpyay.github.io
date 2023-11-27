function bg() {
        const body = document.body;

        setTimeout(function() {
        body.style.backgroundPosition = 'left top'; 
        }, 100);
};
document.addEventListener('DOMContentLoaded', function() {
    bg();
});