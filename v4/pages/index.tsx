import { useRouter } from "next/router";

type sectionProps = {
  children: JSX.Element | JSX.Element[],
  width: number | string;
}

function Section({ children, width }: sectionProps) {
  return (
    <section className={`w-[${width}]`}>
      {children}
    </section>
  )
}

type cardProps = {
  description: string;
  btnText: string;
  className: string;
  btnAction(): void;
}

function Card({ description, btnText, className, btnAction }: cardProps) {
  return (
    <div className={className}>
      <div className="bg-white w-[45%] rounded-full h-56 my-2 text-center -mt-10">Image</div>
      <div className="bg-white w-[45%] rounded-full h-56 my-2 text-center mt-16">Image</div>
      <p className="w-full text-2xl text-center">{description}</p>
      <button className="w-[50%] h-10 my-5 bg-green-800 rounded-xl text-lg" onClick={btnAction}>{btnText}</button>
    </div>
  )
}

export default function IndexPage() {
  const router = useRouter();
  return (
    <main className="mx-2 my-4 flex justify-around flex-wrap">
      <Section width="45%">
        <Card
          className="bg-black text-white p-5 rounded-xl flex flex-wrap items-center justify-center"
          description="Check out our franchising options"
          btnText="Get Started"
          btnAction={() => router.push('/franchise')}
        />
      </Section>
      <Section width="45%">
        <Card
          className="bg-black text-white p-5 rounded-xl flex flex-wrap items-center justify-center"
          description="Want to make an order? Click here to get started"
          btnText="Start Order"
          btnAction={() => router.push('/order')}
        />
      </Section>
      <Section width='100%'>

      </Section>
    </main>
  )
}
