import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateShopping } from "../../services/apiShopping";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";

export function useUpdateLengthShopping() {
  const queryClient = useQueryClient();
  const { user } = useGetCurrentUser();

  const { mutate: mutateUpdateShop, isLoading: updateShopLoading } =
    useMutation({
      mutationFn: (data) => {
        return updateShopping({
          user: user.id,
          lengthItem: data.item,
          itemId: data.itemId,
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["shopping"],
        });
      },
      onError: (err) => {
        console.log(err.message);
      },
    });

  return { mutateUpdateShop, updateShopLoading };
}
