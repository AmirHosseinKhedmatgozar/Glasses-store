import { useGetAddresses } from "./useGetAddresses";
import LoadingPage from "../../UI/LoadingPage";
import OptionalAddress from "./OptionalAddress";
import { useForm } from "../../context/FormContext";
import { useEffect } from "react";

function OptionalAddresses() {
  const { Addresses, loadingAddresses } = useGetAddresses();
  const { setSaveValue, saveValue } = useForm();

  useEffect(() => {
    if (Addresses?.length > 0 && !saveValue) {
      setSaveValue(Addresses[0]);
    }
  }, [Addresses, saveValue, setSaveValue]);

  if (loadingAddresses) return <LoadingPage miniLoading={true} />;

  return (
    <div className="mt-4 flex flex-col gap-2">
      {Addresses.map((item) => (
        <OptionalAddress key={item.id} item={item} />
      ))}
    </div>
  );
}

export default OptionalAddresses;
