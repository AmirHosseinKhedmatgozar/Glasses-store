import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAddress } from "../../services/apiAssresses";
import toast from "react-hot-toast";

export function useEditAddress() {
  const queryClient = useQueryClient();

  const { mutate: mutateEditAddress, isLoading: editAddressLoading } =
    useMutation({
      mutationFn: (data) => {
        return editAddress(data);
      },
      onSuccess: () => {
        toast.success("✅This address has been Edited.");
        queryClient.invalidateQueries({
          queryKey: ["addresses"],
        });
      },
      onError: (err) => {
        toast.error("❌This address has dont Edited.");
        console.log(err.message);
      },
    });

  return { mutateEditAddress, editAddressLoading };
}
