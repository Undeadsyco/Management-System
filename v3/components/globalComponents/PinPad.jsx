import Button from './Button';

export default function PinPad({ cancelAction, submitAction, updateAction }) {
  const buttons = [];

  // loop that generates buttons from 1 to 9
  for (let i = 1; i < 10; i++) {
    buttons.push(<Button key={i} label={i} onClick={updateAction} className="w-full h-full flex items-center justify-center border-2 border-black rounded-full" />);
  }

  return (
    <div className="pin-pad">
      {buttons}
      <Button label="OK" onClick={submitAction} className="w-full h-full flex items-center justify-center border-2 border-black rounded-full" />
      <Button label="0" onClick={updateAction} className="w-full h-full flex items-center justify-center border-2 border-black rounded-full" />
      <Button label="Cancel" onClick={cancelAction} className="w-full h-full flex items-center justify-center border-2 border-black rounded-full" />
    </div>
  );
}