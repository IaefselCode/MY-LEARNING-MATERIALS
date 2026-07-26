import React, { useState } from "react";
import axios from "axios";

function SimultaneousRequest() {
  const [responses, setResponses] = useState(null);

  const handleClick = () => {
    // fetch two endpoints at the same time
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=4"),
        axios.get("https://jsonplaceholder.typicode.com/users?_limit=4"),
      ])
      .then(
        axios.spread((todosRes, usersRes) => {
          setResponses([todosRes, usersRes]);
          console.log("todos:", todosRes.data);
          console.log("users:", usersRes.data);
        })
      )
      .catch((err) => {
        console.error("Simultaneous request error:", err);
      });
  };

  const renderCard = (item) => (
    <div
      key={item.id ?? JSON.stringify(item)}
      className="bg-blue-300 border border-black/10 p-4 m-2 rounded-2xl text-black shadow-md flex-1 min-w-[220px] max-w-[340px] box-border"
    >
      <h3 className="m-0 text-black text-lg font-medium">
        {item.name ?? item.title ?? "Item"}
      </h3>
      <p className="m-0 mt-2 text-black text-sm">
        {item.id ? `ID: ${item.id}` : null}{" "}
        {item.username ? `— Username: ${item.username}` : null}
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
          SIMULTANEOUS
        </button>
      </div>

      {responses && (
        <div className="flex flex-wrap gap-5 items-start mt-4 w-full max-w-6xl mx-auto p-3 box-border">
          {/* Left: Response properties (list both responses) */}
          <div className="flex-1 min-w-[260px] max-w-[420px] bg-blue-100 border border-black/10 p-4 rounded-2xl text-black shadow-sm">
            <h2 className="m-0 mb-2 text-black text-xl font-semibold">
              Response Properties
            </h2>

            {responses.map((res, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-black font-medium mb-1">Response {idx + 1}</h3>

                <div className="mb-2">
                  <strong>Status:</strong>{" "}
                  <span className="text-black">
                    {res.status} {res.statusText}
                  </span>
                </div>

                <div className="mb-2">
                  <strong>Headers:</strong>
                  <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-36 overflow-auto">
                    {JSON.stringify(res.headers, null, 2)}
                  </pre>
                </div>

                <div className="mb-2">
                  <strong>Data:</strong>
                  <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-40 overflow-auto">
                    {JSON.stringify(res.data, null, 2)}
                  </pre>
                </div>

                <div>
                  <strong>Config:</strong>
                  <pre className="bg-blue-50 p-3 mt-2 rounded-lg text-sm text-black max-h-36 overflow-auto">
                    {JSON.stringify(res.config, null, 2)}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Combined data display (render each response data set) */}
          <div className="flex-[2_1_480px] min-w-[260px] box-border">
            <h2 className="m-0 mb-2 text-black text-xl font-semibold">Responses Data</h2>

            <div className="flex flex-col gap-4">
              {responses.map((res, idx) => (
                <div key={idx}>
                  <h4 className="m-0 mb-2 text-black font-medium">
                    Dataset {idx + 1} ({Array.isArray(res.data) ? res.data.length : "1"})
                  </h4>

                  <div className="flex flex-wrap gap-3 items-stretch">
                    {Array.isArray(res.data)
                      ? res.data.map((item) => renderCard(item))
                      : renderCard(res.data)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SimultaneousRequest;
//In SIMULTANEOUS REQUEST, we are fetching two endpoints at the same time using axios.all() and axios.spread().