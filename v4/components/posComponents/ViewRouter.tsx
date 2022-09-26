// dependencies
import { lazy, Suspense } from "react";
import { useRecoilValue } from "recoil";

// components
import { CommentView, TendersView, DiscountsView, MenuView } from "./views";

export default function ViewRouter({ currentView }: { currentView: string; }) {
  switch (currentView) {
    case 'menu': return <MenuView />
    case 'tenders': return <TendersView />;
    case 'comments': return <CommentView />;
    case 'discounts': return <DiscountsView />;
    case 'delivery': return (<div className="border-2 border-black rounded-xl col-start-4 col-span-9 row-start-2 row-span-8">delivery</div>) 
    case 'call-in': return (<div className="border-2 border-black rounded-xl col-start-4 col-span-9 row-start-2 row-span-8">callin</div>);
    case 'walk-in': return (<div className="border-2 border-black rounded-xl col-start-4 col-span-9 row-start-2 row-span-8">walkin</div>);
    default: return <MenuView />
  }
}