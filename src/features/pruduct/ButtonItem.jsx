/* eslint-disable react/prop-types */

import { LuBookmarkPlus } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useAddWhishItem } from "../whishList/useAddWhishItem";
import { useDeleteWhishItem } from "../whishList/useDeleteWhishItem";
import { useRepeater } from "../../context/repeaterContext";
import { useNavigate } from "react-router-dom";
import { useAddShopping } from "../Shopping/useAddShopping";
import { useDeleteShopping } from "../Shopping/useDeleteShopping";

function ButtonItem({
  children,
  user_id,
  item_id,
  icon,
  hasShopping,
  bag,
  style,
  disabled,
}) {
  const navigate = useNavigate();
  const { repeater, setRepeater } = useRepeater();
  const { mutateAddWhishItem, addWhishItemLoading } = useAddWhishItem();
  const { mutateDeleteWhishItem, deleteWhishItemLoading } =
    useDeleteWhishItem();
  const { mutateAddShopping, addShoppingLoading } = useAddShopping();
  const { mutateDeleteShop, deleteShopLoading } = useDeleteShopping();

  async function handleClick(e) {
    if (e) {
      e.stopPropagation();
    }
    if (icon === "shoppiong") {
      if (!hasShopping) {
        mutateAddShopping({ user_id, item_id });
      } else {
        if (bag) {
          mutateDeleteShop({ user_id, item_id });
        }
        navigate("/shopingcart");
      }
    }

    if (icon === "whishList") {
      if (repeater) {
        return mutateDeleteWhishItem(
          { user_id, item_id },
          {
            onSuccess: () => {
              setRepeater(false);
            },
          },
        );
      }

      mutateAddWhishItem(
        { user_id, item_id },
        {
          onSuccess: () => {
            setRepeater(true);
          },
        },
      );
    }
  }

  return (
    <button
      className={
        style
          ? `${style}`
          : `flex items-center rounded-full bg-gray-700 pb-1 pl-2 pr-2 pt-1 text-xs text-gray-100 hover:bg-gray-500 disabled:cursor-wait md:text-sm`
      }
      onClick={(e) => {
        handleClick(e);
      }}
      disabled={
        addWhishItemLoading ||
        deleteWhishItemLoading ||
        addShoppingLoading ||
        deleteShopLoading ||
        disabled
      }
    >
      <span>
        {icon === "shoppiong" && (
          <MdOutlineShoppingBag className={`text-gray-100} text-xl`} />
        )}
        {icon === "whishList" && (
          <LuBookmarkPlus className={`text-xl text-gray-100`} />
        )}
      </span>
      {children}
    </button>
  );
}

export default ButtonItem;
