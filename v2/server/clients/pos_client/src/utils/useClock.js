import { useEffect, useState } from 'react';

const useClock = () => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());

  useEffect(() => {
    const clock = setInterval(() => {
      setDate(new Date());
      setHours(date.getHours());
      setMinutes(date.getMinutes());
    }, 1000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  return { hours, minutes };
};

export default useClock;
