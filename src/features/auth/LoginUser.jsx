import { useState } from "react";
import { useLogin } from "./useLogin";
import FormBoxUser from "./FormBoxUser";
import BoxInpute from "../../UI/BoxInpute";
import BtnLogin from "./BtnLogin";
import { Link } from "react-router-dom";

function LoginUser() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const { mutateLogin, loadingLogin } = useLogin();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userInfo.email === "" && userInfo.password === "") return;

    mutateLogin(userInfo, {
      onSettled: () => setUserInfo({ email: "", password: "" }),
    });
  }

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <div className="basis-1/2 bg-[url('/public/photo/bannerHero.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="flex basis-1/2 items-center justify-center bg-[--color-body-secoundary]">
        <FormBoxUser type="Login">
          <form onSubmit={handleSubmit}>
            <BoxInpute
              type={"email"}
              value={userInfo.email}
              onChange={handleChange}
              name={"email"}
              id={"emailLogin"}
            >
              Email
            </BoxInpute>

            <BoxInpute
              type={"password"}
              value={userInfo.password}
              onChange={handleChange}
              name={"password"}
              id={"passwordLogin"}
            >
              Password
            </BoxInpute>

            <div className="mt-7 flex flex-col items-center justify-center">
              <BtnLogin>{loadingLogin ? "..." : "Login"}</BtnLogin>
              <BtnLogin
                bg="white"
                onClick={() => {
                  setUserInfo({
                    email: "amir@gmail.com",
                    password: "aaaaaaaa",
                  });
                }}
              >
                {loadingLogin ? "..." : "Login as a guest"}
              </BtnLogin>
            </div>
          </form>
          <Link to={"/signup"} className="text-gray-600 underline">
            Creat New Account
          </Link>
        </FormBoxUser>
      </div>
    </div>
  );
}

export default LoginUser;
