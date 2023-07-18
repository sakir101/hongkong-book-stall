import BooksData from "../components/AllBookComponent/BooksData";
import FilterField from "../components/AllBookComponent/FilterField";
import SearchField from "../components/AllBookComponent/SearchField";
import { Link } from "react-router-dom";

export default function Books() {
  return (
    <div>
      <div className="hidden lg:flex justify-end">
        <Link className="btn btn-primary my-3 mx-5" to="/addBook">
          Add Book
        </Link>
        <Link className="btn btn-warning my-3 mx-5" to="/wishList">
          Wish List
        </Link>
        <Link className="btn btn-info my-3 mx-5" to="/bookList">
          Book List
        </Link>
      </div>
      <div className="flex justify-center mt-3 lg:hidden">
        <details className="dropdown mb-5">
          <summary className="m-1 btn">Go Page</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>
            <li>
              <Link to="/wishList">Wish List</Link>
            </li>
            <li>
              <Link to="/bookList">Book List</Link>
            </li>
          </ul>
        </details>
      </div>

      <SearchField />

      <FilterField />
      <BooksData />
    </div>
  );
}
