type containerProps = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export default function ViewContainer({ children, className }: containerProps) {
  return (
    <div className={`border-2 border-black rounded-xl col-start-4 col-span-9 row-start-2 row-span-8 ${className}`}>
      {children}
    </div>
  )
}