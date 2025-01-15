import React, { useContext } from "react";
import { data, Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthProvider";
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
    }
 
  return (
   <>
         <Helmet><title>Bistro Boss | Sign Up</title></Helmet>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign UP now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
              {errors.email?.type === 'required' && <p className='text-red-600'>Please Enter a Name</p>}
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
                {errors.email?.type === 'required' && <p className='text-red-600'>Please Enter a email</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength : 6, pattern :/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/ })}
              />
               {errors.password?.type === 'required' && <p className='text-red-600'>Please Enter a password</p>}
               {errors.password?.type === 'min' && <p className='text-red-600'>Please Enter at least 6 character </p>}
               {errors.password?.type === 'pattern' && <p className='text-red-600'>Please Enter at least one uppercase and one lowercase and one special character </p>}
            
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value={'signup'}/>
            </div>
          </form>
        <p className="mx-auto"><small>Already have an account? <Link to={'/login'}>Log In</Link></small></p>
        </div>
      </div>
    </div></>
  );
};

export default SignUp;
