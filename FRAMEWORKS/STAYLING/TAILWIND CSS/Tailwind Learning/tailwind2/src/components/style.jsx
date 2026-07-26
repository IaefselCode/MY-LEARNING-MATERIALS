import React from "react";

function Style(props) {
  return (
    <div className="bg-blue-300 rounded-md border-2 border-solid m-2 p-3">
      {props.text}
    </div>
  );
}

export default Style;
