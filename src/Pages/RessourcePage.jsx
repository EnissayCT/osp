import React from "react";
import { useParams } from "react-router-dom";

const RessourcePage = ({match}) => {
    const Res = match.params.name;
    const id = useParams();
    return (
        <>
                <div className='flex-auto'>
                    <h1 className="bg-indigo-500 px-3 py-2 rounded-md self-center">this is {Res}</h1>
                </div>

        </>
    )
}

export default RessourcePage;