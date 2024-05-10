import React, { useEffect, useState } from "react";

function Alert() {
    return (
        <div role="alert" className="alert shadow-lg absolute top-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
                <h3 className="font-bold">School not open yet!</h3>
                <div className="text-xs">Return later.</div>
            </div>
        </div>
    );
}

const OnlineClassCard = (props) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoading(true), 2000);
    }, []);

    const getRandomDateTime = () => {
        const currentDate = new Date();
        const randomOffset = Math.floor(Math.random() * 3); // Random offset for today, tomorrow, or the day after
        const randomHour = Math.floor(Math.random() * (20 - 8 + 1)) + 8; // Random hour between 8 and 20
        const randomMinute = Math.floor(Math.random() * 4) * 15; // Random minute in increments of 15 (0, 15, 30, 45)
      
        currentDate.setDate(currentDate.getDate() + randomOffset);
        currentDate.setHours(randomHour);
        currentDate.setMinutes(randomMinute);
      
        return currentDate.toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: false });
    };
    
    

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
  
        // Hide the alert after 2.5 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 2500);
    };

    return (
        loading ? (
            <div className="card w-96 h-[420px] bg-base-100 border-2 border-gray-600 shadow-xl p-2 mx-4 my-4">
                <figure className="mb-2"><img src="https://images2.alphacoders.com/114/1145107.jpg" alt="Class" className="w-full" /></figure>
                <div className="card-body border-black">
                    <h2 className="card-title">
                        Class with P. {props.teacherName}
                        <div className="badge badge-secondary bg-black border-black py-2 w-[110%]">{getRandomDateTime()}</div>
                    </h2>
                    <p className="mb-2">{props.description}</p>
                    <div className="card-actions flex justify-between">
                        <div className="badge badge-outline py-3">{props.subject}</div> 
                        <div className="badge badge-outline py-3">{props.lesson}</div>
                    </div>
                    <button className="btn btn-wide bg-purple-700 text-white hover:text-black hover:border-purple-600 hover:bg-white justify-center self-center mt-2" onClick={handleClick}>Count me in!</button>
                </div>

                {showAlert && <Alert />}
                
            </div>
        ) : (
            <div className="card w-96 h-[420px] bg-base-100 border-2 border-gray-600 shadow-xl p-2 mx-4 my-4">
                <figure className="mb-2"><img src="" alt="" className="w-full skeleton" /></figure>
                <div className="card-body border-black">
                    <h2 className="skeleton card-title">
                        <div className="badge badge-secondary skeleton border-gray-500 py-2 w-[110%]"></div>
                    </h2>
                    <p className="mb-2 skeleton"></p>
                    <div className="skeleton card-actions flex justify-between">
                        <div className="py-3"></div>
                        <div className="py-3"></div>
                    </div>
                    <button className="skeleton btn btn-wide bg-purple-700 text-white hover:text-black hover:border-purple-600 hover:bg-white justify-center self-center mt-2"></button>
                </div>
            </div>
        )
    );
}

export default OnlineClassCard;
