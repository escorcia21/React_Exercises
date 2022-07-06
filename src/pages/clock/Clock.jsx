import React,{ useEffect }  from 'react'
import './Clock.css'

const Clock = () => {
    var hourHand
    var minuteHand 
    var secondHand

    function setDate(){
        const today = new Date();
        
        const second = today.getSeconds();
        const secondDeg = ((second / 60) * 360) + 360; 
        secondHand.style.transform = `rotate(${secondDeg}deg) translate(-50%, -100%)`;
        
        const minute = today.getMinutes();
        const minuteDeg = ((minute / 60) * 360); 
        minuteHand.style.transform = `rotate(${minuteDeg}deg) translate(-10%, -100%)`;

        const hour = today.getHours();
        const hourDeg = ((hour / 12 ) * 360 ); 
        hourHand.style.transform = `rotate(${hourDeg}deg) translate(-10%, -90%)`;

        console.log(hour,minute,second);
    }



    const start = () => {
        setInterval(setDate, 1000)
    }

    useEffect(() => {
        hourHand = document.querySelector('.hour-hand');
        minuteHand = document.querySelector('.minute-hand');
        secondHand = document.querySelector('.second-hand');

        const numbers = document.querySelectorAll('li')
        const spans = document.querySelectorAll('span')
        for (let i = 0; i < numbers.length; i++){
            numbers[i].style.transform = `rotate(${30 * (i  +1)}deg)`
            spans[i].style.transform = `rotate(-${30 * (i  +1)}deg)`
        }

        start()
    }, [])

    return <div className='canvas'>
        <div className='container'>
            <div className="clock">
                <div className="clock-face">
                    <ul>
                        <li><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>6</span></li>
                        <li><span>7</span></li>
                        <li><span>8</span></li>
                        <li><span>9</span></li>
                        <li><span>10</span></li>
                        <li><span>11</span></li>
                        <li><span>12</span></li>
                        
                        <div className="hands">
                            <div className="hour-hand"/>
                            <div className="minute-hand"/>
                            <div className="second-hand"/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    </div>
        
}


export default Clock