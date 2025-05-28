import { useState, useEffect } from 'react';

function Clock() {
  const [timeDisplay, setTimeDisplay] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const displayedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    setTimeDisplay(displayedTime);
  };

  const updateDay = () => {
    const today = new Date();
    const tDate = today.toDateString();
    setCurrentDate(tDate);
  };

  useEffect(() => {
    updateTime();
    updateDay();

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clockBox">
      <div className="clock">{timeDisplay}<br></br>
        {currentDate}
      </div>
      
    </div>
  );
}

export default Clock;
