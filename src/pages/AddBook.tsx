import { useForm } from "react-hook-form";
import { usePostBookDataMutation } from "../redux/features/book/bookApi";
import toast from "react-hot-toast";

export default function AddBook() {
  const { register, handleSubmit, reset } = useForm();

  const [postBook, { isError, isSuccess }] = usePostBookDataMutation();

  const onSubmit = (data: any) => {
    postBook({ data })
      .then(() => {
        if (isError) {
          reset();
          notify("Sorry! Book data can not be stored properly");
        }
        if (isSuccess) {
          reset();
          notify("Book Stored Successfully");
        }
      })
      .catch((error: string) => {
        console.error("Error posting data:", error);
      });
  };
  const notify = (response: string) => toast(response);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-[800px] shadow-2xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-3xl text-center font-bold">Book Data</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Harry Potter"
                  className="input input-bordered"
                  {...register("title", {
                    required: "Title is required",
                  })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author</span>
                </label>
                <input
                  type="text"
                  placeholder="J.K Rowling"
                  className="input input-bordered"
                  {...register("author", {
                    required: "Author is required",
                  })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  className="input input-bordered"
                  {...register("genre", {
                    required: "Genre is required",
                  })}
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
                  {...register("img", {
                    required: "Image is required",
                  })}
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
                  {...register("publicationDate", {
                    required: "Publication Date is required",
                  })}
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
                  {...register("publisherEmail", {
                    required: "Email is required",
                  })}
                />
              </div>
              <div className="form-control mt-6 flex-row justify-center">
                <button className="btn btn-primary mx-5" type="submit">
                  Add Book
                </button>
                <button className="btn bg-red-700 text-white" type="reset">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
