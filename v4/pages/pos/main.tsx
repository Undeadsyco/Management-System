// dipendencies:
import { Suspense, useEffect, useTransition } from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { useRecoilState } from "recoil";

// components:
import {
  OrderView, CommandOptions, SizeBar, OrderOptions, ViewRouter,
} from "../../components/posComponents";

// utils:;
import connectToDb from "../../lib/mongodb";
import { MenuController } from "../../utils/controllers";
import { menu } from "../../utils/models/types";
import { menuState, pizzaState, viewState } from "../../utils/atoms";

export default function MainScreen(props: { menu: menu }) {
  const [currentView, setCurrentView] = useRecoilState(viewState);
  const [menu, setMenu] = useRecoilState(menuState);
  const [pizza, setPizza] = useRecoilState(pizzaState);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setMenu({ ...props.menu });
      setPizza(menu.pizzas[0]);
    });
  }, []);

  return (
    <main className="w-screen h-screen grid grid-cols-12 grid-rows-10 gap-1 p-1 bg-black">
      <Suspense fallback={<div>Loading...</div>} >
        <>
          <OrderView />
          <CommandOptions />
          <SizeBar />
          <ViewRouter currentView={currentView} />
          <OrderOptions setCurrentView={setCurrentView} />
        </>
      </Suspense>
    </main>
  );
}

export const getStaticProps: GetStaticProps =
  async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<{ menu: menu }>> => {
    let menu = {
      sections: [],
      pizzas: [],
      toppings: []
    }
    try {
      const connection = await connectToDb();
      if (!connection) throw new Error('was unable to connect to database');

      menu = await MenuController.createMenu();
    } catch (error) {
      console.log('message', error.message);
      console.log('error', error);
    } finally {
      return ({
        props: {
          menu,
        }
      });
    }
  }
