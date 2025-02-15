import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateLogout, isLoading: loadingLogout } = useMutation({
    mutationFn: () => {
      return logout();
    },
    onSuccess: () => {
      queryClient.removeQueries(["user"]);
      toast.success("Successfully Logout.");
      navigate("/");
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Try Again...");
    },
  });

  return { mutateLogout, loadingLogout };
}
