import Address from "./Address";
import OrderSummery from "./OrderSummery";

function Checkout() {
  return (
    <div className="mt-16 flex w-full flex-col gap-10 sm:flex-row sm:pl-6 sm:pr-6 md:mt-6 lg:pl-20 lg:pr-20">
      <div className="flex flex-1 flex-col">
        <Address />
      </div>
      <div className="flex flex-1">
        <OrderSummery />
      </div>
    </div>
  );
}

export default Checkout;
