import CategoriesMenu from "../categories/CategoriesMenu";
import TrendingMenu from "../treanding/TrendingMenu";

function Main() {
  return (
    <div className="mt-10">
      <TrendingMenu />
      <CategoriesMenu />
    </div>
  );
}

export default Main;
