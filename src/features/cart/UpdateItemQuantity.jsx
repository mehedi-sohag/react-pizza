import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreseItemQuantity, increseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuentity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-2">
      <Button
        onclick={() => dispatch(increseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
      <span className="text-xs font-medium">{currentQuentity}</span>
      <Button
        onclick={() => dispatch(decreseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
