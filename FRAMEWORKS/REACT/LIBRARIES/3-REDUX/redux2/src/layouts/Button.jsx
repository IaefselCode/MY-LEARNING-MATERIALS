import React from "react";

const Button = ({ backgroundColor, title, onClick }) => {
  return (
    <>
      <button
        className={`${backgroundColor} text-black rounded-3xl px-8 py-2 font-medium  cursor-pointer transition-all m-1`}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
