import { useGetWhishListItem } from "./useGetWhishListItem";
import LoadingPage from "../../UI/LoadingPage";
import PruductsItem from "../pruduct/PruductsItem";
import EmptyWhishList from "./EmptyWhishList";
import ItemContainer from "../../UI/ItemContainer";

function WhishMenu() {
  const { whishListUser, loadingWhishListUser } = useGetWhishListItem();
  if (loadingWhishListUser) return <LoadingPage />;
  if (whishListUser?.length === 0) return <EmptyWhishList />;
  return (
    <div className="mt-14 pt-5">
      <h1 className="text-2xl">Whishlist</h1>
      <ItemContainer>
        {whishListUser?.map((item) => (
          <PruductsItem
            product={item.glasses}
            key={item.id}
            whishToggle={true}
          />
        ))}
      </ItemContainer>
    </div>
  );
}

export default WhishMenu;
