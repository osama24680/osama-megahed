import React, { useState, useEffect } from 'react'
import style from "./CountDonw.module.css"
const CountDonw = () => {

    const [timerDays, setTimerDays] = useState(0)
    const [timerHours, setTimerHours] = useState(0)
    const [timerMinuts, setTimerMinuts] = useState(0)
    const [timerSeconds, setTimerSeconds] = useState(0)

    let interval;
    const startTimer = () => {
        const countDownDate = new Date("july 10,2022").getTime()
        console.log(countDownDate)
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now
            const days = Math.floor(distance / (24 * 60 * 60 * 1000))
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
            const minuts = Math.floor(distance % (60 * 60 * 1000) / (60 * 1000))
            const seconds = Math.floor(distance % (60 * 1000) / (1000))

            if (distance < 0) {
                clearInterval(interval)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinuts(minuts)
                setTimerSeconds(seconds)
            }
        })
    }
    useEffect(() => {
        startTimer()
        // eslint-disable-next-line
    }, [])


    return (
        <div className={style.countDown}>
            <div className={style.clock}>
                <section>
                    <p>{timerDays}</p>
                    <small>Days</small>
                </section>
                <span></span>
                <section>
                    <p>{timerHours}</p>
                    <small>Hours</small>
                </section>
                <span></span>
                <section>
                    <p>{timerMinuts}</p>
                    <small>Minuts</small>
                </section>
                <span></span>
                <section>
                    <p>{timerSeconds}</p>
                    <small>seconds</small>
                </section>
                <span></span>
            </div>
        </div>
    )
}

export default CountDonw
