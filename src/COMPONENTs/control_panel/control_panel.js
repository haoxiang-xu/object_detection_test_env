import React from "react";

import Icon from "../../BUILTIN_COMPONENTs/icon/icon";

const ControlPanel = () => {
  return (
    <div
      className="control-panel"
      style={{
        position: "absolute",
        top: "-10px",
        left: "-10px",

        width: "calc(100% + 20px)",
        height: "calc(100% + 20px)",
        backgroundColor: "rgba(255, 255, 255, 0.16)",
        WebkitAppRegion: "drag",
      }}
    >
      <Icon
        src="eye"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 20,
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default ControlPanel;
