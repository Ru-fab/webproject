document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.querySelector(".product-grid");
    let isPaused = false;
    
    // Duplicate products to create seamless infinite scrolling
    const items = Array.from(productGrid.children);
    items.forEach(item => {
        let clone = item.cloneNode(true);
        productGrid.appendChild(clone);
    });
    
    let scrollAmount = 0;
    function autoSlide() {
        if (!isPaused) {
            scrollAmount += 1; // Adjust speed here
            productGrid.style.transform = `translateX(-${scrollAmount}px)`;
            
            // Loop seamlessly
            if (scrollAmount >= items[0].offsetWidth) {
                productGrid.appendChild(productGrid.firstElementChild);
                productGrid.style.transform = `translateX(0px)`;
                scrollAmount = 0;
            }
        }
        requestAnimationFrame(autoSlide);
    }
    
    autoSlide();
    
    // Pause scrolling when hovering over product items
    productGrid.addEventListener("mouseenter", () => isPaused = true);
    productGrid.addEventListener("mouseleave", () => isPaused = false);
});
