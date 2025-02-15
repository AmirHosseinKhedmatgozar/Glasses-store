import { useState } from "react";
import ButtonInformation from "./ButtonInformation";
import ProfileInfo from "../features/auth/ProfileInfo";
import Address from "../features/checkout/Address";

function Profile() {
  const [activeBtn, setActiveBtn] = useState("Profile");

  return (
    <div className="bg-gray-white mt-10 rounded-md pb-20 pl-10 pr-10 pt-5 shadow-2xl">
      <div className="grid grid-cols-2">
        <ButtonInformation
          onClick={() => {
            setActiveBtn("Profile");
          }}
          activeBtn={activeBtn}
        >
          Profile
        </ButtonInformation>
        <ButtonInformation
          onClick={() => {
            setActiveBtn("Address");
          }}
          activeBtn={activeBtn}
        >
          Address
        </ButtonInformation>
      </div>
      {activeBtn === "Profile" && <ProfileInfo />}
      {activeBtn === "Address" && (
        <div>
          <Address profileCheckout={true} />
        </div>
      )}
    </div>
  );
}

export default Profile;
