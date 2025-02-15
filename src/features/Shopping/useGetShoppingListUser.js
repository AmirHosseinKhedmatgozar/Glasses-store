import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import { getShoppingListUser } from "../../services/apiShopping";

export function useGetShoppingListUser() {
  const queryClient = useQueryClient();
  const { user } = useGetCurrentUser();

  const { data: shoppingListUser, isLoading: loadingShoppingListUser } =
    useQuery({
      queryFn: () => getShoppingListUser(user.id),
      queryKey: ["shopping"],
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["shopping", user.id],
        });
      },
      onError: (err) => {
        console.log(err.message);
      },
    });

  return { shoppingListUser, loadingShoppingListUser };
}
