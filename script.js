document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('nav-botão');
    const navLi = document.querySelectorAll('.nav ul li a');

    window.onscroll = () => {
        var current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    };
});