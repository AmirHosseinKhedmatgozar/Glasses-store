import { useQuery } from "@tanstack/react-query";
import { getWhishList } from "../../services/apiWhishList";

export function useGetWhishList(userId) {
  const { data: whishList, isLoading: loadinWhishList } = useQuery({
    queryFn: () => getWhishList(userId),
    queryKey: ["whishList", userId],
  });

  return { whishList, loadinWhishList };
}
