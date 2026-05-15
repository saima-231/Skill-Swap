import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const SignUp = () => {
    const {createUser,setUser,updateUser,signInWithPopupFunc} = useContext(AuthContext);
      const [error, setError] = useState('');
    const [show,setShow] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

    // Password Validation
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
        // console.log({name,email,photoURL,password})
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            updateUser({displayName:name,photoURL:photoURL})
            .then(()=>{
                 setUser({...createdUser,displayName : name, photoURL:photoURL});
      navigate('/')
    //   console.log(createUser)
            })
            .catch((error)=>{
                setUser(createdUser);
            })
           
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const handleGoogleSignIn =()=>{
        signInWithPopupFunc()
        .then((result)=>{
            const loggedUser = result.user;
                  navigate('/')
                //   console.log(loggedUser.email)

        })
        .catch((error)=>{
            // console.log(error)
        })
    }


    return (
        <div className=' my-8 flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body relative">
                    <fieldset className="fieldset">
                        <h2 className='mt-4 font-bold text-2xl text-center animate__animated animate__bounce'>Sign Up </h2>

                        <label className="label">Name</label>
                        <input type="name"
                         className="input" 
                         placeholder="Enter your name"
                         name='name' />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />

                        <label className="label">Photo-URL</label>
                        <input type="text" className="input" placeholder="Enter photo URL" name='photoURL' />

                        <label className="label">Password</label>

                        <div className='relative'>
                            <input  type={show ? "text" : "password"} className="input " placeholder="Password" name='password' />
                        <span
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-50 p-4"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
                        </div>
                        
                        {error && <p className='text-red-700'>{error}</p>}
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button className="btn btn-neutral mt-4" type="submit">Sign Up</button>
                         <button className="btn btn-neutral mt-4" type="button" onClick={handleGoogleSignIn}><FcGoogle />Login with Google</button>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account? <Link  className="link link-hover" to="/auth/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;