import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addWhishItem } from "../../services/apiWhishList";
import toast from "react-hot-toast";

export function useAddWhishItem() {
  const queryClient = useQueryClient();

  const { mutate: mutateAddWhishItem, isLoading: addWhishItemLoading } =
    useMutation({
      mutationFn: (item) => {
        return addWhishItem(item);
      },
      onSuccess: () => {
        if (toast.success("This product has been added to whishList."));
        queryClient.invalidateQueries({
          queryKey: ["whishList"],
        });
      },
      onError: (err) => {
        toast.error("This product could not be added to whishList.");
        console.log(err.message);
      },
    });
  return { mutateAddWhishItem, addWhishItemLoading };
}
