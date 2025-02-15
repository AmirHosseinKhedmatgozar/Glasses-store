import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative row-start-1 hidden max-[909px]:block">
      <button
        className="rounded-md bg-[var(--color-yellow-primary)] p-2 text-gray-800 hover:bg-[--color-yellow-secoundary]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RxCross2 className="text-sm" />
        ) : (
          <FiMenu className="text-sm" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-24 rounded-lg bg-yellow-100 shadow-lg">
          <ul className="p-2">
            <li
              onClick={() => {
                navigate("wishlist");
              }}
              className="cursor-pointer rounded-md text-center hover:bg-gray-200"
            >
              <span>Whishlist</span>
            </li>
            <li
              onClick={() => {
                navigate("shopingcart");
              }}
              className="cursor-pointer rounded-md text-center hover:bg-gray-200"
            >
              <span>Shopping</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
