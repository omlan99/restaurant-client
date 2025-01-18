import React, { useContext } from "react";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import axios from "axios";
import SocialLogin from "../../Component/SocialLogin";
import Swal from "sweetalert2";
const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(() => {
        updateUser(data.name, data.photoUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your account creation was successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign UP now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Please Enter a Name</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  type="url"
                  placeholder="photoUrl"
                  className="input input-bordered"
                  {...register("photoUrl", { required: true })}
                />
                {errors.email?.type === "photoUrl" && (
                  <p className="text-red-600">Please Enter a Name</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Please Enter a email</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Please Enter a password</p>
                )}
                {errors.password?.type === "min" && (
                  <p className="text-red-600">
                    Please Enter at least 6 character{" "}
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Please Enter at least one uppercase and one lowercase and
                    one special character{" "}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value={"signup"}
                />
              </div>
            </form>
            <p className="text-center py-4">
              <small>
                Already have an account? <Link className="text-blue-500" to={"/login"}>Log In</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
