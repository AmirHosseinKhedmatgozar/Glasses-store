import { LuBookmarkPlus } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

function Info() {
  const navigate = useNavigate();

  return (
    <div className="row-start-1 hidden items-center gap-4 min-[324px]:flex">
      <div className="rounded-lg bg-[var(--color-yellow-primary)] hover:bg-[--color-yellow-secoundary]">
        <button
          onClick={() => {
            navigate("/pruducts");
          }}
          className="hidden pb-1 pl-2 pr-2 pt-1 md:block"
        >
          Explore
        </button>
      </div>
      <ButtonIcon
        style={{
          bg: "bg-gray-300",
          hover: "bg-gray-400",
        }}
        onClick={() => navigate("/wishlist")}
        type={"whishList"}
      >
        <LuBookmarkPlus className="h-6 w-6 text-3xl text-gray-800" />
      </ButtonIcon>

      <ButtonIcon
        style={{
          bg: "bg-[--color-yellow-primary]",
          hover: "bg-[--color-yellow-secoundary]",
        }}
        onClick={() => navigate("/shopingcart")}
        type={"shopping"}
      >
        <MdOutlineShoppingBag className="h-6 w-6 text-3xl text-gray-800" />
      </ButtonIcon>
    </div>
  );
}

export default Info;
