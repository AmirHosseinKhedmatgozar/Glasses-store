/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import PriceLine from "../../UI/PriceLine";
import { discountPrice } from "../../utils/healpers";

function SearchItem({ searchItem, firstItemId }) {
  const navigate = useNavigate();
  const { id, glassesName, price, image } = searchItem;

  function handleClick(item) {
    navigate(`/pruductItem/${item}`);
  }
  return (
    <li
      onClick={() => handleClick(id)}
      className={`${id === firstItemId ? "" : "border-t"} flex h-20 cursor-pointer items-center justify-between border-[--color-green-secoundary] bg-gray-100 pl-2 pr-4 hover:bg-[--color-green-primary]`}
    >
      <img
        src={image}
        alt="glasse"
        className="h-14 w-16 rounded-xl bg-gray-300"
      />
      <h3 className="text-xl">{glassesName}</h3>
      <div>
        <span>₹{discountPrice(price)}</span>
        <div>
          <PriceLine>
            <span className="text-gray-400">₹{price}</span>
          </PriceLine>
        </div>
      </div>
    </li>
  );
}

export default SearchItem;
