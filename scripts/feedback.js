const starsEls = document.querySelectorAll('.star');

starsEls.forEach(star => {
   star.addEventListener('click', () => {

      const starId = star.dataset.star;
      const starIdNumber = Number(starId);

      for (let i = 0; i < starIdNumber; i++) {
         starsEls[i].classList.add('selected-star');
      }

      for (let i = starIdNumber; i < starsEls.length; i++) {
         starsEls[i].classList.remove('selected-star');
      }

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




