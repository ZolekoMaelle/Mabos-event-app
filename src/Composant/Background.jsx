import React, { useState, useEffect } from 'react';
// import background from '../images/background.PNG'

const Background = () => {
  
  const targetDate = new Date('2025-10-12T00:00:00').getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-96 bg-cover bg-center bg-cyan-600"
      // style={{ background: `url(${background.PNG})` }} 

    >
   
      <div className="bg-white rounded-full w-96 h-64 flex flex-col items-center justify-center shadow-lg">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Marie & Claire</h1>

        
        <div className="flex space-x-4 text-center">
          <div>
            <span className="text-2xl font-bold">{timeRemaining.days}  : </span>
            <span className="block text-sm text-gray-600">days</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{timeRemaining.hours}  :  </span>
            <span className="block text-sm text-gray-600">hours</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{timeRemaining.minutes} : </span>
            <span className="block text-sm text-gray-600">minutes</span>
          </div>
          <div>
            <span className="text-2xl font-bold">{timeRemaining.seconds}</span>
            <span className="block text-sm text-gray-600">seconds</span>
          </div>
        </div>

        <p className="mt-6 text-lg text-gray-800">Avant notre marriage</p>
        <p className="text-sm text-gray-600">12 Octobre 2025</p>
      </div>
    </div>
  );
};

export default Background;
