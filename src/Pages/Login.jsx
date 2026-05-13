import React, { useState } from 'react';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Login = () => {
  const [error, setError] = useState('');
 
  const [show, setShow] = useState(false)


  

  return (
    <div className=' my-8 flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form  className="card-body">
          <fieldset className="fieldset">
            <h2 className='animate__animated animate__bounce mt-4 font-bold text-2xl text-center'>Login Here</h2>

            <label className="label">Email</label>
            <input type="email"
              className="input"
              placeholder="Email"
              name='email' />

            <label className="label">Password</label>

            <div className='relative'>
              <input type={show ? "text" : "password"} className="input " placeholder="Password" name='password' />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-50 p-4"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <div>
              <Link
              to={"/"}
              className="hover:underline cursor-pointer"
            >
              Forgot password?
            </Link></div>
            {error && <p className='text-red-700'>{error}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            {/* Google */}
            <button type='button' className="btn btn-neutral mt-4"><FcGoogle />Login with Google</button>
            <p className="text-center text-sm text-gray-500">
              Don't have an account? <Link className="link link-hover" to="/auth/signup">Sign up</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;