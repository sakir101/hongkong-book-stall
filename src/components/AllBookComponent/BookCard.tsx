import { useDeleteBookDataMutation } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const { title, author, genre, publicationDate, img, _id } = book;
  const [deleteBook, { isLoading, isError, isSuccess }] =
    useDeleteBookDataMutation();

  const notify = (response: string) => toast(response);

  useEffect(() => {
    if (isError) {
      notify("Sorry! Book data can not be deleted properly");
    }
    if (isSuccess) {
      notify("Book Deleted Successfully");
    }
  }, [isSuccess, isError]);

  const handleDeleteBook = (id: any) => {
    console.log(id);
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
        <h2 className="card-title text-2xl">{title}</h2>
        <h2 className="card-title text-xl">
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
          <Link
            className="btn  bg-blue-700 text-white p-3 hover:bg-blue-800"
            to={`/updateBook/${_id}`}
          >
            Edit
          </Link>
          <button
            className="btn bg-red-700 text-white p-3 hover:bg-red-800"
            onClick={() => handleDeleteBook(_id)}
          >
            Remove
          </button>
          <button className="btn bg-lime-400  p-3 hover:bg-lime-500">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
