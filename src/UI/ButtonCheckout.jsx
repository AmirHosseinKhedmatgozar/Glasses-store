/* eslint-disable react/prop-types */
function ButtonCheckout({
  children,
  onClick,
  style,
  type,
  textStyle,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${style} rounded-xl bg-gray-800 pb-1 pl-4 pr-4 pt-1 text-lg disabled:cursor-not-allowed ${textStyle ? `text-${textStyle}` : "text-white"} `}
    >
      {children}
    </button>
  );
}

export default ButtonCheckout;
