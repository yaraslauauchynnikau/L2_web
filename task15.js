function Clock(time1, time2) {
  let start = new Date(time1);
  let end = new Date(time2);

  let strikes = 0;

  function getStrikesAt(date) {
    let h = date.getHours() % 12 || 12;
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (m === 0 && s < h) return 1;

    if (m === 30 && s === 0) return 1;

    return 0;
  }

  while (start < end) {
    strikes += getStrikesAt(start);
    start.setSeconds(start.getSeconds() + 1);
  }

  return strikes;
}

console.log(Clock("2016-08-14 12:00:00","2016-08-14 13:01:00"))