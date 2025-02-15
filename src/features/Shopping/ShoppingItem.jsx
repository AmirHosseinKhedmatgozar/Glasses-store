/* eslint-disable react/prop-types */
import PriceLine from "../../UI/PriceLine";
import { discountPrice } from "../../utils/healpers";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import ButtonItem from "../pruduct/ButtonItem";
import { useGetWhishListItem } from "../whishList/useGetWhishListItem";
import WhishListIcon from "../whishList/WhishListIcon";
import ShoppingLength from "./ShoppingLength";

function ShoppingItem({ item, itemInfo }) {
  const { image, price, glassesName } = item;
  const { whishListUser } = useGetWhishListItem();
  const { user } = useGetCurrentUser();
  const isInWhishList = whishListUser?.some(
    (userItem) => userItem.itemId === item.id,
  );

  return (
    <div className="flex flex-col items-center justify-between gap-8 rounded-lg pb-4 pl-2 pr-2 pt-8 shadow-lg sm:flex-row">
      <img
        src={image}
        alt="glassImage"
        className="max-h-32 w-44 rounded-lg bg-gray-200"
      />
      <div className="flex min-w-52 flex-col justify-between gap-4">
        <h3>{glassesName}</h3>
        <div className="flex items-center justify-between gap-4">
          <div className="gap-2 sm:flex">
            <span className="text-gray-700">Quantity:</span>
            <ShoppingLength length={itemInfo.length} id={itemInfo.id} />
          </div>
          <div>
            <span className="text-black">₹{discountPrice(price)}</span>
            <PriceLine>
              <span className="text-gray-600">₹{price}</span>
            </PriceLine>
          </div>
        </div>
        <div className="flex gap-2">
          <ButtonItem
            icon="shoppiong"
            hasShopping={true}
            user_id={user.id}
            item_id={item.id}
            bag={true}
          >
            remove from bag
          </ButtonItem>
          <WhishListIcon product={item} whishToggle={isInWhishList} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;
