/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
const portfolioData = [
  {
    title: "DISEÑO GRÁFICO",
    description: "El diseño gráfico en mi caso es trabajo con marcas y sus diferentes requisitos, mis trabajos incluyen diseño de gráficas web, diseño de packaging, etc.",
    imgSrc: "assets/img/portfolio-1.jpg"
  },
  {
    title: "FOTOGRAFÍA",
    description: "La fotografía para mi es más que nada un hobbie, sin embargo, disfruto mucho organizar paseos y salidas para fotografiar los distintos paisajes, personas y animales.",
    imgSrc: "assets/img/portfolio-2.jpg"
  },
  {
    title: "ILUSTRACION GRAFITO",
    description: "El dibujo ha sido parte importante de mi desarrollo como diseñadora, es lo que más me gusta hacer y lo hago desde muy pequeña. Me inclino principalmente hacia el área del realismo.",
    imgSrc: "assets/img/portfolio-3.jpg"
  },
  {
    title: "ILUSTRACIÓN DIGITAL",
    description: "La ilustración digital nació del traspaso de mis habilidades análogas a los programas procreate e illustrator. Es una forma innovadora y muy entretenida de representar mis ideas.",
    imgSrc: "assets/img/portfolio-4.jpg"
  }
];
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
