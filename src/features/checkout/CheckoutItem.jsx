/* eslint-disable react/prop-types */
import PriceLine from "../../UI/PriceLine";
import { discountPrice } from "../../utils/healpers";

function CheckoutItem({ item }) {
  return (
    <li className="mb-3 flex items-center justify-between rounded-lg border-b-2 pb-2 pl-3 pr-3 pt-2 shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center rounded-md bg-gray-200">
          <img src={item.glasses.image} className="object-fit w-full" />
        </div>
        <div>
          <p>{item.glasses.glassesName}</p>
          <div className="flex items-center">
            <span className="mr-2 text-lg">
              ₹{discountPrice(item.glasses.price)}
            </span>
            <PriceLine>
              <span className="text-lg text-gray-600">
                ₹{item.glasses.price}
              </span>
            </PriceLine>
          </div>
        </div>
      </div>
      <span>x{item.length}</span>
    </li>
  );
}

export default CheckoutItem;
