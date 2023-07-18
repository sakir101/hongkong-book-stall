import Loading from "../components/Loading/Loading";
import WishListCard from "../components/WishList/WishListCard";
import { useGetBooksFromWishListQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";

export default function WishList() {
  const { data, isLoading } = useGetBooksFromWishListQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <div className="bg-blue-500 py-3 lg:py-5 mx-5 lg:mx-96  my-3 lg:my-10 rounded-2xl">
        <h1 className="text-lg lg:text-2xl text-center font-bold  text-white">
          Your Wish List
        </h1>
      </div>
      {isLoading ? (
        <Loading />
      ) : data?.data?.length ? (
        <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-10 mt-[100px] lg:w-3/4 ">
          {data?.data?.length &&
            data?.data?.map((book: IBook) => (
              <WishListCard key={book._id} book={book} />
            ))}
        </div>
      ) : (
        <p className="text-3xl text-red-700 text-center mt-10">No Book Added</p>
      )}
    </>
  );
}
