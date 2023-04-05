import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Singup = () => {
  const { createUser } = useContext(AuthContext)

  const handleLoginButton = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset()
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.error(error))
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
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />

            </div>
          </form>
          <p className='text-center'>Allready have an account?
            <Link className='text-orange-600 text-semibold' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Singup;