type btnProps = {
  type?: "button" | "submit" | "reset";
  btnText: string;
  btnAction?(): void;
  className?: string;
  subText?: string;
  supText?: string;
}

export default function Button({ btnText, btnAction, className, supText, subText, type }: btnProps) {
  return (
    <button
      type={type}
      value={btnText}
      className={`w-full border-2 border-black rounded-xl bg-white ${className}`}
      onClick={btnAction}
    >
      {supText ? <sup></sup> : null}
      {btnText}
      {subText ? <sub></sub> : null}
    </button>
  )
}