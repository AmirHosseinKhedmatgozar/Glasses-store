import LoadingPage from "../../UI/LoadingPage";
import PriceDetails from "./PriceDetails";
import ShoppingItem from "./ShoppingItem";
import { useGetShoppingListUser } from "./useGetShoppingListUser";
import { discountPrice } from "../../utils/healpers";
import EmptyShopping from "./EmptyShopping";
import ButtonCheckout from "../../UI/ButtonCheckout";
import { useNavigate } from "react-router-dom";

function ShopingCarts() {
  const navigate = useNavigate();
  const { shoppingListUser, loadingShoppingListUser } =
    useGetShoppingListUser();
  if (loadingShoppingListUser) return <LoadingPage />;
  if (shoppingListUser.length === 0) return <EmptyShopping />;

  const totalPrice = shoppingListUser?.reduce((acc, cur) => {
    return Number(acc) + discountPrice(Number(cur.glasses.price) * cur.length);
  }, 0);

  function handleClick() {
    navigate("/checkout");
  }

  return (
    <div className="mb-5 mt-20 md:mt-10">
      <span className="text-2xl">Bag({shoppingListUser?.length})</span>
      <div className="flex flex-col gap-16 md:flex-row">
        <div className="grid grid-cols-1 gap-5">
          {shoppingListUser.map((item) => {
            return (
              <ShoppingItem
                item={item.glasses}
                key={item.id}
                itemInfo={{ length: item.length, id: item.itemId }}
              />
            );
          })}
        </div>

        <div className="flex flex-col">
          <h3 className="mb-4 text-2xl font-medium">Price Details</h3>
          <div className="border-l-2">
            {shoppingListUser.map((item, i) => {
              return (
                <PriceDetails
                  item={item.glasses}
                  length={item.length}
                  key={i}
                />
              );
            })}
          </div>
          <hr />
          <div className="mt-3 flex justify-between gap-16 pb-3">
            <span className="text-2xl text-gray-900">Totoal</span>
            <span className="text-xl text-gray-800">₹{totalPrice}</span>
          </div>
          <ButtonCheckout onClick={handleClick}>
            Proceed to Checkout
          </ButtonCheckout>
        </div>
      </div>
    </div>
  );
}

export default ShopingCarts;
