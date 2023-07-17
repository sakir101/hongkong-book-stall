import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    sessionStorage.clear();
    location.reload();
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Books">Books</Link>
      </li>

      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn m-1 bg-transparent border-transparent hover:bg-transparent hover:border-transparent"
        >
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.img
                    ? user.img
                    : `https://www.seekpng.com/png/small/46-463314_v-th-h-user-profile-icon.png`
                }
              />
            </div>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 text-black"
        >
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            {user?.email ? (
              <button onClick={() => handleLogout()}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <p className="text-base font-bold mt-3">
        {user.firstName ? <span>{user.firstName}</span> : <span></span>}
      </p>
    </>
  );

  return (
    <>
      <div>
        <div className="navbar bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl text-white"
              >
                {menuItems}
              </ul>
            </div>
            <a
              href="/"
              className="btn btn-ghost normal-case text-xl text-white"
            >
              Hongkong Book Stall
            </a>
          </div>
          <div className="navbar-end hidden lg:flex text-white">
            <ul className="menu menu-horizontal p-0 text-xl">{menuItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
