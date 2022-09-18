import React,{useEffect,useState}from "react";

const DateTime = () => {
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    let currentDate = new Date();
    let [counter, setCounter] = useState(0);
    let [timeLeft, setTimeLeft] = useState(0);

    useEffect(()=>{
        getTimeLeftInADay();
    },[counter]);


    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
    function getTimeLeftInADay() {
        let timer = setInterval(function () {
            // Get today's date and time
            var now = currentDate.getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            timeLeft = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(timer);
            }
            setCounter(counter => counter + 1);

        }, 1000)
    }

    
    let daysLeftInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1) - currentDate.getDate();
    let monthLeftInYear = 12 - currentDate.getMonth();
    return (<div>
        <p>Time left : </p>
        <h1>
            {timeLeft}
        </h1>
        <h2>
            {daysLeftInMonth} days left in this Month.
        </h2>
        <h2>
            {monthLeftInYear} month left in this Year.
        </h2>
    </div>)
}

export default DateTime;