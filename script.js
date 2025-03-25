document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".Section1 .slides .slide");
    const buttons = document.querySelectorAll(".Section1 .buttons button");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        buttons.forEach((btn, i) => {
            btn.style.opacity = i === index ? "1" : "0.25";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);

    setInterval(nextSlide, 2000); // Auto-slide every 3 seconds
});


//section3

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".section3 .slide-group");
    const buttons = document.querySelectorAll(".section3 .buttons button");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide() {
        const offset = -currentIndex * 100; 
        slides.forEach(group => {
            group.style.transform = `translateX(${offset}%)`;
        });

        // Buttons ke opacity update karna
        buttons.forEach((btn, i) => {
            btn.style.opacity = i === currentIndex ? "1" : "0.25";
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    }

    // Auto-slide every 3 seconds
    let slideInterval = setInterval(nextSlide, 3000);

    // Manual navigation
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentIndex = index;
            updateSlide();
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3000);
        });
    });

    updateSlide(); // Initialize first slide
});

//sec3

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".sec3 img");

    images.forEach(img => {
        const defaultSrc = img.src;  
        const hoverSrc = img.getAttribute("data-hover");  

        img.addEventListener("mouseenter", function () {
            img.src = hoverSrc;  
        });

        img.addEventListener("mouseleave", function () {
            img.src = defaultSrc;  
        });
    });
});

//bag count
document.addEventListener("DOMContentLoaded", function () {
    let bagCountElement = document.querySelector(".bag-count");
    let count = 0;

    document.querySelectorAll("a img").forEach(img => {
        img.addEventListener("dblclick", function () {
            count++;
            bagCountElement.textContent = count;
            bagCountElement.style.display = "inline-block"; // Ensure visibility when count updates
        });
    });
});



