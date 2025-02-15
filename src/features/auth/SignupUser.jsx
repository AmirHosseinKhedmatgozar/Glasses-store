import BoxInpute from "../../UI/BoxInpute";
import BtnLogin from "./BtnLogin";
import FormBoxUser from "./FormBoxUser";
import toast from "react-hot-toast";
import LoadingPage from "../../UI/LoadingPage";
import { useSignup } from "./useSignup";
import { useEffect, useState } from "react";

function SignupUser() {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setUserInfo({ userName: "", email: "", password: "", confirmPassword: "" });
  }, []);

  function checkArray(arr) {
    if (arr.length === 0) return false;
    return !arr.some(
      (item) => item === "" || item === null || item === undefined,
    );
  }

  const { mutateSignup, loadingSignup } = useSignup();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((s) => ({ ...s, [name]: value }));
  }

  function hadleSubmit(e) {
    e.preventDefault();
    const valuesArray = Object.values(userInfo);

    if (!checkArray(valuesArray))
      return toast.error("Please fill in all entries.");

    if (userInfo.confirmPassword !== userInfo.password)
      return toast.error("😒The passwords are the same.");

    mutateSignup({
      email: userInfo.email,
      password: userInfo.password,
      name: userInfo.userName,
    });
  }

  if (loadingSignup) return <LoadingPage />;
  return (
    <div className="mt-10 flex items-center justify-center">
      <FormBoxUser type="Signup">
        <form onSubmit={hadleSubmit}>
          <BoxInpute
            type={"text"}
            value={userInfo.userName}
            onChange={handleChange}
            name={"userName"}
            id={"userNameSignup"}
          >
            User Name
          </BoxInpute>
          <BoxInpute
            type={"email"}
            value={userInfo.email}
            onChange={handleChange}
            name={"email"}
            id={"emailSignup"}
          >
            Email
          </BoxInpute>
          <BoxInpute
            type={"password"}
            value={userInfo.password}
            onChange={handleChange}
            name={"password"}
            id={"passwordSignup"}
          >
            Password
          </BoxInpute>
          <BoxInpute
            type={"password"}
            value={userInfo.confirmPassword}
            onChange={handleChange}
            name={"confirmPassword"}
            id={"confitmPasswordSignup"}
          >
            Confirm Password
          </BoxInpute>
          <div className="mt-7 flex flex-col items-center justify-center">
            <BtnLogin>Signup</BtnLogin>
          </div>
        </form>
      </FormBoxUser>
    </div>
  );
}

export default SignupUser;
