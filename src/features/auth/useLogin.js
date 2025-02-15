import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginUser as apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateLogin, isLoading: loadingLogin } = useMutation({
    mutationFn: ({ email, password }) => {
      return apiLogin({ email, password });
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Successfully login.");
      navigate("/");
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Try again...");
    },
  });

  return { mutateLogin, loadingLogin };
}
