/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

function CategoriesItem({ cat }) {
  const navigate = useNavigate();

  return (
    <div
      key={cat.imageName}
      className="relative cursor-pointer transition-transform"
      onClick={() =>
        navigate(
          `pruducts/${cat.imageName
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}`,
        )
      }
    >
      <img
        src={cat.imageUrl}
        className="h-full w-full rounded-xl object-cover blur-[0.5px] hover:blur-none hover:saturate-150"
        alt={cat.imageName}
      />
      <span className="absolute inset-0 top-[40%] text-center text-[4rem] font-extrabold tracking-wide text-[--color-yellow-shadow] shadow-2xl">
        {cat.imageName}
      </span>
    </div>
  );
}

export default CategoriesItem;
