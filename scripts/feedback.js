const containerRatingStarEls = [...document.querySelectorAll('.container-rating-star')];

containerRatingStarEls.forEach(star => {
    star.addEventListener('click', () => {

        containerRatingStarEls.forEach(el => el.classList.remove('selected-star'));
        star.classList.add('selected-star');

        const starIndex = [...containerRatingStarEls].indexOf(star);

        containerRatingStarEls.forEach((el, index) => {
           el.classList.toggle('color-rating-star', index <= starIndex);
        });

    });
});
















const lessonFeedBackSummaryEls = document.querySelectorAll('.lesson-feedback-summary');

lessonFeedBackSummaryEls.forEach(lesson => {
    lesson.addEventListener('click', () => {
        const isActive = lesson.classList.contains('active');

        if (!isActive) {
            lesson.classList.add('active');
        } else {
            lesson.classList.remove('active');
        }

    });
});




