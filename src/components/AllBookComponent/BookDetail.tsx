import { useParams } from "react-router-dom";
import {
  useDeleteBookDataMutation,
  useGetSingleBookQuery,
  useUpdateBookDataMutation,
} from "../../redux/features/book/bookApi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppSelector } from "../../redux/hook";
import { useForm } from "react-hook-form";

export default function BookDetail() {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [deleteBook, { isError, isSuccess }] = useDeleteBookDataMutation();
  const { user } = useAppSelector((state) => state.user);
  const [
    updateBookData,
    { isError: bookUpdateError, isSuccess: bookUpdateSuccess },
  ] = useUpdateBookDataMutation();

  const notify = (response: string) => toast(response);

  useEffect(() => {
    if (bookUpdateError) {
      reset();
      notify("Sorry! comment can not be posted");
    }
    if (bookUpdateSuccess) {
      reset();
      notify("Comment posted Successfully");
    }
  }, [bookUpdateSuccess, bookUpdateError]);

  useEffect(() => {
    if (isError) {
      notify("Sorry! Book status can not be updated");
    } else if (isSuccess) {
      notify("Book status updated");
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

  const onSubmit = (data: any) => {
    console.log(data?.review);
    updateBookData({ id, data: { comments: [data?.review] } });
  };

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-5">
        <div className="my-auto mx-16">
          <h1 className="text-2xl lg:text-4xl font-bold">
            {data?.data?.title}
          </h1>
          <p className="text-xl lg:text-2xl  font-semibold my-5">
            <span className="text-slate-800">Author:</span>{" "}
            <span>{data?.data?.author}</span>
          </p>
          <p className="text-xl lg:text-xl font-semibold my-4">
            <span className="text-slate-800">Genre:</span>{" "}
            <span>{data?.data?.genre}</span>
          </p>
          <p className="text-xl lg:text-xl font-semibold my-4">
            <span className="text-slate-800">Publish Date:</span>{" "}
            <span>{data?.data?.publicationDate}</span>
          </p>
        </div>
        <div>
          <img src={data?.data?.img} alt="Book" className="sm:h-48 lg:h-3/4" />
        </div>
      </div>
      <div className="flex justify-center my-10">
        {user?.email === data?.data?.publisherEmail ? (
          <Link
            className="btn  bg-blue-600 hover:bg-blue-700 text-white"
            to={`/updateBook/${data?.data?._id}`}
            title="Edit"
          >
            Edit Book
          </Link>
        ) : (
          <p></p>
        )}
        {user?.email === data?.data?.publisherEmail ? (
          <button
            className="btn bg-red-600 hover:bg-red-700 mx-5 text-white"
            onClick={() => handleDeleteBook(data?.data?._id)}
            title="Remove"
          >
            Delete Book
          </button>
        ) : (
          <p></p>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center mt-10">
          <input
            type="text"
            placeholder="Add your review"
            className="input input-bordered input-primary w-1/2 border-2 shadow-md"
            {...register("review")}
          />
        </div>

        <div className="flex justify-center mt-4 mb-10">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>

      <div>
        {data?.data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
