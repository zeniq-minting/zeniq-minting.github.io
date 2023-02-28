function getlngcode() {
    try {
        const p = window.location.pathname;
        const l0 = p.split('video')[1];
        return l0.includes('-') ? l0.split('-')[1].split('.html')[0] : 'en';
    } catch (e) {
        return 'en';
    }
}

const lngvideomap = {
    en: 'https://www.youtube.com/embed/HRh3S4fvbLQ?rel=0',
    de: 'https://www.youtube.com/embed/7AVcajQw6sI?rel=0',
    ru: 'https://www.youtube.com/embed/PKOmYZIPjq4?rel=0',
    es: 'https://www.youtube.com/embed/SUSZdgkRY5M?rel=0',
};

const link = lngvideomap[getlngcode()] || 'https://www.youtube.com/embed/HRh3S4fvbLQ?rel=0';

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
