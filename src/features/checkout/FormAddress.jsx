/* eslint-disable react/prop-types */
import { useForm as useReactHookForm } from "react-hook-form";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import { useAddAddress } from "./useAddAddress";
import { useEditAddress } from "./useEditAddress";
import ButtonCheckout from "../../UI/ButtonCheckout";
import InputeForm from "./InputeForm";

function FormAddress({ setShowForm, defaultValues }) {
  const { user } = useGetCurrentUser();
  const { mutateEditAddress, editAddressLoading } = useEditAddress();
  const { mutateAddAddress, addAddressLoading } = useAddAddress();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useReactHookForm({ defaultValues });

  function handleCancel() {
    reset();
    setShowForm(null);
  }
  function handleDummyValues() {
    reset({
      tittle: "Home",
      mobile: "09913024021",
      house: "42",
      street: "takhti",
      city: "tehran",
      postal_code: "290987465",
    });
  }

  function onSubmit(data) {
    if (defaultValues && defaultValues.id) {
      mutateEditAddress(data, {
        onSuccess: () => {
          setShowForm(null);
          reset();
        },
      });
    } else {
      mutateAddAddress(
        {
          user_id: user?.id,
          postal_code: Number(data.postal_code),
          mobile: Number(data.mobile),
          ...data,
        },
        {
          onSuccess: () => {
            setShowForm(null);
            reset();
          },
        },
      );
    }
  }

  return (
    <form className="rounded-lg bg-gray-100 p-3">
      <div className="grid grid-cols-2 grid-rows-4 gap-4">
        <div className="flex flex-col">
          <InputeForm
            register={register}
            errors={errors}
            htmlFor={"tittleAddress"}
            type={"text"}
            inputName={"tittle"}
          >
            Tittle:
          </InputeForm>
        </div>

        <div className="flex flex-col">
          <InputeForm
            register={register}
            errors={errors}
            htmlFor={"moblieAddress"}
            type={"number"}
            inputName={"mobile"}
          >
            Mobile No.
          </InputeForm>
        </div>

        <div className="col-span-2 flex flex-col">
          <InputeForm
            register={register}
            errors={errors}
            htmlFor={"houseAddress"}
            type={"text"}
            inputName={"house"}
          >
            Flat, House no., Building
          </InputeForm>
        </div>

        <div className="col-span-2 flex flex-col">
          <InputeForm
            register={register}
            errors={errors}
            htmlFor={"streetAddress"}
            type={"text"}
            inputName={"street"}
          >
            Area, Colony, Street
          </InputeForm>
        </div>

        <div className="flex flex-col">
          <InputeForm
            register={register}
            errors={errors}
            htmlFor={"cityAddress"}
            type={"text"}
            inputName={"city"}
          >
            Town/City
          </InputeForm>
        </div>

        <div className="flex flex-col">
          <InputeForm
            register={register}
            errors={errors}
            htmlFor={"pinCodeAddress"}
            type={"number"}
            inputName={"postal_code"}
          >
            Pin Code
          </InputeForm>
        </div>
      </div>

      <div className="mb-3 mt-4 grid gap-3 min-[935px]:flex">
        {!defaultValues && (
          <ButtonCheckout
            type={"button"}
            onClick={handleDummyValues}
            style={"bg-white border-2 border-black "}
            textStyle={"black"}
            disabled={addAddressLoading || editAddressLoading}
          >
            Fill dummy values
          </ButtonCheckout>
        )}
        <ButtonCheckout
          type={"button"}
          onClick={handleCancel}
          disabled={addAddressLoading || editAddressLoading}
        >
          Cancel
        </ButtonCheckout>
        <ButtonCheckout
          type={"submit"}
          onClick={handleSubmit(onSubmit)}
          disabled={addAddressLoading || editAddressLoading}
        >
          Save
        </ButtonCheckout>
      </div>
    </form>
  );
}

export default FormAddress;
