import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { data, Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let form =location.state?.form?.pathname || '/'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInUser(data.email, data.password)
        .then(result => {
           console.log(result.user)
        })
        navigate(from, {replace : true})
    };

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        console.log(user_captcha_value)
        if(validateCaptcha(user_captcha_value)){
                setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
        
    return (
        <>
            <Helmet><title>Bistro Boss | Login</title></Helmet>
                <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-1/2 shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email", { required: true })} name='email' type="email" placeholder="email" className="input input-bordered"  />
                {errors.email?.type === 'required' && <p className='text-red-600'>Please Enter a email</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true, minLength: 6,  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/  })} name='password' type="password" placeholder="password" className="input input-bordered"  />
                {errors.password?.type === 'required' && <p className='text-red-600'>Please Enter a password</p>}
                {errors.password?.type === 'min' && <p className='text-red-600'>Please Enter at least 6 character </p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>Please Enter at least one uppercase and one lowercase and one special character </p>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input  type="captcha" ref={captchaRef}  placeholder="type the captha" className="input input-bordered"  />
                <button className='btn btn-outline btn-xs mt-2' onClick={handleValidateCaptcha}>Validate</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} type="submit"  className="btn btn-primary" value={"Login"}/>
              </div>
            </form>
          <p><small>New here? <Link to={'/signup'}>Create an Account</Link></small></p>
          </div>
        </div>
      </div>
        </>
    );
};

export default Login;