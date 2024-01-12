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

    console.log(window.scrollY)

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


// PROJECTS
let archivedProjectsHTML = '';

archivedProjects.forEach((project, index) => {

    let linkHTML = '';
    let technologiesHTML = '';

    project.links.forEach(link => {
        linkHTML += `
            <a href="${link.url}" target="_blank">
                ${link.icon}
            </a>
        `
    })

    project.technologies.forEach((item, index) => {
        technologiesHTML += `
            <li>${item}</li>
        `
    })

    archivedProjectsHTML += `
        <li class="archive-folder">
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
                    <a href="${project.websiteLink}" target="_blank">
                        <h1 class="project-title">${project.title}</h1>
                    </a>
                </div>
                <div class="details-content">
                    <p class="project-description">${project.description}</p>
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

window.addEventListener('DOMContentLoaded', () => {
    logoText.classList.add('active');

    setTimeout(() => {
        logoStroke.classList.add('active');
    }, 600)

    setTimeout(() => {
        logoSplash.classList.add('fade-out')
        setTimeout(() => {
            introSection.classList.add('fade-out');
            document.documentElement.style.overflow = "scroll";
            setTimeout(() => {
                logoSplash.style.display = "none";
                introSection.style.display = "none";
            }, 1000)
        }, 600)

    }, 3300)
})