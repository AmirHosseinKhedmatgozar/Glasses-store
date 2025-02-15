import { RepeaterProvider } from "./context/repeaterContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Applayout from "./pages/Applayout";
import Pruducts from "./pages/Pruducts";
import ShopingCart from "./pages/ShopingCart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./UI/PageNotFound";
import Profile from "./UI/Profile";
import Wishlist from "./UI/Wishlist";
import Home from "./pages/Home";
import SinglePruduct from "./features/pruduct/SinglePruduct";
import AppProvider from "./UI/AppProvider";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppProvider>
          <Applayout />
        </AppProvider>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "pruducts",
          element: <Pruducts />,
        },
        {
          path: "pruducts/:category",
          element: <Pruducts />,
        },
        { path: "pruductItem/:itemId", element: <SinglePruduct /> },
        { path: "shopingcart", element: <ShopingCart /> },
        { path: "wishlist", element: <Wishlist /> },
        {
          path: "profile",
          element: <Profile />,
        },
        { path: "checkout", element: <CheckoutPage /> },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RepeaterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "10px 20px",
              backgroundColor: "var(--color-yellow-light-primary)",
            },
          }}
        />
      </RepeaterProvider>
    </QueryClientProvider>
  );
}

export default App;
