const starEls = document.querySelectorAll('.star');
// const containerIconWaveEls = document.querySelectorAll('.icon-wave');


starEls.forEach(star => {
   star.addEventListener('click', () => {

      const starId = star.dataset.star;
      const starIdNumber = parseInt(starId);

      // containerIconWaveEls.forEach(iconWave => {
      //    const iconWaveId = iconWave.dataset.iconWave;
      //    const iconWaveIdNumber = parseInt(iconWaveId);
      //
      //    if (iconWaveIdNumber === starIdNumber) {
      //       iconWave.classList.remove('hidden-icon-wave');
      //    } else {
      //       iconWave.classList.add('hidden-icon-wave');
      //    }
      //
      // });

      for (let i = 0; i < starIdNumber; i++) {
         starEls[i].classList.add('selected-star');
      }

      for (let i = starIdNumber; i < starEls.length; i++) {
         starEls[i].classList.remove('selected-star');
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




