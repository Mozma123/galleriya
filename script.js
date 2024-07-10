let currentImageIndex = 0;
const images = document.querySelectorAll('.image-gallery img, .image-gallery2 img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'flex'; // Change display to flex
    lightboxImage.src = images[index].src;
    lightboxImage.style.width = '80%'; // Ensure image fits within 80% of the lightbox width
    lightboxImage.style.height = '80%'; // Ensure image fits within 80% of the lightbox height
    lightboxImage.style.objectFit = 'contain'; // Ensure image maintains its aspect ratio
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    lightboxImage.src = images[currentImageIndex].src;
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-gallery img, .image-gallery2 img");

    images.forEach(image => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "rotate(50deg)";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "rotate(0deg)";
        });
    });
});
 // Disable right-click context menu
 document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable certain keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Disable Ctrl+U, Ctrl+S, Ctrl+Shift+I, Ctrl+Shift+J
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || (e.shiftKey && (e.key === 'I' || e.key === 'J')))) {
        e.preventDefault();
    }
});
