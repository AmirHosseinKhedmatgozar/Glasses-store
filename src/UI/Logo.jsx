import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="row-start-1 flex items-center justify-center gap-4">
      <div
        onClick={() => {
          navigate("profile");
        }}
        className="h-12 w-12 cursor-pointer overflow-hidden rounded-full border-2 border-gray-400 bg-[var(--color-yellow-primary)]"
      >
        <img
          src="../public/photo/logo/defaultUser.8fe8d848d6ce42e30435.png"
          alt="logo"
        />
      </div>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <p className="monoton-regular cursor-pointer pt-1 text-3xl hover:text-red-500">
          EYESOME
        </p>
      </div>
    </div>
  );
}

export default Logo;
