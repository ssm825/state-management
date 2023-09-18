import { isLoginSelector } from "Recoil/TokenAtom";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
