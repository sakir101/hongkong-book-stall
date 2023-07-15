import BooksData from "../components/AllBookComponent/BooksData";
import FilterField from "../components/AllBookComponent/FilterField";
import SearchField from "../components/AllBookComponent/SearchField";

export default function Books() {
  return (
    <div>
      <SearchField />
      <FilterField />
      <BooksData />
    </div>
  );
}
