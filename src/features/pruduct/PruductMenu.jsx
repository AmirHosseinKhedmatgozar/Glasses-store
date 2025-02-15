/* eslint-disable react/prop-types */
import List from "../../UI/List";
import PruductsItem from "./PruductsItem";
import LoadingPage from "../../UI/LoadingPage";
import ButtonDirection from "../../UI/ButtonDirection";
import ButtonPages from "../../UI/ButtonPages";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useGetPruducts } from "./useGetPruducts";
import { useGetWhishListItem } from "../whishList/useGetWhishListItem";
import ItemContainer from "../../UI/ItemContainer";

function PruductMenu() {
  const [newPruducts, setNewPruducts] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const { pruducts, loadingPruducts } = useGetPruducts(category);
  const { whishListUser } = useGetWhishListItem();

  const pageLength = Array.from(
    { length: Math.ceil(newPruducts.length / 8) },
    (_, i) => {
      return i + 1;
    },
  );
  const pages = { firstPage: 1, lastPage: pageLength.at(-1) };

  function paginateItems(items = [], currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  const pruductSlice = paginateItems(newPruducts, nowPage, 8);

  useEffect(
    function () {
      const sort = searchParams.get("sort");
      if (!pruducts) return;
      let sortedPruduct = [...pruducts];

      if (sort === "HTL") {
        sortedPruduct = sortedPruduct.sort((a, b) => a.price - b.price);
      }

      if (sort === "LTH") {
        sortedPruduct = sortedPruduct.sort((a, b) => b.price - a.price);
      }

      setNewPruducts(sortedPruduct);
    },
    [searchParams, pruducts],
  );

  function handleClicked(clickPage) {
    if (clickPage === nowPage) return;
    setNowPage(clickPage);
  }

  function handleTogglePage(direction) {
    if (direction == "before" && nowPage !== pages.firstPage) {
      setNowPage((s) => s - 1);
    }
    if (direction == "next" && nowPage !== pages.lastPage) {
      setNowPage((s) => s + 1);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <img
          src="/photo/bannerHero.jpg"
          alt="banner"
          className="mt-4 rounded-2xl"
        />
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-3xl">Glasses for you</h3>
          <div className="flex gap-6">
            <List
              sort={[{ message: "Low to Hight" }, { message: "Hight to Low" }]}
            />
          </div>
        </div>
        <ItemContainer>
          {loadingPruducts ? (
            <LoadingPage />
          ) : (
            pruductSlice?.map((product) => {
              const isInWhishList = whishListUser?.some(
                (item) => item.itemId === product.id,
              );

              return (
                <PruductsItem
                  product={product}
                  key={product.id}
                  whishToggle={isInWhishList}
                />
              );
            })
          )}
        </ItemContainer>
      </div>
      {pruducts && pages.firstPage !== pages.lastPage && (
        <div className="mb-4 mt-6 flex items-center justify-center gap-3 font-extralight">
          <ButtonDirection
            onClick={() => {
              handleTogglePage("before");
            }}
          >
            <MdNavigateBefore />
          </ButtonDirection>

          <div className="flex gap-2 text-xl">
            <ButtonPages
              nowPage={nowPage}
              page={pages.firstPage}
              onClick={() => {
                handleClicked(pages.firstPage);
              }}
            >
              {pages.firstPage}
            </ButtonPages>

            {nowPage === pages.firstPage || nowPage === pages.lastPage ? (
              <span>{"..."}</span>
            ) : (
              <ButtonPages onClick={() => {}}>{nowPage}</ButtonPages>
            )}

            <ButtonPages
              nowPage={nowPage}
              page={pages.lastPage}
              onClick={() => {
                handleClicked(pages.lastPage);
              }}
            >
              {pages.lastPage}
            </ButtonPages>
          </div>

          <ButtonDirection
            onClick={() => {
              handleTogglePage("next");
            }}
          >
            <MdNavigateNext />
          </ButtonDirection>
        </div>
      )}
    </>
  );
}

export default PruductMenu;
//
