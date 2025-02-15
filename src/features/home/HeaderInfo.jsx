import { LiaSearchPlusSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../../context/ScrollContext";

function HeaderInfo() {
  const { handleScroll } = useScroll();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="josefin-sans-Medium mt-10 text-3xl leading-none min-[500px]:mt-12 min-[500px]:text-7xl">
        Glasses & Lens
      </h1>

      <div className="text-gray-700">
        <p className="josefin text-lg">
          Buy the best high-quality sunglasses from us.
        </p>
        <p className="josefin text-lg">More than 100 types of assortment.</p>
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate("pruducts")}
          className="rounded-2xl bg-black p-2 text-base text-white min-[500px]:text-xl"
        >
          Start Shoping
        </button>

        <div className="flex items-center justify-start gap-1">
          <button
            onClick={handleScroll}
            className="text-base min-[500px]:text-xl"
          >
            Explore More
          </button>

          <button>
            <LiaSearchPlusSolid className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;
