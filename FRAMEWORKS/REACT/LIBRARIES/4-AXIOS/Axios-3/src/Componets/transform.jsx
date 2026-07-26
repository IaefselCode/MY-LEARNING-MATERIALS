import React, { useState } from "react";
import axios from "axios";

function Transform() {
  const [items, setItems] = useState([]);
  const [responseMeta, setResponseMeta] = useState(null);
  const [originalRequest, setOriginalRequest] = useState(null);
  const [transformedRequest, setTransformedRequest] = useState(null);

  const handleClick = () => {
    const body = { title: "hello world", body: "transforms demo", userId: 42 };
    setOriginalRequest(body);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", body, {
        headers: { "Content-Type": "application/json" },

        // transformRequest: modify outgoing payload (capture transformed version in state)
        transformRequest: [
          (data, headers) => {
            const parsed = typeof data === "string" ? JSON.parse(data) : data;
            const modified = {
              ...parsed,
              title: parsed.title.toUpperCase(),
              sentAt: new Date().toISOString(),
            };
            setTransformedRequest(modified);
            return JSON.stringify(modified);
          },
        ],

        // transformResponse: modify incoming data (runs after default transforms if concatenated)
        transformResponse: axios.defaults.transformResponse.concat((data) => {
          const parsed = typeof data === "string" ? JSON.parse(data) : data;
          const modified = {
            ...parsed,
            title: parsed.title ? `${parsed.title} (resp transformed)` : parsed.title,
            transformedAt: new Date().toISOString(),
          };
          return modified;
        }),
      })
      .then((response) => {
        setResponseMeta(response);
        setItems(Array.isArray(response.data) ? response.data : [response.data]);
        console.log("response:", response);
      })
      .catch((err) => {
        console.error("transform request error:", err);
      });
  };

  const renderCard = (item) => (
    <div
      key={item.id ?? JSON.stringify(item)}
      className="bg-blue-300 border border-black/10 p-4 m-2 rounded-2xl text-black shadow-md flex-1 min-w-[220px] max-w-[340px] box-border"
    >
      <h3 className="m-0 text-black text-lg font-medium">{item.title}</h3>
      <p className="m-0 mt-2 text-black text-sm">
        ID: {item.id ?? "-"} {item.userId ? `— User ID: ${item.userId}` : null}
      </p>

      <pre className="bg-blue-50 p-3 mt-3 rounded-lg text-sm text-black whitespace-pre-wrap overflow-auto">
        {JSON.stringify(item, null, 2)}
      </pre>
    </div>
  );

  return (
    <>
      <div className="w-full flex justify-center">
        <button
          onClick={handleClick}
          className="px-4 py-2 mt-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          TRANSFORM
        </button>
      </div>

      {responseMeta && (
        <div className="flex flex-wrap gap-5 items-start mt-4 w-full max-w-6xl mx-auto p-3 box-border">
          {/* Left: Response + request transform info */}
          <div className="flex-1 min-w-[260px] max-w-[480px] bg-blue-100 border border-black/10 p-4 rounded-2xl text-black shadow-sm">
            <h2 className="m-0 mb-2 text-black text-xl font-semibold">Transform Info</h2>

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
              <strong>Original Request:</strong>
              <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-36 overflow-auto">
                {JSON.stringify(originalRequest, null, 2)}
              </pre>
            </div>

            <div className="mb-3">
              <strong>Transformed Request (sent):</strong>
              <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-36 overflow-auto">
                {JSON.stringify(transformedRequest, null, 2)}
              </pre>
            </div>

            <div>
              <strong>Response (transformed):</strong>
              <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-48 overflow-auto">
                {JSON.stringify(responseMeta.data, null, 2)}
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
    </>
  );
}

export default Transform;