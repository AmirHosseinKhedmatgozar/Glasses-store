/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { useForm } from "../../context/FormContext";
import { capitalizeFirstAndAfterSpaces } from "../../utils/healpers";
import OrderSummeryInfo from "./OrderSummeryInfo";

function PlaceOrder({ onClose }) {
  const { saveValue: item } = useForm();
  function handleTest() {
    toast.success("Test payment completed successfully.");
  }

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-stretch gap-3 rounded-xl border-2 bg-white p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="text-xl">{item.tittle}</h3>
          <span className="text-sm tracking-wide text-gray-700">
            {capitalizeFirstAndAfterSpaces(item.house)} , {item.street} ,{" "}
            {item.city} <br /> Pin Code: {item.postal_code} <br />
            Mobile: {item.mobile}
          </span>
        </div>
        <OrderSummeryInfo onClick={handleTest}>Confirm Order</OrderSummeryInfo>
      </div>
    </div>
  );
}

export default PlaceOrder;
