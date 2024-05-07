import React, { useState, useEffect } from 'react';

const TimerComponent: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      Timer: {timer} seconds
    </div>
  );
};

export default TimerComponent;
