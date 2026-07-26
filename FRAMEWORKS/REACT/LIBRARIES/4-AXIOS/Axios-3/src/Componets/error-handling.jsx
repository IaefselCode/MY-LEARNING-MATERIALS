import React, { useState } from "react";
import axios from "axios";

function ErrorHandling() {
  const [items, setItems] = useState([]);
  const [responseMeta, setResponseMeta] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const handleSuccess = () => {
    setErrorInfo(null);
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((res) => {
        setItems(res.data);
        setResponseMeta(res);
      })
      .catch((err) => {
        // capture any unexpected error
        setErrorInfo(serializeAxiosError(err));
        setResponseMeta(err.response || null);
      });
  };

  const handleFail = () => {
    setErrorInfo(null);
    // intentionally bad endpoint to trigger an error (404)
    axios
      .get("https://jsonplaceholder.typicode.com/invalid_endpoint")
      .then((res) => {
        setItems(Array.isArray(res.data) ? res.data : [res.data]);
        setResponseMeta(res);
      })
      .catch((err) => {
        setItems([]);
        setResponseMeta(err.response || null);
        setErrorInfo(serializeAxiosError(err));
      });
  };

  const serializeAxiosError = (err) => {
    return {
      message: err.message,
      isAxiosError: !!err.isAxiosError,
      code: err.code || null,
      status: err.response?.status || null,
      statusText: err.response?.statusText || null,
      responseData: err.response?.data || null,
      headers: err.response?.headers || null,
      config: err.config || null,
    };
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
          onClick={handleSuccess}
          className="px-4 py-2 mt-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          GET (success)
        </button>
        <button
          onClick={handleFail}
          className="px-4 py-2 mt-3 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none"
        >
          GET (simulate error)
        </button>
      </div>

      <div className="flex flex-wrap gap-5 items-start mt-4 w-full max-w-6xl mx-auto p-3 box-border">
        {/* Left: Response / Error properties */}
        <div className="flex-1 min-w-[260px] max-w-[480px] bg-blue-100 border border-black/10 p-4 rounded-2xl text-black shadow-sm">
          <h2 className="m-0 mb-2 text-black text-xl font-semibold">Response / Error Info</h2>

          {responseMeta ? (
            <>
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
            </>
          ) : (
            <div className="text-black/70">No response yet.</div>
          )}

          {errorInfo && (
            <div className="mt-4">
              <h3 className="text-red-700 font-semibold mb-2">Error Details</h3>
              <div className="mb-2">
                <strong>Message:</strong> <span className="text-black">{errorInfo.message}</span>
              </div>
              <div className="mb-2">
                <strong>Code:</strong> <span className="text-black">{errorInfo.code ?? "-"}</span>
              </div>
              <div className="mb-2">
                <strong>Status:</strong>{" "}
                <span className="text-black">{errorInfo.status ?? "-"}</span>
              </div>
              <div>
                <strong>Response Data:</strong>
                <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-40 overflow-auto">
                  {JSON.stringify(errorInfo.responseData, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Right: Data (items) or message */}
        <div className="flex-[2_1_480px] min-w-[260px] box-border">
          <h2 className="m-0 mb-2 text-black text-xl font-semibold">Data (items)</h2>

          {items.length ? (
            <div className="flex flex-wrap gap-3 items-stretch">{items.map((it) => renderCard(it))}</div>
          ) : errorInfo ? (
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-red-700">
              Request failed — check Error Details panel.
            </div>
          ) : (
            <div className="text-black/70">No items to display.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default ErrorHandling;

//NOTE 
//This is how to handle errors in Axios requests in React
//The component provides buttons to simulate both successful and failed GET requests
//When a request fails, it captures and displays detailed error information including message, code, status, and response data
//The UI is structured to show response metadata and error details side by side with the fetched data items