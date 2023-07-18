import {
  genreResult,
  publicationYearResult,
} from "../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../redux/hook";
import "./FilterField.css";

export default function FilterField() {
  const dispatch = useAppDispatch();
  const handlePublicationYear = (e: any) => {
    dispatch(publicationYearResult(e.target.value));
  };
  const handleGenre = (e: any) => {
    dispatch(genreResult(e.target.value));
  };
  return (
    <div className="flex justify-center">
      <select
        onChange={handleGenre}
        className="select select-bordered border-2 border-stone-600 select-outline shadow-md select-sm w-auto  text-xl mx-5 h-10"
      >
        <option disabled selected>
          Select genre
        </option>
        <option value="">none</option>
        <option value="Fiction">Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Coming-of-age">Coming-of-age</option>
        <option value="Modernist">Modernist</option>
        <option value="Adventure">Adventure</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Roamntic">Roamntic</option>
      </select>
      <input
        list="browsers"
        name="browser"
        placeholder="Select a year"
        className="border-2  border-stone-600 w-[140px] shadow-md select-sm rounded-lg text-xl h-10"
        onChange={handlePublicationYear}
      />
      <datalist id="browsers" onChange={handlePublicationYear} className="">
        <option disabled selected>
          <p>Select a year</p>
        </option>
        <option value="">none</option>
        {Array.from({ length: 2024 - 1900 }, (_, index) => (
          <option key={index} value={index + 1900}>
            {index + 1900}
          </option>
        ))}
      </datalist>
    </div>
  );
}
