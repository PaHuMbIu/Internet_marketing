const containerLessonsEls = document.querySelectorAll('.container-lesson');
const moduleListEls = document.querySelectorAll('.module-list');

moduleListEls.forEach(module => {
    module.addEventListener('click', () => {
        const moduleId = module.getAttribute('data-module');
        const isActive = module.classList.contains('color-label');

        if (isActive) {
            module.classList.remove('color-label');
            containerLessonsEls.forEach(lesson => {
                if (lesson.getAttribute('data-module') === moduleId) {
                    lesson.classList.remove('show-container-lesson');
                }
            });
        } else {
            module.classList.add('color-label');
            containerLessonsEls.forEach(lesson => {
                if (lesson.getAttribute('data-module') === moduleId) {
                    lesson.classList.add('show-container-lesson');
                }
            });
        }
    });
});

for (const lesson of containerLessonsEls) {
    containerLessonsEls[0].classList.add('selected-lesson');
    lesson.addEventListener('click', () => {
        containerLessonsEls.forEach(el => el.classList.remove('selected-lesson'));

        lesson.classList.add('selected-lesson');
    });
}