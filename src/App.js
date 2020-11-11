import "./App.css";
import LayoutHoc from "./components/LayoutHoc";
import { Route, Link } from "react-router-dom";
import Routing from './routes'

function App() {
  return (
    <div className="App">
      <LayoutHoc
        contentTitle={"Users"}
      >
        <Routing />
      </LayoutHoc>
    </div>
  );
}

export default App;
