/* eslint-disable react/prop-types */
function PurchaseInformation({ tittle, value }) {
  return (
    <p className="flex items-center justify-between">
      <span className="text-lg text-gray-700">{tittle}</span>
      <span>
        {tittle === "Discount" && <span className="text-xl">-</span>}
        {typeof value === "number" && "₹"}
        {value}
      </span>
    </p>
  );
}

export default PurchaseInformation;
