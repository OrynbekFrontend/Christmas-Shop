function timer() {
    const deadline = '2026-01-01';
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor( (t/(1000*60*60*24))),
              hours = Math.floor((t/(1000*60*60) % 24)),
              minutes = Math.floor((t/1000/60) % 60),
              seconds = Math.floor((t/1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function setClock(endtime) {
        const
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');

              upDateOclock();
        function upDateOclock() {
            const t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

        }
        setInterval(upDateOclock, 1000)
    }
    setClock(deadline);
}
export default timer;