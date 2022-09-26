import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from './Button';

type padProps = {
  width: string;
  height: string;
}

export default function NumberPad({ width, height }: padProps) {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [btnValues, setBtnValues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

  const btnList = (
    btnValues.map((value) => value === 0 ? (
      <>
        <Button btnAction={() => router.push('/pos/main')} btnText="OK" />
        <Button btnAction={() => setValue((prev) => `${prev}${value}`)} btnText={value.toString()} />
        <Button btnAction={() => setValue('')} btnText="Cancel" />
      </>
    ) : (
      <Button btnAction={() => setValue((prev) => `${prev}${value}`)} btnText={value.toString()} />
    ))
  )

  return (
    <section className={`w-[${width}] flex flex-col justify-center items-center`}>
      <input
        id="value"
        name="value"
        className="w-[70%] h-10 border-black border-2 rounded-2xl mx-auto"
        value={value}
        readOnly
      />
      <div className={`w-full h-[${height}] grid grid-cols-3 grid-rows-4 gap-2 my-5`}>
        {btnList}
      </div>
    </section>
  );
}