/* eslint-disable react/prop-types */
import { FaPlusSquare } from "react-icons/fa";
import { useAddWhishItem } from "../whishList/useAddWhishItem";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import { useGetWhishListItem } from "../whishList/useGetWhishListItem";

function InfoTraking({ trendItem }) {
  const { glassesName, price, category } = trendItem;
  const { user, getUserLoading } = useGetCurrentUser();
  const { mutateAddWhishItem } = useAddWhishItem();
  const { whishListUser } = useGetWhishListItem();

  const isInWhishList = whishListUser?.some(
    (item) => item.itemId === trendItem.id,
  );

  function handleClick(e) {
    e.stopPropagation();
    if (getUserLoading) return;
    mutateAddWhishItem({ user_id: user?.id, item_id: trendItem.id });
  }
  return (
    <div className="flex justify-between pt-3">
      <h3 className="pl-4 text-xl">{glassesName}</h3>

      <div className="w-fit">
        <div className="flex items-center justify-between gap-1">
          <span className="w text-xl font-normal">₹{price}</span>

          <button
            onClick={(e) => {
              handleClick(e);
            }}
            className="p-1"
            disabled={isInWhishList}
          >
            <FaPlusSquare
              className={`rounded-xl bg-white text-2xl text-[--color-yellow-primary] hover:scale-150 ${isInWhishList && "cursor-not-allowed text-red-500"}`}
            />
          </button>
        </div>
        <p className="font-mono text-gray-700">{category}</p>
      </div>
    </div>
  );
}

export default InfoTraking;
