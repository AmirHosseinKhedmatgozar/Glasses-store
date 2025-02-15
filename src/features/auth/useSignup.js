import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: mutateSignup, isLoading: loadingSignup } = useMutation({
    mutationFn: ({ email, password, name }) => {
      return signup({ email, password, name });
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Successfully Signup.");
      navigate("/");
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Password should be at least 6 characters");
    },
  });

  return { mutateSignup, loadingSignup };
}
