import BooksData from "../components/AllBookComponent/BooksData";
import FilterField from "../components/AllBookComponent/FilterField";
import SearchField from "../components/AllBookComponent/SearchField";
import { Link } from "react-router-dom";

export default function Books() {
  return (
    <div>
      <div className="flex justify-end">
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

      <SearchField />

      <FilterField />
      <BooksData />
    </div>
  );
}
