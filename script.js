document.addEventListener('scroll', () => {
    const thingsAboutMe = document.querySelector('.about-me');
    const rect = thingsAboutMe.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        thingsAboutMe.classList.add('visible'); 
        thingsAboutMe.classList.remove('hidden');
    }
});

document.addEventListener('scroll', () => {
    const thingsAboutMe = document.querySelector('.My-Projects');
    const rect = thingsAboutMe.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        thingsAboutMe.classList.add('visible'); 
        thingsAboutMe.classList.remove('hidden');
    }
});

document.addEventListener('scroll', () => {
    const thingsAboutMe = document.querySelector('.Contact-Me');
    const rect = thingsAboutMe.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        thingsAboutMe.classList.add('visible'); 
        thingsAboutMe.classList.remove('hidden');
    }
});

document.addEventListener('scroll', () => {
    const thingsAboutMe = document.querySelector('.skills');
    const rect = thingsAboutMe.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        thingsAboutMe.classList.add('visible'); 
        thingsAboutMe.classList.remove('hidden');
    }
});

document.addEventListener('scroll', () => {
    const thingsAboutMe = document.querySelector('.Things-i-want-to-learn');
    const rect = thingsAboutMe.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        thingsAboutMe.classList.add('visible'); 
        thingsAboutMe.classList.remove('hidden');
    }
});

document.addEventListener('scroll', () => {
    const thingsAboutMe = document.querySelector('.My-Goal');
    const rect = thingsAboutMe.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        thingsAboutMe.classList.add('visible'); 
        thingsAboutMe.classList.remove('hidden');
    }
});