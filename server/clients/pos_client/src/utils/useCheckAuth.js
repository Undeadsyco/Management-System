import { useEffect, useState } from 'react';

const useCheckAuth = (action) => {
  const [clockedIn, setClockedIn] = useState(false);

  useEffect(() => {
    action().then((res) => {
      console.log('res', res);
      if (!res.message) {
        console.log(res?.is_clocked_in);
        setClockedIn(res?.is_clocked_in);
      } else alert('alert', res.message);
    });
  }, []);

  const isClockedIn = () => clockedIn;

  return isClockedIn;
};

export default useCheckAuth;
