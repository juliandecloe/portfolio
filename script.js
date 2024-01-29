//========== SCROLL ANIMATIONS ==========//

let homeWrap = document.querySelector('.home-wrap');
let oldScroll = newScroll = 0;

homeWrap.addEventListener('scroll', scrollDirection);

function scrollDirection() {
    newScroll = homeWrap.scrollTop;
    if (oldScroll > newScroll) {
        introContentUp();
        moveObjectUp();
    } else if (oldScroll < newScroll) {
        introContentDown();
        moveObjectDown();
    }
    oldScroll = newScroll;
}

// Scroll animation: Intro Content

const introHeader = document.querySelector('header');
const mainContent = document.querySelector('main h2');
const mainEl = document.querySelector('main');

function getObjectPosition(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top * 100 / window.innerHeight
    );
}

function introContentUp() {
    let circlePerc = getObjectPosition(mainContent) - 15;
    if (circlePerc > 0) {
        introHeader.classList.remove('hide');
    } else if (circlePerc > 100) {
        circlePerc = 100;
    }
    introHeader.style.setProperty('--clip', circlePerc + '%');
}

function introContentDown() {
    let circlePerc = getObjectPosition(mainContent) - 15;
    if (circlePerc < 0) {
        circlePerc = 0;
        introHeader.classList.add('hide');
    }
    introHeader.style.setProperty('--clip', circlePerc + '%');
}

safariCheck();

function safariCheck() {
    let rect = introHeader.getBoundingClientRect(); 
    if (navigator.userAgent.toLowerCase().indexOf('safari') > -1) {
        mainEl.style.setProperty('margin-top', rect.height + window.innerHeight + 'px');
    }
}

// Scroll animation: Show Projects

const projectItems = document.querySelectorAll('main section:first-of-type article > *');
let articlePos;

function moveObjectUp() {
    projectItems.forEach(item => {
        if (item.hasChildNodes()) {
            articlePos = getObjectPosition(item) - 25;
        } else {
            articlePos = getObjectPosition(item) - 35;
        }
        if (articlePos > 110) {
            articlePos = 110;
        } else if (articlePos < 1) {
            articlePos = 0;
        } else {
            articlePos += 1;
        }
        item.style.setProperty('--move-x', articlePos + 'vw');
          
    });
}

function moveObjectDown() {
    projectItems.forEach(item => {
        if (item.hasChildNodes()) {
            articlePos = getObjectPosition(item) - 25;
        } else {
            articlePos = getObjectPosition(item) - 35;
        }
        if (articlePos < 1) {
            articlePos = 0;
        } else {
            articlePos -= 1;
        }
        item.style.setProperty('--move-x', articlePos + 'vw');
    });
}

//========== HOME / ABOUT ME SWITCH ==========//

let aboutMeBtn = document.querySelector('.about-me-btn');
let aboutMeWrap = document.querySelector('footer');

aboutMeBtn.addEventListener('click', homeToAboutme);

function homeToAboutme() {
    homeWrap.style.setProperty('transform', 'translateY(-100vh)');
    aboutMeWrap.style.setProperty('transform', 'translateY(-100vh)');
}

let homeBtn = document.querySelector('.home-btn');

homeBtn.addEventListener('click', aboutmeToHome);

function aboutmeToHome() {
    aboutMeWrap.style.setProperty('transform', 'translateY(0)');
    homeWrap.style.setProperty('transform', 'translateY(0)');
}
