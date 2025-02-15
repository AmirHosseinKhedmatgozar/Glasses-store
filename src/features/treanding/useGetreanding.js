import { useQuery } from "@tanstack/react-query";
import { getTreanding } from "../../services/apiGlasses";

export function useGetTreanding() {
  const { data: treanding, isLoading: loadingTreand } = useQuery({
    queryFn: getTreanding,
    queryKey: ["treanding"],
  });

  return { treanding, loadingTreand };
}
