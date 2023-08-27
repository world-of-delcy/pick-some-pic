import React from "react";

function ErrorToast({ error, id }) {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id={id}
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto text-danger">Error</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss={id}
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body text-black">
          <b>{error}</b>
        </div>
      </div>
    </div>
  );
}

export default ErrorToast;
