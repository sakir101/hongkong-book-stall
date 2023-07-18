import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  useGetSingleBookQuery,
  useUpdateBookDataMutation,
} from "../redux/features/book/bookApi";
import Loading from "../components/Loading/Loading";
import { useEffect } from "react";

export default function UpdateBook() {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [updateBookData, { isError, isSuccess }] = useUpdateBookDataMutation();

  const { data, isLoading } = useGetSingleBookQuery(id);
  const notify = (response: string) => toast(response);
  if (isLoading) {
    return <Loading />;
  }

  useEffect(() => {
    if (isError) {
      notify("Sorry! Book data can not be updated properly");
    } else if (isSuccess) {
      notify("Book updated Successfully");
    }
  }, [isSuccess, isError]);

  const onSubmit = (updateData: any) => {
    updateBookData({ id, data: updateData });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full lg:w-[800px] shadow-2xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-3xl text-center font-bold">Book Data</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue={data?.data?.title}
                  {...register("title")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue={data?.data?.author}
                  {...register("author")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  className="input input-bordered"
                  defaultValue={data?.data?.genre}
                  {...register("genre")}
                >
                  <option disabled selected>
                    Select genre
                  </option>
                  <option value="Fiction">Fiction</option>
                  <option value="Romance">Romance</option>
                  <option value="Coming-of-age">Coming-of-age</option>
                  <option value="Modernist">Modernist</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Roamntic">Roamntic</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Book Cover Photo Link"
                  className="input input-bordered"
                  defaultValue={data?.data?.img}
                  {...register("img")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Publication Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Publication Date"
                  className="input input-bordered"
                  defaultValue={data?.data?.publicationDate}
                  {...register("publicationDate")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Book Cover Photo Link"
                  className="input input-bordered"
                  disabled
                  defaultValue={data?.data?.publisherEmail}
                  {...register("publisherEmail")}
                />
              </div>
              <div className="form-control mt-6 justify-center">
                <button className="btn btn-primary mx-5">Update Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
