import React from "react";
import { MutatingDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner">
      <MutatingDots color="#1976d2" />
    </div>
  );
}

export default Spinner;
