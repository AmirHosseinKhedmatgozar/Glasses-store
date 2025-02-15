import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWhishItem } from "../../services/apiWhishList";
import toast from "react-hot-toast";

export function useDeleteWhishItem() {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteWhishItem, isLoading: deleteWhishItemLoading } =
    useMutation({
      mutationFn: (item) => {
        return deleteWhishItem(item);
      },
      onSuccess: () => {
        toast("😳This product has been removed to whishList.");
        queryClient.invalidateQueries({
          queryKey: ["whishList"],
        });
      },
      onError: (err) => {
        toast.error("This product could not be removed to whishList.");
        console.log(err.message);
      },
    });

  return { mutateDeleteWhishItem, deleteWhishItemLoading };
}
