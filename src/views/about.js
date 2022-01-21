import { html, render } from "../lib.js";
import { certificates, education, skills } from "./templates.js";

const aboutTemplate = (showSkills, showEducation, showTrainings) => html`<section class="about-section section" id="about-section">
<div class="container">
    <div class="row">
        <div class="section-title">
            <h2 data-heading="main info">About me</h2>
            <h4>My introduction</h4>
        </div>
    </div>
    <div class="row">
        <div class="about-img">
            <div class="img-box inner-shadow">
                <img src="img/profile-pic.jpg" class="outer-shadow" alt="profile-pic">
            </div>
        </div>
        <div class="about-info">
            <div class="box about-info-box inner-shadow">
                <div class="box about-info-p-box outer-shadow">
                    <p><span>Hi! My name is Georgi Ivanov Georgiev.</span> Born and raised in a
                        small town called
                        Omurtag.
                        Graduated master in UE Varna in 2015. Curently leaving in Varna, Bulgaria! I am studying
                        at
                        SoftwareUniversity(Advanced Module). I am majoring in JavaScript Coding. I'm interested
                        in
                        Adobe
                        Photoshop also.
                    <p>I am a team player, enjoying meeting new people and forming new,
                        close
                        working relationships.
                        I am organized and enjoy reaching the completion stages & finishing tasks at hand!</p>
                    </p>
                </div>
            </div>
            <a href="cv.pdf" class="btn-1 cv-link outer-shadow hover-in-shadow">Download CV<i
                    class="download fas fa-file-download"></i></a>
            <a href="#" class="btn-1 hire-link outer-shadow hover-in-shadow">Hire me now?<i
                    class="hire-me fas fa-handshake"></i></a>
            <!-- social media starts -->
            <div class="social-media">
                <div class="social-media-links">
                    <a href="https://www.facebook.com/izruud" target="_blank" title="Go to my FB" class="outer-shadow hover-in-shadow"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/georgiev034" target="_blank" title="Go to my Insta" class="outer-shadow hover-in-shadow"><i class="fab fa-instagram"></i></a>
                    <a href="https://github.com/eternal034" target="_blank" title="Go to my GitHub" class="outer-shadow hover-in-shadow"><i class="fab fa-github-square"></i></a>
                </div>
                <!-- social media ends -->
            </div>
        </div>
    </div>
    <!-- about tabs starts -->
    <div class="row">
        <div class="about-tabs">
            <span class="tabs-item skills-tab" title="Show Skills" data-target=".skills" @click="${showSkills}">skills</span>
            <span class="tabs-item education-tab" title="Show Education" data-target=".education" @click="${showEducation}">edication</span>
            <span class="tabs-item trainings-tab" title="Show Certificates" data-target=".trainings" @click="${showTrainings}">additional trainings</span>
        </div>
    </div>
    <!-- about tabs ends -->
    <section id="onFocus" class="content"></section>
</section>`;

const skillsTemplate = () => html`${skills}`;

const educationTemplate = () => html`${education}`;

const trainingsTemplate = () => html`${certificates}`;

export function aboutPage(ctx) {
    ctx.render(aboutTemplate(showSkills, showEducation, showTrainings));
}

function showSkills() {
    const root = document.querySelector(`.content`);
    render(skillsTemplate(), root);
    const item = 'skills';
    setContent(item);
}

function showEducation() {
    const root = document.querySelector(`.content`);
    render(educationTemplate(), root);
    const item = 'education';
    setContent(item);
}

function showTrainings() {
    const root = document.querySelector(`.content`);
    render(trainingsTemplate(), root);
    const item = 'certificates';
    setContent(item);

    const prev = document.querySelector(`.prev`);
    const next = document.querySelector(`.next`);

    document.querySelectorAll(`.mySlides`)[0].style.display = 'block';
    document.querySelectorAll(`.dot`)[0].classList.add(`activeDot`);

    prev.addEventListener(`click`, showSlide);
    next.addEventListener(`click`, showSlide);

}

function showSlide(event) {
    let witch = event.target;
    let slides = [...document.querySelectorAll(`.mySlides`)];
    let currentSlide = slides.find(x => x.style.display == 'block');
    let dots = [...document.querySelectorAll(`.dot`)];
    let currentDot = dots.find(x => x.classList.contains(`activeDot`));
    let index = slides.indexOf(currentSlide);
    let wantedSlide;
    let wantedDot;

    if (witch.classList.contains('prev')) {
        if (index == 0) {
            wantedSlide = slides[3];
            wantedDot = dots[3];
        } else {
            wantedSlide = slides[index - 1];
            wantedDot = dots[index - 1];
        }
        slideDotSettings(currentSlide, wantedSlide, currentDot, wantedDot)
    } else {
        if (index == 3) {
            wantedSlide = slides[0];
            wantedDot = dots[0];
        } else {
            wantedSlide = slides[index + 1];
            wantedDot = dots[index + 1];
        }

        slideDotSettings(currentSlide, wantedSlide, currentDot, wantedDot)
    }

    function slideDotSettings(currentSlide, wantedSlide, currentDot, wantedDot) {
        currentSlide.style.display = 'none';
        currentDot.classList.remove(`activeDot`);
        wantedSlide.style.display = 'block';
        wantedDot.classList.add(`activeDot`);
    }
}

function setContent(item) {

    switch (item) {
        case 'skills': setSkills();
            break;
        case 'education': setEducation();
            break;
        case 'certificates': setCertificates();
    }

    function setSkills() {
        const skillItem = document.querySelector(`.skills`);
        skillItem.classList.add(`active`);
        const skillTab = document.querySelector(`.skills-tab`);
        skillTab.classList.add(`active`);
        skillTab.classList.add(`outer-shadow`);
        const educationTab = document.querySelector(`.education-tab`);
        const trainingsTab = document.querySelector(`.trainings-tab`);
        if (educationTab.classList.contains(`active`)) {
            educationTab.classList.remove(`active`);
            educationTab.classList.remove(`outer-shadow`);
        } else if (trainingsTab.classList.contains(`active`)) {
            trainingsTab.classList.remove(`active`);
            trainingsTab.classList.remove(`outer-shadow`);
        }
    }

    function setEducation() {
        const educationItem = document.querySelector(`.education`);
        educationItem.classList.add(`active`);
        const educationTab = document.querySelector(`.education-tab`);
        educationTab.classList.add(`active`);
        educationTab.classList.add(`outer-shadow`);
        const skillTab = document.querySelector(`.skills-tab`);
        const trainingsTab = document.querySelector(`.trainings-tab`);
        if (skillTab.classList.contains(`active`)) {
            skillTab.classList.remove(`active`);
            skillTab.classList.remove(`outer-shadow`);
        } else if (trainingsTab.classList.contains(`active`)) {
            trainingsTab.classList.remove(`active`);
            trainingsTab.classList.remove(`outer-shadow`);
        }
    }

    function setCertificates() {
        const trainingsItem = document.querySelector(`.trainings`);
        trainingsItem.classList.add(`active`);

        const trainingsTab = document.querySelector(`.trainings-tab`);
        trainingsTab.classList.add(`active`);
        trainingsTab.classList.add(`outer-shadow`);

        const skillTab = document.querySelector(`.skills-tab`);
        const educationTab = document.querySelector(`.education-tab`);

        if (skillTab.classList.contains(`active`)) {
            skillTab.classList.remove(`active`);
            skillTab.classList.remove(`outer-shadow`);
        } else if (educationTab.classList.contains(`active`)) {
            educationTab.classList.remove(`active`);
            educationTab.classList.remove(`outer-shadow`);
        }
    }

}


