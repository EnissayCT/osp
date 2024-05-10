import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; 
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import {BadPopUp, GoodPopUp} from "./PopUp";

const LogIn = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const signUpGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;
      setFirstName(user.displayName.split(' ')[0]);
      setLastName(user.displayName.split(' ')[1]);
      setEmail(user.email);
      setPhoto(user.photoURL);
      setIsSignedUp(true);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000); 
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      setErrorMessage(error.message); 
      setTimeout(() => setErrorMessage(null), 5000); 
    }
  };
  
  useEffect(() => {
    if (isSignedUp) {
      dispatch(login({ userFirstName: firstName, userLastName: lastName, userMail: email, password: null, profileImage: photo }));
      navigate("/");
    }
  }, [isSignedUp, dispatch, firstName, lastName, email, photo, navigate]);

  const Authentificate = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in successfully:", user);
        dispatch(login({userMail: email, password: null}));
        navigate('/');
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000); 
      })
      .catch((error) => {
        console.error("Sign-in error:", error.message);
        setErrorMessage(error.message); 
        setTimeout(() => setErrorMessage(null), 5000); 
      });
  };

  return (
    <>
    {success && <GoodPopUp />}
    {errorMessage && <BadPopUp message={errorMessage} />}
    <section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="/Images/Illustrations/Learning.svg"
        className="absolute inset-0 mx-16 my-16 max-w-90% max-h-90% hidden lg:block"
      />
    </aside>

    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="#">
          <span className="sr-only">Home</span>
        </a>

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to 9rayti
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Your Learning Journey Starts Here: Log in
        </p>

        <form onSubmit={Authentificate} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <button
              onClick={() => dispatch(login({
                    userMail: email,
                    password: password,
              }))}
              type="submit"
              className="btn btn-wide border-blue-600 bg-blue-600 text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Log in
            </button>
          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about offers, new lessons and upcoming classes.
              </span>
            </label>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="btn btn-wide border-blue-600 bg-blue-600 text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500" onClick={signUpGoogle}>Log in with Google</button>


            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Don't have an account?{' '}
              <Link to="/signup" className="text-gray-700 underline">
                Sign Up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
</>

  );
}

export default LogIn;
