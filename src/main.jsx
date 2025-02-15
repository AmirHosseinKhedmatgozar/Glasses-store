import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./UI/ErrorFallback.jsx";
import { FormHandleProvider } from "./context/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.replace("/");
      }}
    >
      <FormHandleProvider>
        <App />
      </FormHandleProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
