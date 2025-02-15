import { useQuery } from "@tanstack/react-query";
import { checkShopping } from "../../services/apiShopping";

export function useCheckShopping({ user_id, item_id }) {
  const { data: hasShopping, isLoading: loadingHasShopping } = useQuery({
    queryFn: () => checkShopping({ user_id, item_id }),
    queryKey: ["shopping", user_id, item_id],
  });
  return { hasShopping, loadingHasShopping };
}
