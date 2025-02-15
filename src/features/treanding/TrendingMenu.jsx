import LoadingPage from "../../UI/LoadingPage";
import BoxTrend from "./BoxTrend";
import TreandingItem from "./TreandingItem";
import { useGetTreanding } from "./useGetreanding";

function TrendingMenu() {
  const { treanding, loadingTreand } = useGetTreanding();

  if (!treanding || treanding.length === 0) return;

  if (loadingTreand) return <LoadingPage />;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <BoxTrend background="bg-[--color-body]">
        <h2 className="text-wrap text-center text-5xl leading-snug">
          Trending Products
        </h2>
      </BoxTrend>

      {treanding.slice(0, 7).map((trend) => {
        return <TreandingItem trendItem={trend} key={trend.id} />;
      })}
    </div>
  );
}

export default TrendingMenu;
