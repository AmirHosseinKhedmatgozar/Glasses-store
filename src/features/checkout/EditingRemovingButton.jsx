import { useForm } from "../../context/FormContext";
import { useDeleteAddress } from "./useDeleteAddress";

/* eslint-disable react/prop-types */
function EditingRemovingButton({ item }) {
  const { setEditAddress } = useForm();
  const { mutateDeleteAddress, deleteAddressLoading } = useDeleteAddress();

  function handleEdit() {
    setEditAddress(item.postal_code);
  }
  function handleDelete() {
    mutateDeleteAddress(item);
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        disabled={deleteAddressLoading}
        onClick={handleEdit}
        className="font-light text-yellow-500 hover:text-yellow-700 disabled:cursor-not-allowed"
      >
        Edit
      </button>
      <button
        disabled={deleteAddressLoading}
        onClick={handleDelete}
        className="font-light text-red-600 hover:text-red-800 disabled:cursor-not-allowed"
      >
        Remove
      </button>
    </div>
  );
}

export default EditingRemovingButton;
