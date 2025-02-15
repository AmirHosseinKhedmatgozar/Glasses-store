/* eslint-disable react/prop-types */

function ButtonPages({ children, onClick, nowPage, page }) {
  return (
    <button
      className={`${nowPage === page ? "text-yellow-500" : ""} lexend-mega`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonPages;
