import CheckoutItems from "./CheckoutItems";
import { useState } from "react";
import PlaceOrder from "./PlaceOrder";
import OrderSummeryInfo from "./OrderSummeryInfo";
import { useGetAddresses } from "./useGetAddresses";
import toast from "react-hot-toast";

function OrderSummery() {
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const { Addresses } = useGetAddresses();

  function handlePlaceOrder() {
    if (Addresses?.length >= 1) {
      setShowPlaceOrder(true);
    } else {
      toast("🖐️First add an address.");
    }
  }
  return (
    <div className="flex h-full flex-1 flex-col justify-between rounded-xl bg-white p-5 shadow-2xl">
      <div>
        <h2 className="mb-3 text-2xl">Order Summary</h2>
        <CheckoutItems />
      </div>

      <OrderSummeryInfo onClick={handlePlaceOrder}>
        Place Order
      </OrderSummeryInfo>

      {showPlaceOrder && (
        <PlaceOrder onClose={() => setShowPlaceOrder(false)} />
      )}
    </div>
  );
}

export default OrderSummery;
