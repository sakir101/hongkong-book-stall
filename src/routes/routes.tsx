import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AddBook from "../pages/AddBook";
import UpdateBook from "../pages/UpdateBook";
import WishList from "../pages/WishList";
import BookList from "../pages/BookList";
import PrivateRoute from "./PrivateRoute";
import BookDetail from "../components/AllBookComponent/BookDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishList",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookList",
        element: (
          <PrivateRoute>
            <BookList />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookDetail/:id",
        element: <BookDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
