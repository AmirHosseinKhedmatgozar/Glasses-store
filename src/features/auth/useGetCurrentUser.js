import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useGetCurrentUser() {
  const { data: user, isLoading: getUserLoading } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  return {
    user,
    getUserLoading,
    isAuthenticated: user?.role === "authenticated",
  };
}
