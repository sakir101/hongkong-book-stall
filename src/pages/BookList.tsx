import BookListCard from "../components/BookList/BookListCard";
import Loading from "../components/Loading/Loading";
import { useGetBooksFromBookListQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";

export default function BookList() {
  const { data, isLoading } = useGetBooksFromBookListQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  return (
    <>
      <div className="bg-blue-500 py-3 lg:py-5 mx-5 lg:mx-96 my-3 lg:my-10 rounded-2xl">
        <h1 className="text-lg lg:text-2xl text-center font-bold  text-white">
          Your Book List
        </h1>
      </div>
      {isLoading ? (
        <Loading />
      ) : data?.data?.length ? (
        <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-10 mt-[100px] lg:w-3/4 ">
          {data?.data?.length &&
            data?.data?.map((book: IBook) => (
              <BookListCard key={book._id} book={book} />
            ))}
        </div>
      ) : (
        <p className="text-3xl text-red-700 text-center mt-10">No Book Added</p>
      )}
    </>
  );
}
