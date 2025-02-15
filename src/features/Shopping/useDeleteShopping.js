import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteShopping } from "../../services/apiShopping";

export function useDeleteShopping() {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteShop, isLoading: deleteShopLoading } =
    useMutation({
      mutationFn: (item) => {
        return deleteShopping(item);
      },
      onSuccess: () => {
        toast("😳This shop has been removed to shoppingCard.");
        queryClient.invalidateQueries({
          queryKey: ["shopping"],
        });
      },
      onError: (err) => {
        toast.error("This shop could not be removed to shoppingCard.");
        console.log(err.message);
      },
    });

  return { mutateDeleteShop, deleteShopLoading };
}
