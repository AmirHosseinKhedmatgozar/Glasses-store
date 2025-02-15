/* eslint-disable react/prop-types */
function InputeForm({ register, errors, children, htmlFor, type, inputName }) {
  // const min =
  //   type === "number"
  //     ? {
  //         minLength: { value: 6, message: "At least 6 numbers are required." },
  //       }
  //     : {};

  function minimum(type) {
    if (type === "number") {
      return {
        min: { value: 6, message: "At least 6 numbers are required." },
      };
    }
    if (type === "text" && inputName !== "house") {
      return {
        minLength: { value: 4, message: "At least 4 charachter are required." },
      };
    }
    if (type === "text" && inputName === "house") {
      return {
        minLength: { value: 2, message: "At least 2 charachter are required." },
      };
    }
  }

  const min = minimum(type);

  const [minKey, minValue] = Object.entries(min)[0] || [];

  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <input
        className="rounded-md border-2 p-1.5 shadow-sm outline-none focus:border-2 focus:border-gray-600"
        id={htmlFor}
        name={htmlFor}
        type={type}
        {...register(inputName, {
          required: `${inputName} is required`,
          ...(minKey && minValue && { [minKey]: minValue }),
        })}
      />
      {errors[inputName] && (
        <p className="text-red-300">{errors[inputName].message}</p>
      )}
    </>
  );
}

export default InputeForm;
