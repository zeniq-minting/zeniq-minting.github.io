function getlngcode() {
    try {
        const p = window.location.pathname;
        const l0 = p.split('index')[1];
        return l0.includes('-') ? l0.split('-')[1].split('.html')[0] : 'en';
    } catch (e) {
        return 'en';
    }
}

const lngvideomap = {
    en: 'https://www.youtube.com/embed/o5-LJZf4xho?rel=0',
    de: 'https://www.youtube.com/embed/o5-LJZf4xho?rel=0',
    ru: 'https://www.youtube.com/embed/o5-LJZf4xho?rel=0',
    es: 'https://www.youtube.com/embed/o5-LJZf4xho?rel=0',
};

const link = lngvideomap[getlngcode()] || 'https://www.youtube.com/embed/o5-LJZf4xho?rel=0';

document.addEventListener("DOMContentLoaded", function () {
    let link = window.location.href
    let myRegexp = new RegExp('ref/(.*)');
    if (link.match(myRegexp)) {
        let refCode = myRegexp.exec(link)[1];
        localStorage.setItem('ref', refCode);
    }
});

const swiper = new Swiper('.testimonial > .swiper-container', {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1000: {
            spaceBetween: 20,
            slidesPerView: 3
        },
        769: {
            spaceBetween: 20,
            slidesPerView: 2.5
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 1.8,
        },
        320: {
            spaceBetween: 20,
            slidesPerView: 1
        }
    }
});

const swiper2 = new Swiper('.benefits-md > .swiper-container', {
    slidesPerView: 2.5,
    speed: 400,
    spaceBetween: 20,
    loop: true,
});

//video popup
let video = document.querySelector('#video-popup_wrap');
let openVideo = document.querySelector('#toggle-video');
let closeVideo = document.querySelector('#video-popup_close');

let videoIframe = `<iframe width="1280" height="720" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

const openModal = () => {
    video.classList.add('active');
    document.querySelector('#video-popup').innerHTML = videoIframe;
}
const closeModal = () => {
    video.classList.remove('active');
    document.querySelector('#video-popup').innerHTML = ``;
}

openVideo.addEventListener('click', openModal);
closeVideo.addEventListener('click', closeModal);
video.addEventListener('click', closeModal);


//tabs
const tablinks = document.getElementsByClassName("tablinks");
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].onclick = setTab;
}

function setTab() {
    let tabName = this.dataset.tabValue;
    let tabcontent = document.getElementsByClassName("foundation-tab-content");
    let tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    this.className += " active";
}

document.getElementById("defaultOpen").click();
