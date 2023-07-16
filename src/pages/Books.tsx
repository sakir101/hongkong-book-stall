import BooksData from "../components/AllBookComponent/BooksData";
import FilterField from "../components/AllBookComponent/FilterField";
import SearchField from "../components/AllBookComponent/SearchField";
import { Link } from "react-router-dom";

export default function Books() {
  return (
    <div>
      <div className="flex ">
        <SearchField />
        <Link className="btn btn-primary my-10 mx-10" to="/addBook">
          Add Book
        </Link>
      </div>

      <FilterField />
      <BooksData />
    </div>
  );
}
