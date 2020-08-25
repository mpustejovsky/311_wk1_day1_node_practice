// import moment here; use this package in each function

const today = () => {
  // write code for dates.today


  let d = new Date();
  let weekday = [];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let n = weekday[d.getDay()];
  return n;

}

const calendar = () => {
  // write code for dates.calendar
  let day = new Date();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let monthRet = months[day.getMonth()];
  let dayRet = day.getDate();
  let yearRet = day.getFullYear();

  return `${monthRet} ${dayRet}, ${yearRet}`



}

const currentTime = () => {
  // write code for dates.currentTime
  let day = new Date();
  let hours = day.getHours();
  let amPM = 'AM'
  if (hours > 11) {
    amPM = 'PM'
    if (hours > 12) { hours = hours - 12 }
  }

  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  hours = String('0' + hours).slice(-2);
  minutes = String('0' + minutes).slice(-2);
  seconds = String('0' + seconds).slice(-2);

  return `${hours}:${minutes}:${seconds} ${amPM}`


}

module.exports = {
  today,
  calendar,
  currentTime
}