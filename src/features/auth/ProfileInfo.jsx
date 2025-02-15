import LoadingPage from "../../UI/LoadingPage";
import { capitalizeFirstAndAfterSpaces } from "../../utils/healpers";
import BtnLogout from "./BtnLogout";
import { useGetCurrentUser } from "./useGetCurrentUser";

function ProfileInfo() {
  const { user, getUserLoading } = useGetCurrentUser();

  if (getUserLoading) return <LoadingPage />;

  return (
    <div className="pl-6 pt-6">
      <div className="pb-5">
        <p className="pb-2">
          <span className="text-lg text-gray-500">Username: </span>
          <span>
            {capitalizeFirstAndAfterSpaces(user?.user_metadata?.display_name)}
          </span>
        </p>
        <p className="border-b-2 pb-6">
          <span className="text-lg text-gray-500">Email: </span>
          <span>{user?.email}</span>
        </p>
      </div>
      <BtnLogout />
    </div>
  );
}

export default ProfileInfo;
