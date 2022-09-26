// dependencies
import dynamic from "next/dynamic";
import { lazy, Suspense, useState } from "react";

// components
import ViewContainer from "../ViewContainer";
const PizzaList = dynamic(() => import("./PizzaList"), { suspense: true })
const ToppingList = dynamic(() => import("./ToppingList"), { suspense: true })
import ToppingOptions from "./ToppingOps";

export default function MenuView() {
  const [view, setView] = useState("pizzas");

  return (
    <ViewContainer className="border-0 grid grid-cols-8 grid-rows-9 gap-1">
      <ToppingOptions />
      <Suspense fallback={<div>Loading...</div>}>
        {view === 'pizzas' ? <PizzaList setView={setView} /> : null}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {view === 'toppings' ? <ToppingList setView={setView} /> : null}
      </Suspense>
    </ViewContainer>
  )
}