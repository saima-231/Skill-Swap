import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Login = () => {
  const {
    signIn,
    signInWithPopupFunc,
    setLoading,
    loading
  }
    = useContext(AuthContext);

  const emailRef = useRef(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        // setUser(loggedInUser);
        navigate(`${location.state ? location.state : "/"}`)
        // console.log(loggedInUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
  }


  const handleGoogleSignIn = () => {
    signInWithPopupFunc()
      .then((result) => {
        const loggedUser = result.user;
        // setUser(loggedUser)
        navigate(`${location.state ? location.state : "/"}`)
        // console.log(loggedUser)
      })
      .catch(() => {

      })
  }

  

  return (
    <div className=' my-8 flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <h2 className='animate__animated animate__bounce mt-4 font-bold text-2xl text-center'>Login Here</h2>

            <label className="label">Email</label>
            <input type="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
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
              to={"/forget-password"}
              state={{ email: emailRef.current?.value }}
              className="hover:underline cursor-pointer"
            >
              Forgot password?
            </Link></div>
            {error && <p className='text-red-700'>{error}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            {/* Google */}
            <button type='button' className="btn btn-neutral mt-4" onClick={handleGoogleSignIn}><FcGoogle />Login with Google</button>
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