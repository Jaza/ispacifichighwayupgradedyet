(function() {
  const timerTpl =
    '<span class="tagline"></span> ' +
    '<span class="years value"></span> ' +
    '<span class="yearsText text"></span> ' +
    '<span class="months value"></span> ' +
    '<span class="monthsText text"></span> ' +
    '<span class="days value"></span> ' +
    '<span class="daysText text"></span> ' +
    '<span class="hours value"></span> ' +
    '<span class="hoursText text"></span> ' +
    '<span class="minutes value"></span> ' +
    '<span class="minutesText text"></span> ' +
    '<span class="seconds value"></span> ' +
    '<span class="secondsText text"></span>';

  const timerId = "countdown-timer";
  const timerContainer = document.getElementById(timerId);

  if (timerContainer) {
    const endDate = timerContainer.dataset.countdownDate;
    if (endDate) {
      timerContainer.innerHTML = timerTpl;
      countdown(
        endDate,
        timerId,
        "ETA:",
        "Has been upgraded for:"
      );
    }
  }

  const timer2Id = "countdown-timer2";
  const timer2Container = document.getElementById(timer2Id);

  if (timerContainer) {
    const endDate2 = timer2Container.dataset.countdownDate;
    if (endDate2) {
      timer2Container.innerHTML = timerTpl;
      countdown(
        endDate2,
        timer2Id,
        "Waited:",
        "Already waited:"
      );
    }
  }
})();
