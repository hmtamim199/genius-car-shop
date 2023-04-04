import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLoginButton = event => {
    event.preventDefault()
  }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content flex-col lg:flex-row- grid md:grid-cols-2 ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img className='w-1/2' src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <form onSubmit={handleLoginButton} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />

            </div>
          </form>
          <p className='text-center'>New at genius car? <Link className='text-orange-600 text-semibold' to='/singup'>Sing up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;