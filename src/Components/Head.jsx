import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

export const Hero = () => { 
  const scrollToId = (id) => {
    const whereTo = document.getElementById(id);
    if (whereTo) {
      whereTo.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const userInfoExists = user !== null;
    const navigate = useNavigate();

  return (
    <div className="relative px-6 pt-8 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="flex sm:mb-0 sm:justify-center">
        <img className='size-70 pl-16 hidden lg:block' src="/Images/Illustrations/success.svg" alt="Illustration" />
      </div>
      <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:py-32">
        <div className="text-center">
          {!userInfoExists ? <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">9rayti</h1> : <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome, {user.userFirstName}</h1>}
          <h2 className='my-7 text-xl'>Empowering Education, Anywhere, Anytime</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Revolutionizing Education through Dynamic Live Classes and Engaging Course Content, Accessible Anytime, Anywhere. Experience Interactive Learning like Never Before.</p>
          {!userInfoExists ? <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/signup" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join Us</Link>
            <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToId('convo-bubble')}>Learn more <span aria-hidden="true">→</span></button>
          </div>
           : <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={() => {
                        localStorage.setItem('planChoice', JSON.stringify({ plan: "Premium Plan" }));
                        navigate('/payment');
                    }}
                >
                    Go Premium
                </button>
                <button
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => scrollToId('pricing-section')}
                >
                    Learn more <span aria-hidden="true">→</span>
                </button>
            </div>}
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </div>
  );
};

  


export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDisplay, setIsMobileDisplay] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const userInfoExists = user !== null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkScreenWidth = () => {
      setIsMobileDisplay(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenWidth);

    // Initial check
    checkScreenWidth();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const logoSrc = "/Images/Logos/logo b nobg.png";

  // Create a ref for the mobile menu
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Function to close menu when clicked outside
    const handleClickOutside = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
          // Check if the clicked element is a link inside the menu
          const isLinkClicked = event.target.closest('a');
          if (!isLinkClicked) {
            setIsMobileMenuOpen(false);
          }
        }
      };
      

    // Add event listener to detect clicks outside of the menu
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-lg shadow-lg' : 'bg-transparent'} ${isMobileMenuOpen ? 'bg-white' : ''}`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <Link to="/">
                <img className='size-10 flex' src={logoSrc} alt="9rayti" />
              </Link>
            </a>

            <div className="md:hidden" ref={mobileMenuRef}>
              {userInfoExists &&
                <div className="dropdown dropdown-end px-2">
                  <div className="avatar w-8" tabIndex={0} role="button">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      {user.profileImage ? <img src={user.profileImage} /> : <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" />}
                    </div>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>{user.userFirstName} {user.userLastName}</div>
                      <div class="font-medium truncate">500 💥</div>
                    </div>
                    <li><Link to="/userprofile" onClick={closeMobileMenu}>My Profile</Link></li>
                    <li><button onClick={handleLogout}>Log out</button></li>
                  </ul>
                </div>
              }
              <button
                className="p-2 text-black rounded-md outline-none"
                onClick={handleMobileMenuToggle}
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-900 hover:text-purple-600">
              <Link to="/" onClick={closeMobileMenu}> Home </Link>
            </li>
            <li className="text-gray-900 hover:text-purple-600">
              <Link to="/ressources" onClick={closeMobileMenu}> Ressources </Link>
            </li>
            <li className="text-gray-900 hover:text-purple-600">
              <Link to='/onlineclasses' onClick={closeMobileMenu}>9isem</Link>
            </li>
            <li className="text-gray-900 hover:text-purple-600">
              <Link to="/aboutus" onClick={closeMobileMenu}>About US </Link>
            </li>
            {isMobileDisplay && !userInfoExists && (
              <>
                <div className='divider'></div>
                <li className="text-gray-900 hover:text-purple-600">
                  <Link to="/login" onClick={closeMobileMenu}> Log In </Link>
                </li>
                <li className="text-gray-900 hover:text-purple-600">
                  <Link to="/signup" onClick={closeMobileMenu}> Sign Up </Link>
                </li>
              </>
            )}
            {isMobileDisplay && userInfoExists && (
              <>
                <div className='divider'></div>
                <li className="text-gray-900 hover:text-purple-600">
                  <button onClick={handleLogout}>Log out</button>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          {!userInfoExists ? (
            <>
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                <Link to="/login"> Log in </Link>
              </a>
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                <Link to="/signup">  Sign up</Link>
              </a>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end">
                <div className="avatar w-12" tabIndex={0} role="button">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user.profileImage ? <img src={user.profileImage} /> : <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" />}
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{user.userFirstName} {user.userLastName}</div>
                    <div class="font-medium truncate">500 💥</div>
                  </div>
                  <li><Link to="/userprofile" onClick={closeMobileMenu}>My Profile</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

  