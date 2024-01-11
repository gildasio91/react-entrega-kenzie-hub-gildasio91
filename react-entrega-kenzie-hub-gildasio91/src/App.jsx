import "./styles/index.scss";
import { RouterMain } from "./router/RouterMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-loading-io";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

function App() {
  const {loading} = useContext(UserContext);
  const spinnerCfg = { left: "50%", transform: "translateY(150%)" };
  return (
    <>
       {loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
      <ToastContainer />
    </>
  );
}

export default App;
