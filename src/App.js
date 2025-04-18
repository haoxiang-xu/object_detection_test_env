import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import ControlPanel from "./COMPONENTs/control_panel/control_panel";
import OverlayWindow from "./COMPONENTs/overlay_window/overlay_window";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<OverlayWindow />} />
          <Route path="/control" element={<ControlPanel />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
