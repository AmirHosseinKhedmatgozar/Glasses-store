/* eslint-disable react/prop-types */
function ButtonInformation({ children, onClick, activeBtn }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm pb-2 pl-2 pr-2 pt-2 text-center text-sm min-[468px]:pl-14 min-[468px]:pr-14 min-[468px]:text-xl ${activeBtn === children ? "bg-black text-white" : "bg-gray-300 text-black"}`}
    >
      {children}
    </button>
  );
}

export default ButtonInformation;
