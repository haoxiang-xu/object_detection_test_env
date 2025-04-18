import React from "react";

const OverlayWindow = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 6,
        left: 6,
        right: 6,
        bottom: 32,
        border: "3px solid rgba(255, 255, 255, 0.24)",
        borderRadius: 6,
        overflow: "hidden",
      }}
    ></div>
  );
};

export default OverlayWindow;
