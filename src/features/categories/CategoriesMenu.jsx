import { useScroll } from "../../context/ScrollContext";
import LoadingPage from "../../UI/LoadingPage";
import CategoriesItem from "./CategoriesItem";
import { useGetCategories } from "./useGetCategories";

function CategoriesMenu() {
  const { categories, loadingCategories } = useGetCategories();
  const { ref } = useScroll();
  if (loadingCategories) return <LoadingPage />;

  return (
    <div ref={ref}>
      <h2 className="mb-4 mt-16 text-center text-5xl">Categories</h2>
      <div className="grid-col-1 grid gap-3 sm:flex-row md:grid-cols-3">
        {categories?.map((cat) => (
          <CategoriesItem cat={cat} key={cat.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesMenu;
