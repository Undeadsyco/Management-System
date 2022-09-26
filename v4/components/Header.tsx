// dependencies:
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="m-2 bg-black p-5 text-white flex justify-between items-center rounded-2xl">
      <h1 className="text-3xl">Brandon's Pizzaria</h1>
      <nav className="flex justify-between text-lgm w-[30%]">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/franchise'}>Franchise Options</Link>
        <Link href={'/order'}>Start Order</Link>
      </nav>
    </header>
  )
}