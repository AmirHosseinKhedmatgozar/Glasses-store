/* eslint-disable react/prop-types */

function BoxInpute({ children, type, onChange, value, name, id }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg font-light">
        {children}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        id={id}
        className="mb-1 h-9 w-full rounded-lg border-2 outline-none focus:border-slate-950"
      />
    </div>
  );
}

export default BoxInpute;
