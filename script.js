// script.js
function viewProduct(productId) {
    const images = {
        bottle1: ["bottle1.jpg", "bottle1_alt1.jpg", "bottle1_alt2.jpg"],
        bottle2: ["bottle2.jpg", "bottle2_alt1.jpg", "bottle2_alt2.jpg"]
    };

    const productImages = images[productId] || [];
    if (productImages.length > 0) {
        let galleryHtml = '<div class="gallery">';
        productImages.forEach(image => {
            galleryHtml += `<img src="${image}" alt="${productId}" class="gallery-img">`;
        });
        galleryHtml += '</div>';

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn" onclick="closeModal()">&times;</span>
                ${galleryHtml}
            </div>
        `;
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    } else {
        alert('No additional images available for this product.');
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    }
}
