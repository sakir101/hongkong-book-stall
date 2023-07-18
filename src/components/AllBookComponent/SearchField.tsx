import {
  placeHolder,
  placeHolderToggle,
  searchResult,
} from "../../redux/features/filter/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

export default function SearchField() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.search);

  return (
    <div className="w-3/4 lg:w-1/2 mt-12 mb-5 lg:mb-5 z-49 relative mx-auto">
      <input
        type="text"
        placeholder="Search By Name"
        onFocus={() => dispatch(placeHolderToggle())}
        onBlur={() => dispatch(placeHolder())}
        className={`in input input-bordered border-2 border-stone-600 w-full  placeholder:p-[-1px] input-outline shadow-md ${
          status ? "placeholder:block" : "placeholder:invisible"
        } `}
        onChange={(e) => {
          dispatch(searchResult(e.target.value));
        }}
      />
    </div>
  );
}
