/* eslint-disable react/prop-types */
function FormBoxUser({ children, type }) {
  return (
    <div className="h-[33rem] w-[33rem] flex-col rounded-md border border-gray-300 bg-slate-50 p-10 shadow-md">
      <p className="monoton-regular cursor-pointer pb-7 pt-1 text-center text-3xl hover:text-red-500">
        EYESOME
      </p>
      <h3 className="mb-5 text-2xl">{type} to your account</h3>
      {children}
    </div>
  );
}

export default FormBoxUser;
