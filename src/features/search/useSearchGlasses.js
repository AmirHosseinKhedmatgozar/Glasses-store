import { useQuery } from "@tanstack/react-query";
import { getSearchGlasses } from "../../services/apiGlasses";

export function useSearchGlasses(character) {
  const { data: searchGlasss, isLoading: loadingSearchGlasses } = useQuery({
    queryFn: () => getSearchGlasses(character),
    queryKey: ["searchGlasses", character],
    enabled: !!character,
  });

  return { searchGlasss, loadingSearchGlasses };
}
