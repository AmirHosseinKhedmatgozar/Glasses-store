import { useQuery } from "@tanstack/react-query";
import { getGlasses } from "../../services/apiGlasses";

export function useGetGlasses() {
  const { data: glasses, isLoading: loadingGlasses } = useQuery({
    queryFn: () => getGlasses(),
    queryKey: ["glasses"],
  });

  return { glasses, loadingGlasses };
}
