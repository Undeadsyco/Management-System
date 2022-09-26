import Button from "../Button";

export default function OrderOptions({ setCurrentView }) {
  return (
    <div className="row-start-10 row-span-1 col-start-4 col-span-9 flex gap-1">
      <Button className="text-lg font-extrabold" btnText="Comment" btnAction={() => setCurrentView('comments')} />
      <Button className="text-lg font-extrabold leading-5" btnText="Apply Discounts" btnAction={() => setCurrentView('discounts')} />
      <Button className="text-lg font-extrabold leading-5" btnText="Delivery Tablet" btnAction={() => setCurrentView('delivery')} />
      <Button className="text-lg font-extrabold" btnText="Call In" btnAction={() => setCurrentView('call-in')} />
      <Button className="text-lg font-extrabold" btnText="Walk In" btnAction={() => setCurrentView('walk-in')} />
      <Button className="text-lg font-extrabold" btnText="Tenders" btnAction={() => setCurrentView('tenders')} />
      <Button className="bg-red-500 text-white text-lg font-bold" btnText="Exit" />
    </div>
  );
}