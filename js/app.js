document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({});

    let content = document.querySelector('.container .content');

    if (content) {

        let preloader = document.querySelector('.preloader');

        let solid_bg = preloader.querySelector('.solid-bg');

        // Scale down the content area
        tl.fromTo(content,
        {
            scale: 1
        },
        {
            scale: 0.8,
            duration: 1
        });

        // Animate the orange background from bottom to top
        tl.fromTo(solid_bg,
        {
            y: 850
        },
        {
            ease: "power4.inOut",
            duration: 1.2,
            y: 0
        }, '-=0.1');
        
    }
});