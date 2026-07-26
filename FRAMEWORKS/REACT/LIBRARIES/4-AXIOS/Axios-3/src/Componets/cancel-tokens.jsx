import React, { useState, useRef } from "react";
import axios from "axios";

function CancelTokens() {
  const [items, setItems] = useState([]);
  const [responseMeta, setResponseMeta] = useState(null);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null); // store AbortController

  const handleStart = () => {
    // clear previous state
    setItems([]);
    setResponseMeta(null);
    setError(null);

    // create and store a new AbortController
    const controller = new AbortController();
    controllerRef.current = controller;

    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=8", {
        signal: controller.signal, // modern cancellation
      })
      .then((res) => {
        setResponseMeta(res);
        setItems(Array.isArray(res.data) ? res.data : [res.data]);
      })
      .catch((err) => {
        // detect abort
        if (axios.isCancel && axios.isCancel(err)) {
          // legacy CancelToken detection (not used here) — keep for completeness
          setError({ canceled: true, message: "Request canceled (axios.isCancel)." });
        } else if (err.name === "CanceledError" || err.message === "canceled") {
          // axios throws 'CanceledError' in v1+ when using signal
          setError({ canceled: true, message: "Request canceled (AbortController)." });
        } else {
          setError({ canceled: false, message: err.message || "Request error" });
        }
      })
      .finally(() => {
        controllerRef.current = null;
      });
  };

  const handleCancel = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      // controllerRef cleared in finally, but set immediate feedback:
      setError({ canceled: true, message: "Cancel requested" });
      controllerRef.current = null;
    }
  };

  const renderCard = (item) => (
    <div
      key={item.id ?? JSON.stringify(item)}
      className="bg-blue-300 border border-black/10 p-4 m-2 rounded-2xl text-black shadow-md flex-1 min-w-[220px] max-w-[340px] box-border"
    >
      <h3 className="m-0 text-black text-lg font-medium">{item.title ?? item.name}</h3>
      <p className="m-0 mt-2 text-black text-sm">
        {item.id ? `ID: ${item.id}` : null} {item.userId ? `— User ID: ${item.userId}` : null}
      </p>

      <pre className="bg-blue-50 p-3 mt-3 rounded-lg text-sm text-black whitespace-pre-wrap overflow-auto">
        {JSON.stringify(item, null, 2)}
      </pre>
    </div>
  );

  return (
    <>
      <div className="w-full flex gap-3 justify-center">
        <button
          onClick={handleStart}
          className="px-4 py-2 mt-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          START (GET)
        </button>

        <button
          onClick={handleCancel}
          disabled={!controllerRef.current}
          className={`px-4 py-2 mt-3 rounded-lg ${
            controllerRef.current ? "bg-red-600 hover:bg-red-700" : "bg-red-300 cursor-not-allowed"
          } text-white focus:outline-none`}
        >
          CANCEL
        </button>
      </div>

      {/* show error / canceled notice */}
      {error && (
        <div className="max-w-6xl mx-auto mt-4 p-3">
          <div
            className={`p-3 rounded-lg ${
              error.canceled ? "bg-yellow-100 border border-yellow-300" : "bg-red-100 border border-red-300"
            } text-black`}
          >
            <strong>{error.canceled ? "Canceled:" : "Error:"}</strong> {error.message}
          </div>
        </div>
      )}

      {/* response + data */}
      {responseMeta && (
        <div className="flex flex-wrap gap-5 items-start mt-4 w-full max-w-6xl mx-auto p-3 box-border">
          {/* Left: Response properties */}
          <div className="flex-1 min-w-[260px] max-w-[420px] bg-blue-100 border border-black/10 p-4 rounded-2xl text-black shadow-sm">
            <h2 className="m-0 mb-2 text-black text-xl font-semibold">Response Properties</h2>

            <div className="mb-3">
              <strong>Status:</strong>{" "}
              <span className="text-black">
                {responseMeta.status} {responseMeta.statusText}
              </span>
            </div>

            <div className="mb-3">
              <strong>Headers:</strong>
              <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-40 overflow-auto">
                {JSON.stringify(responseMeta.headers, null, 2)}
              </pre>
            </div>

            <div className="mb-3">
              <strong>Data:</strong>
              <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-48 overflow-auto">
                {JSON.stringify(responseMeta.data, null, 2)}
              </pre>
            </div>

            <div>
              <strong>Config:</strong>
              <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-40 overflow-auto">
                {JSON.stringify(responseMeta.config, null, 2)}
              </pre>
            </div>
          </div>

          {/* Right: Data (items) */}
          <div className="flex-[2_1_480px] min-w-[260px] box-border">
            <h2 className="m-0 mb-2 text-black text-xl font-semibold">Data (items)</h2>
            <div className="flex flex-wrap gap-3 items-stretch">
              {items.map((it) => renderCard(it))}
            </div>
          </div>
        </div>
      )}

      {/* fallback when no response yet but items may exist */}
      {!responseMeta && items.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3 justify-center w-full box-border p-3 max-w-6xl mx-auto">
          {items.map((it) => renderCard(it))}
        </div>
      )}
    </>
  );
}

export default CancelTokens;