import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

export default function PrinterWrapper({ children, list }) {
  const linkToPrint = () => {
    return (
      <button className="relative text-white bg-green-400 border m-4 p-2 rounded right-0 hover:bg-red-400 rounded">
        {list ? "Click To PDF" : "Click To Print"}
      </button>
    );
  };
  const componentRef = useRef();
  return (
    <>
      <ReactToPrint
        trigger={linkToPrint}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>{children}</div>
    </>
  );
}
