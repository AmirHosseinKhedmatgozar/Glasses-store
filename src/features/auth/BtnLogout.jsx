import { useLogout } from "./useLogout";

function BtnLogout() {
  const { mutateLogout, loadingLogout } = useLogout();
  return (
    <button
      onClick={() => {
        return mutateLogout();
      }}
      className="rounded-xl bg-red-700 pb-1 pl-16 pr-16 pt-1 text-white hover:bg-red-800"
    >
      {loadingLogout ? "..." : "Logout"}
    </button>
  );
}

export default BtnLogout;
