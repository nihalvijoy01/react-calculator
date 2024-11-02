import React from "react";

export default function Button({ value, handleClick }) {
  return (
    <>
      <button
        className="p-4 m-4 hover:bg-violet-500 w-16"
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
}
