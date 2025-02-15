import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addShopping } from "../../services/apiShopping";

export function useAddShopping() {
  const queryClient = useQueryClient();

  const { mutate: mutateAddShopping, isLoading: addShoppingLoading } =
    useMutation({
      mutationFn: (item) => {
        return addShopping(item);
      },
      onSuccess: () => {
        if (toast.success("This product has been added to shop."));
        queryClient.invalidateQueries({
          queryKey: ["shopping"],
        });
      },
      onError: (err) => {
        toast.error("This product could not be added to shop.");
        console.log(err.message);
      },
    });
  return { mutateAddShopping, addShoppingLoading };
}
