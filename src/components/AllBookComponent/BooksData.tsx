import {
  useGetBooksQuery,
  useGetSearchBookQuery,
} from "../../redux/features/book/bookApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";
import BookCard from "./BookCard";
import { useEffect } from "react";

export default function BooksData() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const { result } = useAppSelector((state) => state.search);
  const { data: book } = useGetSearchBookQuery(result);
  let books;
  if (result.trim().length !== 0) {
    books = book?.data;
  } else {
    books = data?.data;
  }
  return (
    <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-10 mt-[100px] w-3/4 ">
      {books?.length &&
        books?.map((book: IBook) => <BookCard key={book._id} book={book} />)}
    </div>
  );
}
