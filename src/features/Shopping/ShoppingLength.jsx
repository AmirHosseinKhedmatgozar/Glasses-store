/* eslint-disable react/prop-types */
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useUpdateLengthShopping } from "./useUpdateLengthShopping";
import { useEffect, useState } from "react";

function ShoppingLength({ length, id }) {
  const { mutateUpdateShop, updateShopLoading } = useUpdateLengthShopping();

  const [lengthItem, setLengthItem] = useState(length);
  useEffect(
    function () {
      setLengthItem(length);
    },
    [length],
  );

  const handleIncrease = () => {
    const newLength = lengthItem + 1;
    setLengthItem(newLength);
    mutateUpdateShop({ item: newLength, itemId: id });
  };

  const handleDecrease = () => {
    if (lengthItem <= 1) return;
    const newLength = lengthItem - 1;
    setLengthItem(newLength);
    mutateUpdateShop({ item: newLength, itemId: id });
  };

  return (
    <div className="text-lg` flex items-center gap-2">
      <FaMinusCircle
        className={`${updateShopLoading && "cursor-progress"} cursor-pointer rounded-full hover:bg-gray-400`}
        onClick={handleDecrease}
      />
      <span>{lengthItem}</span>
      <FaPlusCircle
        className={`${updateShopLoading && "cursor-progress"} cursor-pointer rounded-full hover:bg-gray-400`}
        onClick={handleIncrease}
      />
    </div>
  );
}

export default ShoppingLength;
