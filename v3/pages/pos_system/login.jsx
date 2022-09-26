import { useState } from 'react';
import { PinPad } from '../../components/globalComponents';

export default function Login() {
  const [pin, setPin] = useState('');

  return (
    <div className="login-page">
      <h1 className='col-start-6 col-span-2'>Login</h1>

      <div className='row-start-4 row-span-6 col-start-5 col-span-4 flex flex-wrap'>
        <div className='w-full flex items-center justify-center'>
          <input
            id=""
            name=""
            type="number"
            value={pin}
            placeholder='please enter pin'
            readOnly
          />
        </div>
        <div className='h-5/6 flex-grow'>
          <PinPad
            cancelAction={() => setPin('')}
            // submitAction={undefined}
            updateAction={(e) => setPin((prev) => `${prev}${e.target.innerText}`)}
          />
        </div>
      </div>
    </div>
  );
}