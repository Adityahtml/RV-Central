const dropdownButtons = document.querySelectorAll('.filterSeach .dropdown-toggle');
dropdownButtons.forEach(button => {
    const dropdownMenu = button.nextElementSibling;
    dropdownMenu.querySelectorAll('.selectOption .dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            event.preventDefault();
            button.textContent = item.textContent;
        });
    });
});

// slick slider
$(document).ready(function () {

    $('.slider-mainBox').slick({
        dots: false,
        infinite: true,
        arrows:false,
        speed: 300,
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});