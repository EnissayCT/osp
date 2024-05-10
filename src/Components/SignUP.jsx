import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../firebase"; 
import {  useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";


const SignUP = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [MarketingAccept, setMarketingAccept] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

      console.log("Saved to Firestore");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setIsSignedUp(true);

      console.log("User signed up successfully");
    } catch (error) {
      console.error("Sign-up error:", error.message);
    }
  };

  useEffect(() => {
    if (isSignedUp) {
      dispatch(login({ userFirstName: firstName, userLastName: lastName, userMail: email, password: null, profileImage: photo }));
      navigate("/");
    }
  }, [isSignedUp, firstName, lastName, email, photo]);

  return (
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
              Your Learning Journey Starts Here: Sign up
            </p>

            <form onSubmit={handleSignUp} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

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

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                
                <label htmlFor="MarketingAccept" className="flex gap-4">
                
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    onClick={(e) => setMarketingAccept(e.target.value)}
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about offers, new lessons and upcoming classes.
                  </span>
                  
                </label>
                
              </div>
              
              <button
                  onClick={() => dispatch(login({
                    userFirstName: firstName,
                    userLastName: lastName,
                    userMail: email,
                    password: password,
                  })) 
                }
                  type="submit"
                  className="btn btn-wide border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button onClick={signUpGoogle} className="btn btn-wide border-blue-600 bg-blue-600 text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      sign up with google.
                    </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{' '}
                    <Link to="/login" className="text-gray-700 underline">
                      Log in
                    </Link>
                    .
                  </p>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                  and
                  <a href="#" className="text-gray-700 underline">privacy policy</a>.
                </p>
              </div>


            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default SignUP;
