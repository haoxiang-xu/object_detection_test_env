import React from "react";

const ControlPanel = () => {
  return (
    <div
      className="control-panel"
      style={{
        position: "absolute",
        bottom: "calc(0% + 48px)",
        left: "50%",
        transform: "translate(-50%, -50%)",

        width: "48px",
        height: "48px",

        backgroundColor: "rgb(0, 0, 0)",
        borderRadius: "24px",
        dropShadow: "0 0 10px rgba(0, 0, 0, 0.72)",
        backdropFilter: "blur(10px)",
      }}
    ></div>
  );
};

export default ControlPanel;
