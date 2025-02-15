import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddress } from "../../services/apiAssresses";
import toast from "react-hot-toast";

export function useAddAddress() {
  const queryClient = useQueryClient();

  const { mutate: mutateAddAddress, isLoading: addAddressLoading } =
    useMutation({
      mutationFn: (item) => {
        return addAddress(item);
      },
      onSuccess: () => {
        toast.success("This address has been added.");
        queryClient.invalidateQueries({
          queryKey: ["addresses"],
        });
      },
      onError: (err) => {
        toast.error("This address dont added.");
        console.log(err.message);
      },
    });
  return { mutateAddAddress, addAddressLoading };
}
