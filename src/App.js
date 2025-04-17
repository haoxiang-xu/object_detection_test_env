import "./App.css";

import ControlPanel from "./COMPONENTs/control_panel/control_panel";

const App = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "100%",        
      }}
    >
      <ControlPanel />
    </div>
  );
};

export default App;
