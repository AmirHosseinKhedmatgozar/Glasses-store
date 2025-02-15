/* eslint-disable react/prop-types */
import ButtonCheckout from "../../UI/ButtonCheckout";
import { discountPrice } from "../../utils/healpers";
import { useGetShoppingListUser } from "../Shopping/useGetShoppingListUser";
import PurchaseInformation from "./PurchaseInformation";

function OrderSummeryInfo({ onClick, children }) {
  const { shoppingListUser, loadingShoppingListUser } =
    useGetShoppingListUser();

  if (loadingShoppingListUser) return;

  const totalPrice = shoppingListUser?.reduce((acc, cur) => {
    return acc + Number(cur.glasses.price);
  }, 0);

  const totalPriceWhitDiscount = shoppingListUser?.reduce((acc, cur) => {
    return acc + discountPrice(Number(cur.glasses.price));
  }, 0);

  const length = shoppingListUser?.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);

  const discount = totalPrice - totalPriceWhitDiscount;
  return (
    <>
      <div className="min-w-64 border-b-2 border-t-2 pb-4 pt-4">
        <PurchaseInformation tittle="Total Products" value={String(length)} />
        <PurchaseInformation tittle="Subtotal" value={totalPrice} />
        <PurchaseInformation tittle="Discount" value={discount} />
        <PurchaseInformation tittle="Delivery Charges" value={"Free"} />
      </div>
      <div>
        <PurchaseInformation tittle="Total" value={totalPriceWhitDiscount} />
        <ButtonCheckout style="mt-2 mb-3 " onClick={onClick}>
          {children}
        </ButtonCheckout>
      </div>
    </>
  );
}

export default OrderSummeryInfo;
