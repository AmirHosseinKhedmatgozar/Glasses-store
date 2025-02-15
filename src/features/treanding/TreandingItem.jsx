/* eslint-disable react/prop-types */
import BoxTrend from "./BoxTrend";
import InfoTraking from "./InfoTraking";

function TreandingItem({ trendItem }) {
  const { id, image } = trendItem;

  return (
    <BoxTrend
      id={id}
      background="bg-[--color-yellow-shadow] "
      scale={"hover:scale-105"}
    >
      <div className="flex cursor-pointer flex-col">
        <InfoTraking trendItem={trendItem} />
        <div className="-translate-y-4 self-center">
          <img
            className="flex h-24 w-40 scale-x-125 scale-y-95 items-center justify-center"
            src={image}
            alt="trendItem"
          />
        </div>
      </div>
    </BoxTrend>
  );
}

export default TreandingItem;
