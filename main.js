function getDayTimeDifference(currentDate, refDate) {
  // Seconds
  let seconds = Math.abs(currentDate - refDate) / 1000;

  // Minutes
  let minutes = (refDate.getTime() - currentDate.getTime()) / 1000;
  minutes /= 60;
  minutes = Math.abs(Math.round(minutes));

  // Hours
  let hours = (refDate.getTime() - currentDate.getTime()) / 1000;
  hours /= 60 * 60;
  hours = Math.abs(Math.round(hours));

  let days = Math.abs(
    Math.round((refDate - currentDate) / (1000 * 60 * 60 * 24))
  );

  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
  };
}

const dueDate = new Date("2022-10-20");
const timeDiff = getDayTimeDifference(new Date(), dueDate);
console.log(`Days Elapsed: ${timeDiff.days}`);
console.log(`Hours Elapsed: ${timeDiff.hours}`);
console.log(`Minutes Elapsed: ${timeDiff.minutes}`);
console.log(`Seconds Elapsed: ${timeDiff.seconds}`);
