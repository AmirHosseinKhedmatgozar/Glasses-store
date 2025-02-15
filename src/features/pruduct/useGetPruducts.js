import { useQuery } from "@tanstack/react-query";
import { getGlassesPruducts } from "../../services/apiGlasses";

export function useGetPruducts(category) {
  const { data: pruducts, isLoading: loadingPruducts } = useQuery({
    queryFn: () => getGlassesPruducts(category),
    queryKey: ["pruducts", category],
  });

  return { pruducts, loadingPruducts };
}
