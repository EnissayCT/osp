import React, {useState} from "react";
import OnlineClassCard from "../Components/OnlineClassCard";
import classes from '../Ressources/classes.json';
import { Link } from "react-router-dom";



const AddClass = () => {
  const [teacherName, setTeacherName] = useState('');
  const [subject, setSubject] = useState('');
  const [lesson, setLesson] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAddClass = () => {
    const existingClasses = localStorage.getItem('localclasses');
    const classesArray = existingClasses ? JSON.parse(existingClasses) : [];
  
    const newClass = {
      teacherName: teacherName,
      subject: subject,
      lesson: lesson,
      description: description,
      time: date,
      image: "/Images/Illustrations/mathClass.jpg"
    };
  
    classesArray.push(newClass);
  
    localStorage.setItem('localclasses', JSON.stringify(classesArray));
  
    console.log('New class added:', newClass);
  };
  

  return (
    <>
      <div className="drawer content-center self-center z-[50]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        {JSON.parse(localStorage.getItem('userInfo')) ?
        <div className="fixed bottom-5 right-20 z-50">
        <div className="tooltip transition duration-300 ease-in-out" data-tip="A teacher? add a class">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary border-purple-600 bg-purple-600 text-white hover:bg-white hover:text-purple-600 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer shadow-xl"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </label>
        </div>
        </div>
        :
        <div className="tooltip fixed bottom-5 right-20 z-50" data-tip='log in to add a class'>
        <button className="btn  bg-purple-600 text-white hover:text-purple-600 hover:border-purple-600 hover:bg-white w-22"><Link to="/signup">log IN</Link></button>
        </div>}
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
          <div
            id="drawer-form"
            className="fixed top-0 left-0 z-100 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-purple-800"
            tabIndex="-1"
            aria-labelledby="drawer-form-label"
          >
            <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-black uppercase dark:text-white-400 ">
              <svg
                className="w-5 h-5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"></path>
              </svg>
              New class
            </h5>
            <button
              type="button"
              onClick={() => {document.getElementById("my-drawer").checked = false;}}
              aria-controls="drawer-form"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <form className="mb-6" onSubmit={handleAddClass}>
              <div className="mb-6">
                <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Teacher's Name
                </label>
                <input
                  type="text"
                  id="title"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Yassine"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="Subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => {setSubject(e.target.value)}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Math"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="Lesson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Lesson
                </label>
                <input
                  type="text"
                  id="Lesson"
                  value={lesson}
                  onChange={(e) => {setLesson(e.target.value)}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="les series"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => {setDescription(e.target.value)}}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write class description..."
                ></textarea>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                  placeholder="Select date"
                  value={date}
                  onChange={(e) => {setDate(e.target.value)}}
                />
              </div>

              <button
                type="submit"
                className="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5 me-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                </svg>
                Create class
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};




const ClassDisplay = () => {
  const localClasses = JSON.parse(localStorage.getItem('localclasses')) || [];
  const allClasses = [...classes, ...localClasses];

  return (
    <>
      <section class="text-center pt-12">
          <div class="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                    <div class="flex flex-col space-y-4 space-y-reverse">
                    <h1 class="order-last text-lg text-gray-700">Live classes, from the confort of your house.</h1>
                    <h2 class="text-5xl font-bold text-gray-900 sm:text-6xl">9ismi</h2>
                    </div>
                    <p class="mx-auto mt-6 max-w-xl text-pretty text-base/relaxed text-gray-700">You get to chose your teacher this time 😉, you can even be one and add you own class 
                    by clicking the button on <span className="text-purple-600 font-bold italic underline-offset-1">the bottom right.</span></p>
          </div>
      </section>
      <div className="flex flex-wrap pt-8 justify-center ">
        {allClasses.map((r, i) => (
          <OnlineClassCard
            key={i}
            teacherName={r.teacherName}
            subject={r.subject}
            lesson={r.lesson}
            description={r.description}
            time={r.time}
            image={r.image}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" 
          />
        ))}
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </>
  );
};











const OnlineClassPage = () => {
  return (
    <>
      <ClassDisplay />
      <AddClass />
    </>
  )
}


export default OnlineClassPage;