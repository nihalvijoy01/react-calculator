import React from "react";
import { useState } from "react";

export default function TextArea({ value }) {
  return (
    <>
      <output type="text" className=" w-full h-16 bg-green-100 ">
        {value}
      </output>
    </>
  );
}
