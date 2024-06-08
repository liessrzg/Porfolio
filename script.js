const title = document.querySelector('.title');
const leaf1 = document.querySelector('.leaf1');
const leaf2 = document.querySelector('.leaf2');
const bush2 = document.querySelector('.bush2');
const mount1 = document.querySelector('.mount1');
const mount2 = document.querySelector('.mount2');

document.addEventListener('scroll', function () {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + 'px';
    leaf1.style.marginLeft = -value + 'px';
    leaf2.style.marginLeft = value + 'px';
    bush2.style.marginBottom = -value + 'px';
    mount1.style.marginBottom = -value * 1.1 + 'px';
    mount2.style.marginBottom = -value * 1.2 + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('project.html')) {
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach(item => {
            item.addEventListener('click', function () {
                const projectTitle = this.querySelector('h2').innerText;
                // Redirige vers une page de détails du projet
                // window.location.href = `projects/${projectTitle.toLowerCase().replace(/\s+/g, '-')}.html`;
            });
        });

        // Temps en millisecondes pour atteindre le bas de la page
        const scrollDuration = 3000; // 3 secondes

        // Fonction pour faire défiler la page en douceur
        function scrollToBottom() {
            const scrollHeight = document.body.scrollHeight;
            const viewportHeight = window.innerHeight;
            const startTime = performance.now();

            function scrollStep(currentTime) {
                const elapsedTime = currentTime - startTime;
                const scrollFraction = Math.min(elapsedTime / scrollDuration, 1);
                window.scrollTo(0, scrollFraction * (scrollHeight - viewportHeight));

                if (scrollFraction < 1) {
                    requestAnimationFrame(scrollStep);
                }
            }

            requestAnimationFrame(scrollStep);
        }

        // Appeler la fonction pour faire défiler vers le bas
        scrollToBottom();
    }
});
