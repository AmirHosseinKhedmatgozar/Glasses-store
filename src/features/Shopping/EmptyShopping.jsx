import { useNavigate } from "react-router-dom";

function EmptyShopping() {
  const navigate = useNavigate();
  return (
    <div className="mt-14 flex flex-col items-center justify-center">
      <img
        src="/photo/shopping/shoppingImage.png"
        alt="Empty Shopping"
        width={"250px"}
        height={"250px"}
      />
      <span className="text-2xl">Hey, it feels so light!</span>
      <p>There is nothing in your bag. Lets add some items.</p>
      <div className="mt-2 rounded-xl border-2 border-black hover:bg-[--color-yellow-secoundary]">
        <button
          onClick={() => {
            navigate("/pruducts");
          }}
          className="pb-1 pl-2 pr-2 pt-1"
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default EmptyShopping;
