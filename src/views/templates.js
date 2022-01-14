import { html } from "../lib.js";

export const home = html`
<section class="home-section section">
        <!-- wrap-effect start -->
        <div class="wrap-effect">
            <div class="effect effect-1">
            </div>
            <div class="effect effect-2">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="effect effect-3">
            </div>
            <div class="effect effect-4">
            </div>
            <div class="effect effect-5">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <!-- wrap-effect end -->

        <div class="container">
            <div class="row full-screen align-items-center">
                <div class="home-section-text">
                    <p>Hello</p>
                    <h2>I'm Georgi</h2>
                    <h1>Front-End Developer</h1>
                    <a href="/about" class="btn-1 about-me-btn outer-shadow hover-in-shadow">More About Me</a>
                </div>
                <div class="home-section-img">
                    <div class="img-box inner-shadow">
                        <img src="img/profile-pic.jpg" class="outer-shadow" alt="profile-pic">
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export const skills = html`
<div class="row">
    <div class="skills tab-content">
        <!-- skill items starts -->
        <div class="row">
            <div class="skills-item">
                <p>Html & Css</p>
                <div class="progress inner-shadow">
                    <div class="progress-bar" style="width: calc(85% - 14px)">
                        <span>85%</span>
                    </div>
                </div>
            </div>
            <div class="skills-item">
                <p>JavaScript , JS Frameworks</p>
                <div class="progress inner-shadow">
                    <div class="progress-bar" style="width: calc(70% - 14px)">
                        <span>70%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="skills-item">
                <p>Adobe Photoshop</p>
                <div class="progress inner-shadow">
                    <div class="progress-bar" style="width: calc(65% - 14px)">
                        <span>65%</span>
                    </div>
                </div>
            </div>
            <div class="skills-item">
                <p>SASS</p>
                <div class="progress inner-shadow">
                    <div class="progress-bar" style="width: calc(50% - 14px)">
                        <span>50%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="skills-item">
                <p>Responsive Disign</p>
                <div class="progress inner-shadow">
                    <div class="progress-bar" style="width: calc(80% - 14px)">
                        <span>80%</span>
                    </div>
                </div>
            </div>
            <div class="skills-item">
                <p>Testing & Debugging</p>
                <div class="progress inner-shadow">
                    <div class="progress-bar" style="width: calc(90% - 14px)">
                        <span>90%</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- skill items ends -->
    </div>
</div>`;

export const education = html`
<div class="row">
    <div class="education tab-content">
        <div class="row">
            <div class="timeline">
                <div class="row">
                    <!-- timeline items starts -->
                    <div class="timeline-items">
                        <div class="timeline-items inner outer-shadow">
                            <i class="fas fa-graduation-cap icon"></i>
                            <span>Master's degree - Bussiness information systems</span>
                            <h3>University of Economics - Varna 2014 / 2015</h3>
                            <h4>Studied Disciplines:</h4>
                            <p>Business Web-technologies in real time,
                                Business process management systems,
                                Maintenance and development of information
                                systems, E-Business, Processing of
                                images and multimedia through PhotoShop,
                                Graduation seminar, Virtual systems,
                                Data retrieval.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-items">
                        <div class="timeline-items inner outer-shadow">
                            <i class="fas fa-graduation-cap icon"></i>
                            <span>Bachelor's degree - Bussiness information systems</span>
                            <h3>University of Economics - Varna 2010 / 2014</h3>
                            <h4>Studied Disciplines:</h4>
                            <p>Mathematics, Economics, Marketing, Internet Technology, Algorithmization and
                                programming, Computer architectures,
                                Operating Systems, Computer Networks and
                                communication, Applied programming,
                                Design of information systems,
                                Databases.
                            </p>
                        </div>
                    </div>
                    <!-- timeline items ends -->
                </div>
            </div>
        </div>
    </div>
</div>
`;

export const certificates = html`
<div class="slideshow-container trainings tab-conent">

    <!-- Full-width images with number and caption text -->

    <div class="mySlides slide1 fade">
        <img src="./img/basic.png" style="width:50%">
    </div>
    <div class="mySlides slide2 fade">
        <img src="./img/fundamentals.png" style="width:50%">
    </div>
    <div class="mySlides slide3 fade">
        <img src="./img/advanced.png" style="width:50%">
    </div>
    <div class="mySlides slide4 fade">
        <img src="./img/applications.png" style="width:50%">
    </div>

    <!-- Next and previous buttons -->
    <a class="prev outer-shadow hover-in-shadow" >&#10094;</a>
    <a class="next outer-shadow hover-in-shadow" >&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div class="dots" style="text-align:center">
    <span class="dot dot1"></span>
    <span class="dot dot2"></span>
    <span class="dot dot3"></span>
    <span class="dot dot4"></span>
</div>`;

export const services = html`
<section class="services-section section">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h2 data-heading="Services">What i offer!</h2>
                    <h4>You will recive</h4>
                </div>
            </div>
            <div class="row">
                <!-- service items starts -->
                <div class="service-item">
                    <div class="service-item-inner outer-shadow">
                        <div class="icon inner-shadow">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h3>HTML & CSS Web-Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, ante vitae tempor
                            interdum, odio sem eleifend sapien, ut ultrices lorem arcu a neque. Aliquam erat volutpat.
                            Duis euismod risus sed magna aliquet sodales id et tortor. Phasellus sed neque.</p>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-item-inner outer-shadow">
                        <div class="icon inner-shadow">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, ante vitae tempor
                            interdum, odio sem eleifend sapien, ut ultrices lorem arcu a neque. Aliquam erat volutpat.
                            Duis euismod risus sed magna aliquet sodales id et tortor. Phasellus sed neque..</p>
                    </div>
                </div>
                <div class="service-item">
                    <div class="service-item-inner outer-shadow">
                        <div class="icon inner-shadow">
                            <i class="fas fa-bullhorn"></i>
                        </div>
                        <h3>All time support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, ante vitae tempor
                            interdum, odio sem eleifend sapien, ut ultrices lorem arcu a neque. Aliquam erat volutpat.
                            Duis euismod risus sed magna aliquet sodales id et tortor. Phasellus sed neque.</p>
                    </div>
                </div>
                <!-- service items ends -->
            </div>
        </div>
    </section>`;

export const contacts = html`<section class="contact-section section">
<div class="container">
    <div class="row">
        <div class="section-title">
            <h2 data-heading="contact">Get in touch</h2>
        </div>
    </div>
    <div class="row">
        <!-- contact items starts -->
        <div class="contact-item">
            <div class="contact-item-inner outer-shadow">
                <div class="icon inner-shadow">
                    <i class="fas fa-phone"></i>
                </div>
                <h3>Phone:</h3>
                <p>+359890325453</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-item-inner outer-shadow">
                <div class="icon inner-shadow">
                    <i class="fas fa-at"></i>
                </div>
                <h3>E-mail:</h3>
                <p>georgiev7900@gmail.com</p>
            </div>
        </div>
        <div class="contact-item">
            <div class="contact-item-inner outer-shadow">
                <div class="icon inner-shadow">
                    <i class="fas fa-street-view"></i>
                </div>
                <h3>Adress:</h3>
                <p>Bulgaria, Varna, st.Fantazia 36</p>
            </div>
        </div>
        <!-- contact items ends -->
    </div>
</div>
</section>`;

