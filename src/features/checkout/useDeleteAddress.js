import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddress } from "../../services/apiAssresses";
import toast from "react-hot-toast";

export function useDeleteAddress() {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteAddress, isLoading: deleteAddressLoading } =
    useMutation({
      mutationFn: (item) => {
        return deleteAddress(item);
      },
      onSuccess: () => {
        toast("😳This address has been removed .");
        queryClient.invalidateQueries({
          queryKey: ["addresses"],
        });
      },
      onError: (err) => {
        toast.error("This address could not be removed .");
        console.log(err.message);
      },
    });

  return { mutateDeleteAddress, deleteAddressLoading };
}
