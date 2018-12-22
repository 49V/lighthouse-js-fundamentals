var talkingCalendar = function(date) {

  date = date.split("/");

  var year = date[0];

  var month = (date[1] === '01') ? 'January'
            : (date[1] === '02') ? 'February'
            : (date[1] === '03') ? 'March'
            : (date[1] === '04') ? 'April'
            : (date[1] === '05') ? 'May'
            : (date[1] === '06') ? 'June'
            : (date[1] === '07') ? 'July'
            : (date[1] === '08') ? 'August'
            : (date[1] === '09') ? 'September'
            : (date[1] === '10') ? 'October'
            : (date[1] === '11') ? 'November'
            : 'December'

  var day = (date[2] === '01' ||
             date[2] === '21' ||
             date[2] === '31') ? (date[2] + 'st')

          : (date[2] === '02' ||
             date[2] === '22') ? (date[2] + 'nd')

          : (date[2] === '03' ||
             date[2] === '23') ? (date[2] + 'rd')

          : (date[2] + 'th')

  day = (day[0] === '0') ? day.substring(1) : day;

  return (month + " " + day + ", " + year);
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));