import Navbar from "../UI/Navbar";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="flex flex-col items-center justify-center pl-4 pr-4 pt-14 sm:pl-8 sm:pr-8">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Applayout;
