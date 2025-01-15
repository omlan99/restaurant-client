import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    }
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
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered"  />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input name='password' type="captcha" ref={captchaRef}  placeholder="type the captha" className="input input-bordered"  />
                <button className='btn btn-outline btn-xs mt-2' onClick={handleValidateCaptcha}>Validate</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} type="submit"  className="btn btn-primary" value={"Login"}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;