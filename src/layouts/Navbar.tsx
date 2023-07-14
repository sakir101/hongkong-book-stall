import { Link } from "react-router-dom";

export default function Navbar() {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Books">Books</Link>
      </li>
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
