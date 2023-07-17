import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import Loading from "../components/Loading/Loading";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
