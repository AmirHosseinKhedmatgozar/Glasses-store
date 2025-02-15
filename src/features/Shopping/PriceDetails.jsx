import { discountPrice } from "../../utils/healpers";

/* eslint-disable react/prop-types */
function PriceDetails({ item, length }) {
  const { glassesName, price } = item;

  return (
    <div className="mb-6 flex items-center justify-between pl-2">
      <span className="text-xl text-gray-400">
        {glassesName}({length})
      </span>
      <span className="text-xl text-gray-800">
        ₹{discountPrice(price) * length}
      </span>
    </div>
  );
}

export default PriceDetails;
