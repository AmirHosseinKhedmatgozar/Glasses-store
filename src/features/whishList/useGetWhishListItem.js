import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import { getWhishListUser } from "../../services/apiWhishList";

export function useGetWhishListItem() {
  const queryClient = useQueryClient();
  const { user } = useGetCurrentUser();

  const { data: whishListUser, isLoading: loadingWhishListUser } = useQuery({
    queryFn: () => getWhishListUser(user.id),
    queryKey: ["whishList"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["whishList", user.id],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { whishListUser, loadingWhishListUser };
}
