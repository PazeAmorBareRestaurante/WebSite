document.addEventListener('DOMContentLoaded', () =>
{
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0)
        {
                // Add a click event on each of them
                $navbarBurgers.forEach(el =>
                {
                        el.addEventListener('click', () =>
                        {
                                // Get the target from the "data-target" attribute
                                const target = el.dataset.target;
                                const $target = document.getElementById(target);

                                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                                el.classList.toggle('is-active');
                                $target.classList.toggle('is-active');

                        });
                });

                const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
                $navbarItems.forEach(el =>
                {
                        el.addEventListener('click', () =>
                        {
                                const activeElementList = document.getElementsByClassName('is-active');
                                Array.from(activeElementList).forEach(element =>
                                {
                                        element.classList.remove('is-active');
                                });

                        })
                });
        }
});

elementList = document.querySelectorAll('a[href^="#"]');
elementList.forEach(element =>
{
        const target = element.getAttribute("href");
        element.addEventListener('click', (element) =>
        {
				element.preventDefault();
                const targetLocation = document.querySelector(target).offsetTop;

                const fixedNavElementList = document.getElementsByClassName("navbar-brand");
                const fixedNavHeight = fixedNavElementList[0].getBoundingClientRect().height;

                window.scrollTo({
                        top: (targetLocation - fixedNavHeight),
                        behavior: 'smooth'
                });
        })
});
