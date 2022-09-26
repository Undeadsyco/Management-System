import { useEffect, useState } from 'react';

const useClock = () => {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();

  const updateTime = () => {
    const display = new Date();
    setMinute(display.getMinutes());
    setHour(display.getHours());
    return setInterval(updateTime, 1000);
  };

  useEffect(() => {
    const timer = updateTime();
    return () => {
      clearInterval(timer);
    };
  }, []);

  return { hour, minute };
};

export default useClock;
