/* eslint-disable react/prop-types */
import ButtonCheckout from "../../UI/ButtonCheckout";
import FormAddress from "./FormAddress";
import OptionalAddresses from "./OptionalAddresses";
import { useForm } from "../../context/FormContext";

function Address({ profileCheckout }) {
  const { showForm, setShowForm, editAddress } = useForm();

  return (
    <div
      className={
        profileCheckout ? "pt-3" : "h-auto rounded-xl bg-white p-5 shadow-2xl"
      }
    >
      {!profileCheckout && <h2 className="mb-3 text-2xl">Address</h2>}
      {!showForm && !editAddress && (
        <ButtonCheckout style={"text-sm"} onClick={() => setShowForm(true)}>
          + Add New Address
        </ButtonCheckout>
      )}
      {showForm && <FormAddress setShowForm={setShowForm} />}
      {<OptionalAddresses />}
    </div>
  );
}

export default Address;
