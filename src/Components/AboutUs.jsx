import React from "react";

const AboutUS = () => {
    return (
      <>
          <section className="bg-white text-center pt-12">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                    <div className="flex flex-col space-y-4 space-y-reverse">
                    <h1 className="order-last text-lg text-gray-700">Some of the services that we provide to you.</h1>
                    <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">Our Services</h2>
                    </div>
                    <p className="mx-auto mt-6 max-w-xl text-pretty text-base/relaxed text-gray-700">These services are provided to enhance your educational career significantly. We analyzed students' needs to develop them.</p>
          </div>
          </section>
          <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-4">
              <div className="divider"></div> 
              <div className="w-full">
                  <div className="flex flex-col w-full mb-10 sm:flex-row">
                      <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                          <div className="relative h-full ml-0 mr-0 sm:mr-10">
                              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                  <div className="flex items-center -mt-1">
                                    <span><svg classNameName="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"></path></svg></span>
                                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Extensive Content Library</h3>
                                  </div>
                                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                  <p className="mb-2 text-gray-600">Access a vast collection of resources tailored to various age groups and subjects.
                                   Master mathematical concepts, delve into the wonders of physics, explore the exciting world of data science,
                                    or fortify your cybersecurity knowledge – and much more!</p>
                              </div>
                          </div>
                      </div>
                      <div className="w-full sm:w-1/2">
                          <div className="relative h-full ml-0 md:mr-10">
                              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-pink-500 rounded-lg"></span>
                              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                  <div className="flex items-center -mt-1">
                                  <span> <svg classNameName="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM15 6H3V18H15V6ZM7.4 8.82867C7.47607 8.82867 7.55057 8.85036 7.61475 8.8912L11.9697 11.6625C12.1561 11.7811 12.211 12.0284 12.0924 12.2148C12.061 12.2641 12.0191 12.306 11.9697 12.3375L7.61475 15.1088C7.42837 15.2274 7.18114 15.1725 7.06254 14.9861C7.02169 14.9219 7 14.8474 7 14.7713V9.22867C7 9.00776 7.17909 8.82867 7.4 8.82867ZM21 8.84131L17 11.641V12.359L21 15.1587V8.84131Z"></path>
                                               </svg> </span>
                                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800"> Live Video Conferences</h3>
                                  </div>
                                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                  <p className="mb-2 text-gray-600">Participate in interactive live video conferences with qualified teachers.
                                   Gain clarity on challenging topics, ask questions in real-time, and benefit from engaging discussions.
                                    Available for both premium and starter plan users.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="flex flex-col w-full mb-5 sm:flex-row">
                      <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                          <div className="relative h-full ml-0 mr-0 sm:mr-10">
                              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                              <div className="relative h-full p-5 bg-white border-2 border-cyan-300 rounded-lg">
                                  <div className="flex items-center -mt-1">
                                      <span><svg classNameName="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 15V8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5V15.5C13 16.8807 14.1193 18 15.5 18C16.8807 18 18 16.8807 18 15.5V8.82929C16.8348 8.41746 16 7.30622 16 6C16 4.34315 17.3431 3 19 3C20.6569 3 22 4.34315 22 6C22 7.30622 21.1652 8.41746 20 8.82929V15.5C20 17.9853 17.9853 20 15.5 20C13.0147 20 11 17.9853 11 15.5V8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5V15H9L5 20L1 15H4ZM19 7C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7Z"></path></svg></span>
                                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Personalized Learning Paths</h3>
                                  </div>
                                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                  <p className="mb-2 text-gray-600">Chart your educational journey with personalized learning paths.
                                   Our platform intelligently recommends resources and activities based on your individual needs and goals,
                                   maximizing your learning efficiency. Available for both premium and starter plan users.</p>
                              </div>
                          </div>
                      </div>
                      <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                          <div className="relative h-full ml-0 mr-0 sm:mr-10">
                              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-400 rounded-lg"></span>
                              <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                  <div className="flex items-center -mt-1">
                                      <span><svg classNameName="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8611 2.39057C12.8495 1.73163 14.1336 1.71797 15.1358 2.35573L19.291 4.99994H20.9998C21.5521 4.99994 21.9998 5.44766 21.9998 5.99994V14.9999C21.9998 15.5522 21.5521 15.9999 20.9998 15.9999H19.4801C19.5396 16.9472 19.0933 17.9102 18.1955 18.4489L13.1021 21.505C12.4591 21.8907 11.6609 21.8817 11.0314 21.4974C10.3311 22.1167 9.2531 22.1849 8.47104 21.5704L3.33028 17.5312C2.56387 16.9291 2.37006 15.9003 2.76579 15.0847C2.28248 14.7057 2 14.1254 2 13.5109V6C2 5.44772 2.44772 5 3 5H7.94693L11.8611 2.39057ZM4.17264 13.6452L4.86467 13.0397C6.09488 11.9632 7.96042 12.0698 9.06001 13.2794L11.7622 16.2518C12.6317 17.2083 12.7903 18.6135 12.1579 19.739L17.1665 16.7339C17.4479 16.5651 17.5497 16.2276 17.4448 15.9433L13.0177 9.74551C12.769 9.39736 12.3264 9.24598 11.9166 9.36892L9.43135 10.1145C8.37425 10.4316 7.22838 10.1427 6.44799 9.36235L6.15522 9.06958C5.58721 8.50157 5.44032 7.69318 5.67935 7H4V13.5109L4.17264 13.6452ZM14.0621 4.04306C13.728 3.83047 13.3 3.83502 12.9705 4.05467L7.56943 7.65537L7.8622 7.94814C8.12233 8.20827 8.50429 8.30456 8.85666 8.19885L11.3419 7.45327C12.5713 7.08445 13.8992 7.53859 14.6452 8.58303L18.5144 13.9999H19.9998V6.99994H19.291C18.9106 6.99994 18.5381 6.89148 18.2172 6.68727L14.0621 4.04306ZM6.18168 14.5448L4.56593 15.9586L9.70669 19.9978L10.4106 18.7659C10.6256 18.3897 10.5738 17.9178 10.2823 17.5971L7.58013 14.6247C7.2136 14.2215 6.59175 14.186 6.18168 14.5448Z"></path></svg></span>
                                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">One-on-One Tutoring Sessions</h3>
                                  </div>
                                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                  <p className="mb-2 text-gray-600">Elevate your learning with personalized one-on-one tutoring sessions.
                                   Connect with dedicated tutors who provide targeted guidance and address your specific questions,
                                    ensuring in-depth comprehension.</p>
                              </div>
                          </div>
                      </div>
                      <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                          <div className="relative h-full ml-0 mr-0 sm:mr-10">
                              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                              <div className="relative h-full p-5 bg-white border-2 border-purple-400 rounded-lg">
                                  <div className="flex items-center -mt-1">
                                      <span><svg classNameName="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9.00886C3 5.69022 5.69071 2.99951 9.00935 2.99951H12C15.3093 2.99951 17.9942 5.67508 18.0093 8.98082H18.9533C20.1037 8.98082 21 9.87713 21 11.0275V14.9902C21 18.3088 18.3093 20.9995 14.9907 20.9995H9.00935C5.69071 20.9995 3 18.3088 3 14.9902V9.00886ZM9.00935 4.99951C6.79528 4.99951 5 6.79479 5 9.00886V14.9902C5 17.2042 6.79528 18.9995 9.00935 18.9995H14.9907C17.2047 18.9995 19 17.2042 19 14.9902V11H18C16.9243 11 16 10.0756 16 9C16 6.78593 14.2141 4.99951 12 4.99951H9.00935ZM8 9C8 8.44772 8.44772 8 9 8H12.5C13.0523 8 13.5 8.44772 13.5 9C13.5 9.55228 13.0523 10 12.5 10H9C8.44772 10 8 9.55228 8 9ZM9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H9Z"></path></svg></span>
                                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Engaging Articles and Blogs</h3>
                                  </div>
                                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                  <p className="mb-2 text-gray-600">Stay informed and inspired with our library of educational articles 
                                  and blogs written by industry experts and experienced educators.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
  };

export default AboutUS;