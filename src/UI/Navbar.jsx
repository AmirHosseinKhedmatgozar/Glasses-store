import Info from "./info";
import Logo from "./Logo";
import SearchBox from "../features/search/SearchBox";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <div className="fixed top-0 z-10 ml-1 mr-1 grid w-full items-center justify-between gap-2 border-b-2 bg-white pb-2 pl-8 pr-8 pt-2 sm:pl-8 sm:pr-8 md:pl-14 md:pr-14">
      <Logo />
      <SearchBox />
      <Info />
      <HamburgerMenu />
    </div>
  );
}

export default Navbar;
