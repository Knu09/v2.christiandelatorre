const btnTabs = document.querySelectorAll("#about .tab-link");
const allContents = document.querySelectorAll("#about .tab-contents");

btnTabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        btnTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        let activeLine = document.querySelector('.active-line');
        activeLine.style.width = e.target.offsetWidth + "px";
        activeLine.style.left = e.target.offsetLeft + "px";

        allContents.forEach(content => {
            content.classList.remove('active');
        })
        allContents[index].classList.add('active')
    })
});

const resizeObserver = new ResizeObserver(entries => {
    const windowWidth = entries[0].contentRect.width;
    if (windowWidth <= 600 && activeTabLink) {
        updateActiveLineStyles(activeTabLink);
    } else {
        updateActiveLineStyles(activeTabLink);
    }
});

resizeObserver.observe(document.body);

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-subpages");
const blurMainBody = document.body;
const navLink = document.querySelectorAll(".navbar-subpages li a")

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarToggler.classList.toggle('active');
    document.documentElement.classList.toggle('active');
    blurMainBody.classList.toggle('blur');
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarToggler.classList.remove('active');
        document.documentElement.classList.remove('active');
        blurMainBody.classList.remove('blur');
    })
})


// SCROLL NAVBAR EFFECTS
const navBar = document.querySelector('nav.navbar')
const aboutSection = document.getElementById('about');
const aboutCircle = document.querySelector('.circle-about')

const experienceSection = document.getElementById('experience')
const experienceCircle = document.querySelector('.circle-experience')

const projectsSection = document.getElementById('projects')
const projectsCircle = document.querySelector('.circle-projects')

const contactSection = document.getElementById('contact')
const contactCircle = document.querySelector('.circle-contact')


let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-80px";
    } else {
        navBar.style.top = "0";
    }
    lastScrollTop = scrollTop;

    navBar.classList.toggle('sticky-nav', window.scrollY > 0);

    toggleCircleActive(aboutSection, aboutCircle);
    toggleCircleActive(experienceSection, experienceCircle);
    toggleCircleActive(projectsSection, projectsCircle);
    toggleCircleActive(contactSection, contactCircle);
}
);
function toggleCircleActive(section, circle) {
    if (section && circle) {
        const isInSection = (window.scrollY + window.innerHeight - 500) >= section.offsetTop &&
            (window.scrollY + window.innerHeight - 500) < section.offsetTop + section.offsetHeight;

        circle.classList.toggle('active', isInSection);
    }
}


// ARCHIVES
let archivedProjectsHTML = '';

archivedProjects.forEach((archive, index) => {

    let linkHTML = '';
    let technologiesHTML = '';

    archive.links.forEach(link => {
        linkHTML += `
            <a href="${link.url}" target="_blank">
                ${link.icon}
            </a>
        `
    })

    archive.technologies.forEach((item, index) => {
        technologiesHTML += `
            <li>${item}</li>
        `
    })

    archivedProjectsHTML += `
    <li class="archive-folder hidden hidden-archives">
        <div class="folder-contents">
            <div class="header-content">
                <div class="folder-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 298" fill="none">
                        <path class="folder" d="M0 10C0 4.47715 4.47715 0 10 0H109.619C112.459 0 115.165 1.20766 117.062 3.32158L141 30H0V10Z" fill="#0C1A3A"/>
                    </svg>
                </div>
                <div class="project-links">
                    ${linkHTML}
                </div>
                <div class="main-header-content">
                    <a href="${archive.websiteLink}" target="_blank">
                        <h1 class="project-title">${archive.title}</h1>
                    </a>
                </div>
                <div class="details-content">
                    <p class="project-description">${archive.description}</p>
                </div>
            </div>
            <div class="footer-content">
                <div class="technologies-used">
                    <ul>
                        ${technologiesHTML}
                    </ul>
                </div>
            </div>
        </div>
    </li>
    `;
})

document.querySelector('.js-archive-grid').innerHTML = archivedProjectsHTML;

// PROJECTS

let projectHTML = '';

projects.forEach((project) => {
    let projectTechUsedHTML = '';
    let projectLinksHTML = '';

    console.log(project.url);
    project.links.forEach((link) => {
       projectLinksHTML += `
            <a href="${link.linkURL}" target="_blank">
                ${link.icon}
            </a>
       `
    })

    project.technologies.forEach((tech) => {
        projectTechUsedHTML += `
            <li>${tech}</li>
        `
    })

    projectHTML += `
        <li class="project-inner-content hidden hidden-section">
            <div class="projects-content project-picture-section">
                <a target="_blank" href="${project.url}" class="profile-wrapper">
                    <img src="${project.image}" alt="${project.imageAlt}">
                </a>
            </div>
            <div class="projects-content project-details-section">
                <div class="header">
                    <div class="upper-header-content">
                        <h2 class="project-upper-header">FEATURED PROJECT</h2>
                    </div>
                    <div class="main-header-content">
                        <a target="_blank" href="${project.url}">
                            <h1 class="project-title">${project.title}</h1>
                        </a>
                    </div>
                    <div class="details-content">
                        <p class="project-description">${project.description}</p>
                    </div>
                    <div class="technologies-used">
                        <ul>
                            ${projectTechUsedHTML}
                        </ul>
                    </div>
                </div>
                <div class="footer">
                    <div class="project-links">
                        ${projectLinksHTML}
                    </div>
                </div>
            </div>
        </li>
    `
})


document.querySelector('.js-project-grid').innerHTML = projectHTML;


// EXPERIENCE
let experienceHTML = '';

experience.forEach(item => {
    let listHTML = '';

    item.lists.forEach((list, index) => {
        listHTML += `
            <li class="list-item">${list}</li>
        `
    })

    experienceHTML += `
        <div class="tab-contents js-tab-contents ${item.isActive}">
            <div class="content-header">
                <h1>${item.title}</h1>
                <p>${item.date}</p>
            </div>
            <div>
                <ul>
                    ${listHTML}
                </ul>
            </div>
        </div>
    `
})

document.querySelector('.js-tabs-container').innerHTML = experienceHTML;


const experienceBtnTabs = document.querySelectorAll('.experience-tab-link');
const experienceAllContents = document.querySelectorAll('.js-tab-contents');
const mediaQueryWidth = window.matchMedia("(max-width: 600px)");

let activeLine = document.querySelector('.active-line2');
let activeTabLink = document.querySelector(".experience-tab-link.active");

function updateActiveLineStyles(clickedTab) {
    if (!mediaQueryWidth.matches) {
        activeLine.style.top = clickedTab.offsetTop + "px";
        activeLine.style.height = clickedTab.offsetHeight + "px";
        activeLine.style.width = "2px";
        activeLine.style.left = "0px"; // Assuming you want to reset it to 0px
    } else {
        activeLine.style.width = clickedTab.offsetWidth + "px";
        activeLine.style.left = clickedTab.offsetLeft + "px";
        activeLine.style.height = "2px";
        activeLine.style.top = "54px";
    }
}

experienceBtnTabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        const clickedTab = e.currentTarget;

        experienceBtnTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        clickedTab.classList.add('active');
        activeTabLink = clickedTab;

        updateActiveLineStyles(clickedTab);

        experienceAllContents.forEach(content => {
            content.classList.remove('active');
        });

        experienceAllContents[index].classList.add('active');

    });
});


// SPLASH ANIMATION INTRO
const introSection = document.querySelector('.intro');
const logoSplash = document.querySelector('.logo-splash');
const logoText = document.querySelector('.logo-text');
const logoStroke = document.querySelector('.logo-stroke');
const main = document.querySelector('main')
const html = document.querySelector('html')
const hiddenNav = document.querySelectorAll('.hidden-nav')
const hiddenMenu = document.querySelector('.hidden-menu')

window.addEventListener('DOMContentLoaded', () => {
    logoText.classList.add('active');
    html.classList.add('active');
    // main.style.display = "block";

    setTimeout(() => {
        logoStroke.classList.add('active');
    }, 600)

    setTimeout(() => {
        logoSplash.classList.add('fade-out')
        setTimeout(() => {
            introSection.classList.add('fade-out');

            hiddenNav.forEach(nav => {
                nav.classList.add('show')
            })
            setTimeout(() => {
                hiddenMenu.classList.add('show')
                logoSplash.style.display = "none";
                introSection.style.display = "none";
                setTimeout(() => {
                    html.classList.remove('active');
                }, 2200)
            }, 1000)
        }, 600)

    }, 3300)


    // hiddenNav.forEach(nav => {
    //     nav.classList.add('show')
    // })
    // hiddenMenu.classList.add('show')
    // logoSplash.style.display = "none";
    // introSection.style.display = "none";
})


// FORM's SCRIPT

const form = document.querySelector('form')
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `
        Name: ${name.value}<br>
        Email: ${email.value}<br>
        Message: ${message.value}
    `

    Email.send({
        SecureToken: "edfa0544-ea6a-439e-91cc-29958ab91572",

        To : 'programmingchristdev@gmail.com',
        From : "programmingchristdev@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Thank You!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs () {
    const items = document.querySelectorAll('.item')

    items.forEach((item, index) => {
        if (item.value === "") {
            item.classList.add('error');
            item.parentElement.classList.add('error')
        }

        if (items[1].value !== "") {
            checkEmail();
        }

        console.log(items[1])

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value !== "") {
                item.classList.remove('error');
                item.parentElement.classList.remove('error')
            } else {
                item.classList.add('error');
                item.parentElement.classList.add('error')
            }
        })
    })
}

function checkEmail() {
    const regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if (!email.value.match(regexEmail)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');
    } else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    if (!name.classList.contains('error') && !email.classList.contains('error')
    && !message.classList.contains('error')) {
        sendEmail();

        form.reset();
        return false;
    }
})

// FADE SCROLL ANIMATION

const autoOpenLink = document.getElementById('home');

// window's view reset to the top when restarting the page
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
})

const hiddenArchives = document.querySelectorAll('.hidden-archives')
const hiddenSection = document.querySelectorAll('.hidden-section')

const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            setTimeout(() => {
                setTimeout(() => {
                    if(entry.target.classList.contains('hidden-hero')) {
                        entry.target.classList.add('show')
                    }
                    setTimeout(() => {
                        if(entry.target.classList.contains('hidden-sidebar')){
                            entry.target.classList.add('show')
                        }
                    }, 1500)
                }, 1200)
            }, 4300)


            if(entry.target.classList.contains('hidden-section')) {
                entry.target.classList.add('show')
            } else if (entry.target.classList.contains('hidden-archives')) {
                hiddenArchives.forEach((archive, index) => {{
                    setTimeout(() => {
                        if(entry.isIntersecting) {
                            archive.classList.add('show')
                        }
                    }, (index + 1) * 200)
                }})
            }
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))