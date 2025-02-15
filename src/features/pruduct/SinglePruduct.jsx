import PriceLine from "../../UI/PriceLine";
import ButtonItem from "./ButtonItem";
import ListAboutPruduct from "./ListAboutPruduct";
import LoadingPage from "../../UI/LoadingPage";
import { discountPrice } from "../../utils/healpers";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPruducts } from "./useGetPruducts";
import { checkWashList } from "../../services/apiWhishList";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import { useRepeater } from "../../context/repeaterContext";
import { useCheckShopping } from "../Shopping/useCheckShopping";

function SinglePruduct() {
  const [rate, setRate] = useState(0);
  const { itemId } = useParams();
  const { user } = useGetCurrentUser();

  const { repeater, setRepeater } = useRepeater();
  const { pruducts, loadingPruducts } = useGetPruducts();
  const user_id = user?.id;
  const { hasShopping, loadingHasShopping } = useCheckShopping({
    user_id: user_id,
    item_id: itemId,
  });

  const filter =
    pruducts?.filter((pru) => pru.id === Number(itemId)).at(0) || {};
  const {
    image,
    glassesName,
    rating,
    heavey,
    gender,
    category,
    brand,
    about,
    price,
  } = filter;

  useEffect(
    function () {
      const checkExists = async function () {
        const itemExists = await checkWashList(user_id, itemId);
        setRepeater(itemExists);
      };
      checkExists();
    },
    [user_id, itemId, setRepeater],
  );

  useEffect(
    function () {
      if (rating !== undefined) {
        setRate(rating);
      }
    },
    [rating],
  );

  function handleChange(e) {
    setRate(Number(e.target.value));
  }

  if (loadingPruducts) return <LoadingPage />;
  if (!filter) return <h3>not found pruduct</h3>;

  return (
    <div className="mt-10 flex flex-col items-center gap-8 p-4 md:flex-row">
      <div className="flex items-center justify-center rounded-xl bg-gray-200">
        <img src={image} />
      </div>
      <div className="flex flex-col gap-5 p-2">
        <div>
          <h1 className="text-3xl">{glassesName}</h1>
          <p className="mb-1 mt-2 text-gray-700">{about}</p>
          <span className="flex items-center gap-3">
            <Rating
              name="customized-10"
              value={rate}
              onChange={(e) => handleChange(e)}
              max={10}
              precision={0.1}
              readOnly
            />
            ({rating}) Rating
          </span>
        </div>

        <div>
          <h2 className="mb-1 text-2xl">About Product</h2>
          <ListAboutPruduct
            brand={brand}
            category={category}
            gender={gender}
            heavey={heavey}
          />
        </div>
        <div className="flex items-center justify-start">
          <h3 className="mr-6 text-2xl">Price:</h3>
          <span className="mr-2 text-3xl text-[--color-price]">
            ₹{discountPrice(price)}
          </span>
          <PriceLine>
            <span className="text-xl text-gray-600">₹{price}</span>
          </PriceLine>
        </div>

        <div className="flex items-center gap-6">
          <ButtonItem
            icon="shoppiong"
            item_id={itemId}
            user_id={user_id}
            hasShopping={hasShopping}
          >
            {loadingHasShopping
              ? "......."
              : !hasShopping
                ? "Add to Bag"
                : "Go to Bag"}
          </ButtonItem>
          <ButtonItem icon="whishList" item_id={itemId} user_id={user_id}>
            {(!repeater && "Whish List Item") ||
              (repeater && "Remove from Wishlist")}
          </ButtonItem>
        </div>
      </div>
    </div>
  );
}

export default SinglePruduct;
