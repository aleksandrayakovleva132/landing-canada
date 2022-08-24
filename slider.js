$(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: true,
            dots: false,
            pauseOnHover: true,
            // cssEase:'linear',
            responsive: [
                {
                    breakpoint: 1010,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false,
                    }
                },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: false,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                }
            },
            {
                breakpoint: 391,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 2,
                    infinite: false,
                    autoplay: false,
                }
            }
            ],
            variableWidth: false,
            prevArrow: `<button type="button" class="slick-prev">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.56943 5.65166C0.613058 5.53914 0.678477 5.43634 0.76193 5.34916L5.34526 0.76583C5.43073 0.680362 5.5322 0.612565 5.64387 0.566309C5.75554 0.520054 5.87522 0.496246 5.9961 0.496246C6.2402 0.496246 6.47432 0.593219 6.64693 0.76583C6.7324 0.851299 6.80019 0.952765 6.84645 1.06444C6.89271 1.17611 6.91651 1.29579 6.91651 1.41666C6.91651 1.66077 6.81954 1.89489 6.64693 2.0675L3.62193 5.08333H10.5794C10.8225 5.08333 11.0557 5.17991 11.2276 5.35182C11.3995 5.52373 11.4961 5.75688 11.4961 6C11.4961 6.24311 11.3995 6.47627 11.2276 6.64818C11.0557 6.82009 10.8225 6.91667 10.5794 6.91667H3.62193L6.64693 9.9325C6.73285 10.0177 6.80104 10.1191 6.84758 10.2308C6.89412 10.3425 6.91808 10.4623 6.91808 10.5833C6.91808 10.7043 6.89412 10.8242 6.84758 10.9359C6.80104 11.0476 6.73285 11.1489 6.64693 11.2342C6.56171 11.3201 6.46033 11.3883 6.34862 11.4348C6.23692 11.4814 6.11711 11.5053 5.9961 11.5053C5.87508 11.5053 5.75527 11.4814 5.64357 11.4348C5.53186 11.3883 5.43048 11.3201 5.34526 11.2342L0.76193 6.65083C0.678477 6.56365 0.613058 6.46085 0.56943 6.34833C0.477746 6.12516 0.477746 5.87484 0.56943 5.65166Z" fill="inherit"/>
                        </svg>
                    </button>`,
            nextArrow: `<button type="button" class="slick-next">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4267 5.65166C11.383 5.53914 11.3176 5.43634 11.2342 5.34916L6.65083 0.76583C6.56536 0.680362 6.4639 0.612565 6.35223 0.566309C6.24056 0.520054 6.12087 0.496246 6 0.496246C5.75589 0.496246 5.52178 0.593219 5.34917 0.76583C5.2637 0.851299 5.1959 0.952765 5.14964 1.06444C5.10339 1.17611 5.07958 1.29579 5.07958 1.41666C5.07958 1.66077 5.17655 1.89489 5.34917 2.0675L8.37416 5.08333H1.41667C1.17355 5.08333 0.940394 5.17991 0.768486 5.35182C0.596577 5.52373 0.5 5.75688 0.5 6C0.5 6.24311 0.596577 6.47627 0.768486 6.64818C0.940394 6.82009 1.17355 6.91667 1.41667 6.91667H8.37416L5.34917 9.9325C5.26325 10.0177 5.19505 10.1191 5.14852 10.2308C5.10198 10.3425 5.07802 10.4623 5.07802 10.5833C5.07802 10.7043 5.10198 10.8242 5.14852 10.9359C5.19505 11.0476 5.26325 11.1489 5.34917 11.2342C5.43438 11.3201 5.53577 11.3883 5.64747 11.4348C5.75917 11.4814 5.87899 11.5053 6 11.5053C6.12101 11.5053 6.24082 11.4814 6.35253 11.4348C6.46423 11.3883 6.56562 11.3201 6.65083 11.2342L11.2342 6.65083C11.3176 6.56365 11.383 6.46085 11.4267 6.34833C11.5183 6.12516 11.5183 5.87484 11.4267 5.65166Z" fill="inherit"/>
                        </svg>
                    </button>`,
        });
});
