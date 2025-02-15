import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiCategories";

export function useGetCategories() {
  const { data: categories, isLoading: loadingCategories } = useQuery({
    queryFn: getCategories,
    queryKey: ["categories"],
  });

  return { categories, loadingCategories };
}
