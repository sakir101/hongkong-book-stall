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
    pollingInterval: 1000,
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
        .then(() => {})
        .catch(() => {});
    } else {
      return;
    }
  };

  const onSubmit = (data: any) => {
    updateBookData({
      id,
      data: { comments: [data?.review], rating: [data?.rating] },
    });
  };

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-5">
        <div className="mt-5 lg:my-auto mx-16 text-center lg:text-start">
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
        <div className="mx-20 lg-mx-0">
          <img src={data?.data?.img} alt="Book" className="sm:h-48 lg:h-3/4" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:my-10">
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
      {user?.email === null ? (
        <p></p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mt-10">
            <input
              type="text"
              placeholder="Add your review"
              className="input input-bordered input-primary w-3/4 lg:w-1/2 border-2 shadow-md"
              {...register("review", {
                required: true,
              })}
            />
          </div>

          <div className="rating my-5 flex justify-center">
            <span className="px-5 text-xl font-bold">Give Rating:</span>
            <input
              type="radio"
              value="1"
              className="mask mask-star-2 bg-green-500"
              {...register("rating")}
            />
            <input
              type="radio"
              value="2"
              className="mask mask-star-2 bg-green-500"
              {...register("rating")}
            />
            <input
              type="radio"
              value="3"
              defaultChecked
              className="mask mask-star-2 bg-green-500"
              {...register("rating")}
            />
            <input
              type="radio"
              value="4"
              className="mask mask-star-2 bg-green-500"
              {...register("rating")}
            />
            <input
              type="radio"
              value="5"
              className="mask mask-star-2 bg-green-500"
              {...register("rating")}
            />
          </div>
          <div className="flex justify-center mt-4 mb-10">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      )}

      {user?.email === null ? (
        <p className="text-center text-xl text-blue-500 font-bold">
          Login to see comment
        </p>
      ) : (
        <div className="px-20">
          {data?.data?.comments?.map((comment: string, index: number) => (
            <div key={index} className="flex gap-3 items-center mb-5">
              <div className="avatar">
                <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=2000" />
                </div>
              </div>
              <p className="p-5 bg-slate-200 rounded-3xl">{comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
