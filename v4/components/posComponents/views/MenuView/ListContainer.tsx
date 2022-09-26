type containerProps = { 
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export default function ListContainer({ children, className }: containerProps) {
  return (
    <div className={`col-start-3 col-span-6 row-start-1 row-span-9 border-2 border-black rounded-xl ${className}`}>
      {children}
    </div>
  )
}