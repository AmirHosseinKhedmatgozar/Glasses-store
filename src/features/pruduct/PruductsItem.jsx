/* eslint-disable react/prop-types */
import PriceLine from "../../UI/PriceLine";
import WhishListIcon from "../whishList/WhishListIcon";
import ButtonItem from "./ButtonItem";
import { discountPrice } from "../../utils/healpers";
import { useNavigate } from "react-router-dom";
import { useWhishToggle } from "../whishList/useWhishToggle";
import { useCheckShopping } from "../Shopping/useCheckShopping";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";

function PruductsItem({ product, whishToggle }) {
  const { user } = useGetCurrentUser();
  const { hasShopping, loadingHasShopping } = useCheckShopping({
    user_id: user?.id,
    item_id: product.id,
  });
  const { isWishIconClicked } = useWhishToggle();
  const navigate = useNavigate();

  function handleClick(item) {
    if (!isWishIconClicked) {
      navigate(`/pruductItem/${item}`);
    }
  }

  return (
    <div
      onClick={() => handleClick(product.id)}
      className="flex cursor-pointer flex-col rounded-lg bg-white p-4 shadow-lg hover:scale-105"
    >
      <div className="flex items-center justify-center rounded-lg bg-stone-50">
        <img src={product.image} className="h-48 w-72" />
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="">{product.glassesName}</h3>
            <span className="text-2xl font-light text-[--color-price]">
              ₹{discountPrice(product.price)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>
              {product.rating} 💛 <span className="text-gray-400">Rating</span>
            </span>
            <PriceLine>
              <span className="font-light">₹{product.price}</span>
            </PriceLine>
          </div>
        </div>
        <span className="text-gray-500">{product.brand}</span>
        <div className="mt-2 flex items-center justify-between border-t-2 pt-4">
          <ButtonItem
            icon="shoppiong"
            item_id={product.id}
            user_id={user?.id}
            disabled={loadingHasShopping}
            hasShopping={hasShopping}
            style={
              "flex items-center  rounded-2xl border-2 border-gray-700 pb-1 pl-6 pr-6 pt-1 text-lg font-medium transition-all duration-200 hover:bg-black hover:text-white"
            }
          >
            {loadingHasShopping
              ? "......."
              : !hasShopping
                ? "Add to Bag"
                : "Go to Bag"}
          </ButtonItem>
          <WhishListIcon product={product} whishToggle={whishToggle} />
        </div>
      </div>
    </div>
  );
}

export default PruductsItem;
