import "./styles/index.scss";
import { RouterMain } from "./router/RouterMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RouterMain />
      <ToastContainer />
    </>
  );
}

export default App;
