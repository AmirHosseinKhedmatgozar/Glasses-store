/* eslint-disable react/prop-types */
import { LuBookmarkPlus } from "react-icons/lu";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import { useAddWhishItem } from "./useAddWhishItem";
import { useDeleteWhishItem } from "./useDeleteWhishItem";
import { useWhishToggle } from "./useWhishToggle";

function WhishListIcon({ product, whishToggle }) {
  const { setIsWishIconClicked } = useWhishToggle();
  const { user, getUserLoading } = useGetCurrentUser();
  const { mutateAddWhishItem, addWhishItemLoading } = useAddWhishItem();
  const { mutateDeleteWhishItem, deleteWhishItemLoading } =
    useDeleteWhishItem();

  function handleWhishListClick(event) {
    event.stopPropagation();
    setIsWishIconClicked(true);
    if (whishToggle) {
      if (getUserLoading) return;
      mutateDeleteWhishItem({ user_id: user.id, item_id: product.id });
    } else {
      if (getUserLoading) return;
      mutateAddWhishItem({ user_id: user.id, item_id: product.id });
    }
    setIsWishIconClicked(false);
  }

  return (
    <button
      className="p-1 disabled:cursor-not-allowed"
      onClick={(e) => {
        handleWhishListClick(e);
      }}
      disabled={addWhishItemLoading || deleteWhishItemLoading}
    >
      <LuBookmarkPlus
        className={`text-2xl hover:text-red-500 ${whishToggle ? "text-red-500" : "text-gray-800"} `}
      />
    </button>
  );
}

export default WhishListIcon;
