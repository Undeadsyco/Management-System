import { useRecoilValue } from "recoil";

import ListContainer from "./ListContainer";

// utils
import { menuState } from "../../../../utils/atoms";
import Button from "../../../Button";

export default function ToppingList({ setView }) {
  const { toppings } = useRecoilValue(menuState);
  
  return (
    <ListContainer>
      <Button btnText="Back" btnAction={() => setView('pizzas')} />
    </ListContainer>
  )
}
