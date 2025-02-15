/* eslint-disable react/prop-types */
import { Commet, ThreeDot } from "react-loading-indicators";

function LoadingPage({ miniLoading }) {
  if (miniLoading)
    return (
      <div className="my-20 flex items-center justify-center">
        <ThreeDot variant="bob" color="#fbd419" size="medium" />
      </div>
    );

  return (
    <div className="my-20 flex items-center justify-center">
      <Commet color="#fbd419" size="medium" text="" textColor="" />
    </div>
  );
}

export default LoadingPage;
