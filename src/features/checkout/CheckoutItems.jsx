import { useGetShoppingListUser } from "../../features/Shopping/useGetShoppingListUser";
import LoadingPage from "../../UI/LoadingPage";
import CheckoutItem from "./CheckoutItem";

function CheckoutItems() {
  const { shoppingListUser, loadingShoppingListUser } =
    useGetShoppingListUser();
  if (loadingShoppingListUser) return <LoadingPage />;

  return (
    <ul>
      {shoppingListUser?.map((item) => {
        return <CheckoutItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default CheckoutItems;
