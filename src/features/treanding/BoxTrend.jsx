/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function BoxTrend({ children, background, scale, id }) {
  const navigate = useNavigate();

  function handleClick(item) {
    if (!item) return;
    navigate(`/pruductItem/${item}`);
  }
  return (
    <div
      onClick={() => {
        handleClick(id);
      }}
      className={`h-[156px] rounded-3xl ${background} ${scale} min-w-48`}
    >
      {children}
    </div>
  );
}

export default BoxTrend;
