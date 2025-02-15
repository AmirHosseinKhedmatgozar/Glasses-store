import HeaderImg from "./HeaderImg";
import HeaderInfo from "./HeaderInfo";

function Header() {
  return (
    <div className="block items-center justify-between gap-4 md:flex">
      <HeaderInfo />
      <HeaderImg />
    </div>
  );
}

export default Header;
