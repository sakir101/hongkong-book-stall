import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useLoginUserDataMutation } from "../redux/features/book/bookApi";
import { useEffect } from "react";
import { IResponse } from "../types/globalTypes";
import { useLocation, useNavigate } from "react-router-dom";

export default function login() {
  const { register, handleSubmit, reset } = useForm();
  const [loginUser, { isError, isSuccess }] = useLoginUserDataMutation();
  const notify = (response: string) => toast(response);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (isError) {
      reset();
      notify("Login Failed");
    }
    if (isSuccess) {
      reset();
      navigate(from, { replace: true });
    }
  }, [isSuccess, isError, navigate, from]);

  const handleLogin = (data: any) => {
    console.log(data);
    loginUser({ data })
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
      .catch((error: string) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
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
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <input
            className="btn btn-accent w-full my-4"
            value="Login"
            type="submit"
          />
        </form>
        <Toaster />
      </div>
    </div>
  );
}
