import {
  useGetBooksQuery,
  useGetFilterBookQuery,
  useGetSearchBookQuery,
} from "../../redux/features/book/bookApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";
import Loading from "../Loading/Loading";
import BookCard from "./BookCard";

export default function BooksData() {
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { result } = useAppSelector((state) => state.search);
  const { data: book } = useGetSearchBookQuery(result);
  const { genre, publicationYear } = useAppSelector((state) => state.filter);

  const { data: genreFilteredData } = useGetFilterBookQuery({
    genre: genre,
  });

  const { data: yearFilteredData } = useGetFilterBookQuery({
    publicationYear: publicationYear,
  });

  const { data: combinedFilteredData } = useGetFilterBookQuery({
    genre: genre,
    publicationYear: publicationYear,
  });

  let books;

  if (result.trim().length !== 0) {
    books = book?.data;
  }
  if (genre.trim().length !== 0 && publicationYear.trim().length === 0) {
    books = genreFilteredData?.data;
  }
  if (publicationYear.trim().length !== 0 && genre.trim().length === 0) {
    books = yearFilteredData?.data;
  }
  if (publicationYear.trim().length !== 0 && genre.trim().length !== 0) {
    books = combinedFilteredData?.data;
  }
  if (
    result.trim().length === 0 &&
    genre.trim().length === 0 &&
    publicationYear.trim().length === 0
  ) {
    books = data?.data;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : books?.length ? (
        <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-10 mt-[100px] lg:w-3/4 ">
          {books?.length &&
            books?.map((book: IBook) => (
              <BookCard key={book._id} book={book} />
            ))}
        </div>
      ) : (
        <p className="text-3xl text-red-700 text-center mt-10">No Book Found</p>
      )}
    </>
  );
}
