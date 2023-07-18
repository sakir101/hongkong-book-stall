import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { usePostUserDataMutation } from "../redux/features/book/bookApi";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IResponse } from "../types/globalTypes";
import { useAppDispatch } from "../redux/hook";
import { setLoading } from "../redux/features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const [postUser, { isLoading, isError, isSuccess }] =
    usePostUserDataMutation();
  const dispatch = useAppDispatch();
  const notify = (response: string) => toast(response);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (isLoading) {
    dispatch(setLoading(true));
  }
  useEffect(() => {
    if (isError) {
      reset();
      notify("Sorry! User sign up failed");
    }
    if (isSuccess) {
      reset();
      navigate(from, { replace: true });
    }
  }, [isSuccess, isError, navigate, from]);
  const handleSignUp = (data: any) => {
    const { firstName, middleName, lastName, img, role, email, password } =
      data;

    const newData = {
      data: {
        name: {
          firstName,
          middleName,
          lastName,
        },
        img,
        role,
        email,
        password,
      },
    };

    postUser(newData)
      .then((res: IResponse) => {
        const email = res?.data?.data?.email;
        const img = res?.data?.data?.img;
        const name = res?.data?.data?.name?.firstName;

        if (email && img) {
          sessionStorage.setItem(
            "userData",
            JSON.stringify({ email, name, img })
          );
        }
      })
      .catch(() => {});
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up Form</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              {...register("firstName", {
                required: "First name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Middle Name</span>
            </label>
            <input
              type="text"
              {...register("middleName", {
                required: "Middle name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              {...register("lastName", {
                required: "Last name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="text"
              {...register("img", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Role</span>
            </label>
            <input
              type="text"
              defaultValue="reader"
              readOnly
              {...register("role")}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
        </form>
        <p>
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}
