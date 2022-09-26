import { useRecoilState, useRecoilValue } from "recoil";

import Button from "../../../Button";
import ListContainer from "./ListContainer";

import { menuState, pizzaState, sectionState } from "../../../../utils/atoms";

function List() {
  const { pizzas } = useRecoilValue(menuState);
  const selectedSection = useRecoilValue(sectionState);
  const [selectedPizza, setSelectedPizza] = useRecoilState(pizzaState);

  return(
    <div className="row-span-8 grid grid-cols-1 grid-rows-10">
      <>
        {pizzas.filter(({ section }) => section.name === selectedSection).map((pizza): JSX.Element => (
          <Button 
            type='button' 
            key={pizza['_id']} 
            btnText={pizza.name}
            className={selectedPizza?.['_id'] === pizza['_id'] ? 'bg-green-600 text-white' : ''}
            btnAction={() => setSelectedPizza(pizza)}
          />
        ))}
      </>
    </div>
  )
}

function InfoView() {
  const pizza = useRecoilValue(pizzaState);
  console.log('pizza', pizza)

  return (
    <div className="bg-white col-start-2 col-span-2 row-start-2 row-span-7 rounded-lg p-2">
      <h3 className="text-3xl">{pizza?.name}</h3>
      <div>
        <h4 className="text-xl">Toppings</h4>
        <ul>
          <>
            {pizza?.toppings?.map((topping) => (
              <li>
                <p>{topping.name}</p>
              </li>
            ))}
          </>
        </ul>
      </div>
    </div>
  )
}

export default function PizzaList({ setView }) {
  return (
    <ListContainer className="grid grid-cols-3 grid-rows-9 border-0 gap-1">
      <Button type='button' btnText="1/4" />
      <Button type='button' btnText="1/3" />
      <Button type='button' btnText="1/2" />
      <List />
      <InfoView />
      <Button type="button" btnText="Toppings" className="col-start-3 row-start-9" btnAction={() => setView('toppings')} />
    </ListContainer>
  )
}