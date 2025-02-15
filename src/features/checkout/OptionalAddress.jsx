/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { capitalizeFirstAndAfterSpaces } from "../../utils/healpers";
import { useForm } from "../../context/FormContext";
import EditingRemovingButton from "./EditingRemovingButton";
import FormAddress from "./FormAddress";

function OptionalAddress({ item }) {
  const { editAddress, setEditAddress, setSaveValue, saveValue } = useForm();

  const urlPatch = useLocation().pathname.substring(1);

  function handleSaveValue() {
    setSaveValue(item);
  }

  if (editAddress === item.postal_code)
    return <FormAddress setShowForm={setEditAddress} defaultValues={item} />;
  return (
    <div className="flex items-center justify-start gap-8 rounded-lg bg-gray-100 p-3 shadow-sm">
      <input
        type="radio"
        id={item.postal_code}
        name="address"
        value={item.postal_code}
        checked={saveValue?.postal_code === item.postal_code}
        onChange={handleSaveValue}
      />
      <label
        htmlFor={item.postal_code}
        className="flex flex-col place-items-start"
      >
        <h3 className="text-xl">{item.tittle}</h3>
        <span className="text-sm text-gray-700">
          {capitalizeFirstAndAfterSpaces(item.house)} , {item.street} ,{" "}
          {item.city} <br /> Pin Code: {item.postal_code} <br />
          Mobile: {item.mobile}
        </span>
        {urlPatch !== "checkout" && (
          <EditingRemovingButton item={item} setEditAddress={setEditAddress} />
        )}
      </label>
    </div>
  );
}

export default OptionalAddress;
