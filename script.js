const animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params) {
        for( let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index] ;
            const animItemHeight = animItem.offsetHeight;
            const animaItemOffset = offset(animItem).top;

            const animStart = 1;
            const animEarlyStart = -2;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if((pageYOffset > animaItemOffset - animItemPoint) && animaItemOffset < (animaItemOffset + animItemHeight)) {
                animItem.classList.add('anim-active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('anim-active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop =  window.pageYOffset || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

const animateBanner = document.querySelector('.animate-banner');
const animateHeroes = document.querySelectorAll('.animate-hero');
const animateDecorations = document.querySelectorAll('.animate-decoration');
const animateLateDecorations = document.querySelectorAll('.animate-late-decoration');

function animateHeroBanner() {
    for( let index = 0; index < animateHeroes.length; index++) {
        const animateHero = animateHeroes[index];
        animateHero.classList.add('animate-hero--active');
    }
}

if(animateBanner) {
    function animateDecorationBanner() {
        for( let index = 0; index < animateDecorations.length; index++) {
            const animItem = animateDecorations[index];
            animItem.classList.add('active');
        }
    }
    function animateLateDecorationBanner() {
        for( let index = 0; index < animateLateDecorations.length; index++) {
            const animItem = animateLateDecorations[index];
            animItem.classList.add('active');
        }
    }
}

function showYear() {
    var date = new Date();

    var year = date.getFullYear();

    document.getElementById("currentYear").innerText = year;
}

const bannerImage = document.querySelector('.banner__image');
const contentBannerColumn = document.querySelector('.banner__column--left');

function getBannerHeight() {
    let bannerHeight = bannerImage.clientHeight + 'px';
    if(window.outerWidth > 767) {
        contentBannerColumn.style.minHeight =  bannerHeight;
    }
}

const header = document.querySelector('.header');

window.addEventListener('scroll', function(e) {
    if (bannerImage.clientHeight > window.scrollY) {
        header.classList.add('header--sticky');
    }
    if (window.scrollY === 0) {
        header.classList.remove('header--sticky');
    }
})

const miniBannerMobile = document.querySelector('.fifth-block__image--mobile');
const miniBannerDesktop = document.querySelector('.fifth-block__image--desktop');
const miniBannerBlock = document.querySelector('.fifth-block__bg');

function getMiniBannerSize() {
        // let countWidth = miniBannerWidth.toFixed(1) + 'px';
    let widthMobile = (miniBannerBlock.clientWidth / 2).toFixed(1) + 'px';
    let widthDesktop = (miniBannerBlock.clientWidth / 5 * 3).toFixed(1) + 'px';
    miniBannerMobile.style.width = widthMobile;
    miniBannerDesktop.style.width = widthDesktop;

    console.log(widthDesktop, widthMobile);
}


showYear();
setTimeout(animateLateDecorationBanner, 10);
setTimeout(animateDecorationBanner, 80);
setTimeout(animateHeroBanner, 250);
getBannerHeight();
getMiniBannerSize();
