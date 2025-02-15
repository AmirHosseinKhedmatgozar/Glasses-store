import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import { getAddresses } from "../../services/apiAssresses";

export function useGetAddresses() {
  const queryClient = useQueryClient();
  const { user } = useGetCurrentUser();

  const { data: Addresses, isLoading: loadingAddresses } = useQuery({
    queryFn: () => getAddresses(user?.id),
    queryKey: ["addresses"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses", user.id],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { Addresses, loadingAddresses };
}
