/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "../features/auth/useGetCurrentUser";
import LoadingPage from "./LoadingPage";

function AppProvider({ children }) {
  const { getUserLoading, isAuthenticated } = useGetCurrentUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated && !getUserLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, getUserLoading, navigate],
  );
  if (getUserLoading) return <LoadingPage />;
  if (isAuthenticated) return children;
}

export default AppProvider;
