import { useUpdateBookListDataMutation } from "../../redux/features/book/bookApi";
import { IBookList } from "../../types/globalTypes";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface IProps {
  book: IBookList;
}

export default function BookListCard({ book }: IProps) {
  const { title, author, genre, publicationDate, img, _id, status } = book;
  const [updateBookData, { isError, isSuccess }] =
    useUpdateBookListDataMutation();
  const notify = (response: string) => toast(response);

  useEffect(() => {
    if (isError) {
      notify("Sorry! Book status can not be updated");
    } else if (isSuccess) {
      notify("Book status updated");
    }
  }, [isSuccess, isError]);

  const statusHandle = (id: any) => {
    updateBookData({ id, data: { status: "Complete Reading" } });
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} className="w-3/4 h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title txt-lg lg:text-2xl">{title}</h2>
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
          {status === "reading" ? (
            <button
              className="btn bg-green-700 text-white p-3 hover:bg-red-800"
              onClick={() => statusHandle(_id)}
            >
              Status: {status}
            </button>
          ) : (
            <button
              className="btn bg-blue-700 text-white p-3 hover:bg-red-800"
              onClick={() => statusHandle(_id)}
            >
              Status: {status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
