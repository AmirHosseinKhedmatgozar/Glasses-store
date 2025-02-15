/* eslint-disable react/prop-types */

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>404 ERROR</p>
      <p>error:{error.message}</p>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
  );
}

export default ErrorFallback;
