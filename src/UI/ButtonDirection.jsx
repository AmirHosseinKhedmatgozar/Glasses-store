/* eslint-disable react/prop-types */

function ButtonDirection({ children, onClick }) {
  return (
    <button
      className="text-3xl font-semibold hover:text-indigo-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonDirection;
