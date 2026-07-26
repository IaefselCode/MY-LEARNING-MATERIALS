import React, { useState } from "react";
import axios from "axios";

function Get() {
  const [todos, setTodos] = useState([]);
  const [responseMeta, setResponseMeta] = useState(null);

  const handleClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        setTodos(response.data);
        setResponseMeta(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const renderUsers = (users) =>
    users.map((item) => (
      <div
        key={item.id}
        className="bg-blue-300 border border-black/10 p-4 m-2 rounded-2xl text-black shadow-md flex-1 min-w-[220px] max-w-[340px] box-border"
      >
        <h3 className="m-0 text-black text-lg font-medium">{item.title}</h3>
        <p className="m-0 mt-2 text-black text-sm">
          ID: {item.id} — Completed: {item.completed ? "Yes" : "No"}
        </p>

        <pre className="bg-blue-50 p-3 mt-3 rounded-lg text-sm text-black whitespace-pre-wrap overflow-auto">
          {JSON.stringify(item, null, 2)}
        </pre>
      </div>
    ));

  return (
    <>
      <div className="w-full flex justify-center">
        <button
          onClick={handleClick}
          className="px-4 py-2 mt-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          GET
        </button>
      </div>

      {responseMeta && (
        <div className="flex flex-wrap gap-5 items-start mt-4 w-full max-w-6xl mx-auto p-3 box-border">
          {/* Left: Response properties */}
          <div className="flex-1 min-w-[260px] max-w-[420px] bg-blue-100 border border-black/10 p-4 rounded-2xl text-black shadow-sm">
            <h2 className="m-0 mb-2 text-black text-xl font-semibold">
              Response Properties
            </h2>

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

          {/* Right: Users (data) */}
          <div className="flex-[2_1_480px] min-w-[260px] box-border">
            <h2 className="m-0 mb-2 text-black text-xl font-semibold">Users (data)</h2>
            <div className="flex flex-wrap gap-3 items-stretch">
              {responseMeta && responseMeta.data ? renderUsers(responseMeta.data) : renderUsers(todos)}
            </div>
          </div>
        </div>
      )}

      {/* Fallback: if no responseMeta yet, show fetched todos */}
      {!responseMeta && (
        <div className="mt-4 flex flex-wrap gap-3 justify-center w-full box-border p-3 max-w-6xl mx-auto">
          {renderUsers(todos)}
        </div>
      )}
    </>
  );
}

export default Get;
