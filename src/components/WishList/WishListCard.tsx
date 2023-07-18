import { useDeleteBookDataFromWishListMutation } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/globalTypes";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface IProps {
  book: IBook;
}

export default function WishListCard({ book }: IProps) {
  const { title, author, genre, publicationDate, img, _id } = book;
  const [deleteBook, { isError, isSuccess }] =
    useDeleteBookDataFromWishListMutation();
  const notify = (response: string) => toast(response);

  useEffect(() => {
    if (isError) {
      notify("Sorry! Book data can not be removed properly");
    }
    if (isSuccess) {
      notify("Book remove from wishlist");
    }
  }, [isSuccess, isError]);

  const handleDeleteBook = (id: any) => {
    const proceed = window.confirm(`Are you sure you want to delete`);
    if (proceed) {
      deleteBook(id)
        .unwrap()
        .then(() => {
          console.log("Book deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting book:", error);
        });
    } else {
      return;
    }
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} className="w-3/4 h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg lg:text-2xl">{title}</h2>
        <h2 className="card-title text-md lg:text-xl">
          <span>Author:</span>
          <span className="text-blue-800">{author}</span>
        </h2>
        <h2 className="card-title text-sm">
          <span>Genre:</span>
          <span className="text-red-800">{genre}</span>
        </h2>
        <h2 className="card-title text-sm">
          <span>Publication Date:</span>
          <span>{publicationDate}</span>
        </h2>

        <div className="card-actions justify-center mt-6">
          <button
            className="btn bg-red-700 text-white p-3 hover:bg-red-800"
            onClick={() => handleDeleteBook(_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
