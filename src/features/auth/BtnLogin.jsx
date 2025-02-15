/* eslint-disable react/prop-types */
function BtnLogin({ children, bg, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`mb-3 h-11 w-72 rounded-lg text-xl ${bg === "white" ? "border-2 border-black bg-white text-black hover:bg-black hover:text-white" : "bg-gray-500 text-white hover:bg-gray-400"} `}
    >
      {children}
    </button>
  );
}

export default BtnLogin;
