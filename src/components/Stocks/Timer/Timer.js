import React, { useState, useEffect } from 'react';
import "./Timer.css"
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      if (difference <= 0) {
        clearInterval(interval);  // Остановим таймер, когда время выйдет
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);  // Очистка интервала при размонтировании
  }, [targetDate]);

  return (
    <div className='timer'>
      <h2>Осталось времени:</h2>
      <p className='timer_block'>{timeLeft.days} дней {timeLeft.hours} часов {timeLeft.minutes} минут {timeLeft.seconds} секунд</p>
    </div>
  );
};

export default CountdownTimer;