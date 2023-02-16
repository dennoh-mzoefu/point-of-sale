import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import Sales from "../pages/Sales";

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "stock",
    onAfterPrint: () => alert("Print Success"),
  });

  return (
    <div>
      <div ref={componentRef}>
        <Sales />
      </div>
      <button onClick={handlePrint}>Print this</button>
    </div>
  );
};
export default Print;
