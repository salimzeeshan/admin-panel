import { Navigate } from "react-router-dom";
import store from "../Redux/store";

const PrivateRoute = ({ children }) => {
  let authState = store.getState().authReducer;

  return !authState ? <Navigate to={"/login"} /> : <>{children}</>;
};

export default PrivateRoute;
