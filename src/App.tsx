import MainLayout from "./layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "./redux/hook";
import {
  setLoading,
  setUser,
  setUserImage,
  setUserName,
} from "./redux/features/user/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const storedUserData = sessionStorage.getItem("userData");
  let userData;
  if (storedUserData) {
    userData = JSON.parse(storedUserData);
    // Use the userData object as needed
    console.log(userData.email);
    console.log(userData.name);
    dispatch(setLoading(false));
    dispatch(setUser(userData.email));
    dispatch(setUserName(userData.name));
    dispatch(setUserImage(userData.img));
  }
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
