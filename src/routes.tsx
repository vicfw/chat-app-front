import { createBrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SetAvatar from "./pages/SetAvatar/SetAvatar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/avatar",
    element: <SetAvatar />,
  },
]);
export default router;
