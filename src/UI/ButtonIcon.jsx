/* eslint-disable react/prop-types */

import { useGetShoppingListUser } from "../features/Shopping/useGetShoppingListUser";
import { useGetWhishListItem } from "../features/whishList/useGetWhishListItem";

function ButtonIcon({ children, onClick, style, type }) {
  const { whishListUser, loadingWhishListUser } = useGetWhishListItem();
  const { shoppingListUser, loadingShoppingListUser } =
    useGetShoppingListUser();

  return (
    <div
      className="relative hidden cursor-pointer min-[910px]:block"
      onClick={onClick}
    >
      <div
        className={`${style.bg} hover:${style.hover} rounded-full p-3 text-black`}
      >
        {children}
      </div>
      {whishListUser?.length > 0 && type === "whishList" && (
        <div className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-sky-100 bg-red-500 text-xs text-white">
          {whishListUser && !loadingWhishListUser && `${whishListUser.length}`}
        </div>
      )}
      {shoppingListUser?.length > 0 && type === "shopping" && (
        <div className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-sky-100 bg-red-500 text-xs text-white">
          {shoppingListUser &&
            !loadingShoppingListUser &&
            `${shoppingListUser.length}`}
        </div>
      )}
    </div>
  );
}

export default ButtonIcon;
