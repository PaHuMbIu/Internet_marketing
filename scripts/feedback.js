const containerRatingStarEls = [...document.querySelectorAll('.container-rating-star')];
const containerLessonFeedBackEl = document.querySelector('.container-lesson-feedback');
const containerMenuItemFeedbackEls = document.querySelectorAll('.container-menu-item-feedback');

containerRatingStarEls.forEach(star => {
    star.addEventListener('click', () => {

        containerLessonFeedBackEl.classList.add('lower-part');

        containerRatingStarEls.forEach(el => el.classList.remove('selected-star'));
        star.classList.add('selected-star');

        const starIndex = containerRatingStarEls.indexOf(star);

        containerRatingStarEls.forEach((el, index) => {
           el.classList.toggle('color-rating-star', index <= starIndex);

            if (starIndex <= 2) {
                containerMenuItemFeedbackEls[0].classList.remove('negative');
                containerMenuItemFeedbackEls[1].classList.add('positive');
            } else {
                containerMenuItemFeedbackEls[0].classList.add('negative');
                containerMenuItemFeedbackEls[1].classList.remove('positive');
            }
        });
    });
});

const lessonFeedBackSummaryEls = document.querySelectorAll('.lesson-feedback-summary');

lessonFeedBackSummaryEls.forEach(lesson => {
    lesson.addEventListener('click', () => {
        lesson.classList.toggle('active');
    });
});




