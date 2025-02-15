/* eslint-disable react/prop-types */
function PriceLine({ children }) {
  return (
    <div className="relative">
      {children}
      <div className="absolute inset-x-0 top-3 h-[2px] bg-black"></div>
    </div>
  );
}

export default PriceLine;
