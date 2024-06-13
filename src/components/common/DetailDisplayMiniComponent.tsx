import React from "react";

function DetailDisplayMiniComponent(props:any) {
    return ( 
        <>
        <div className='flex relative p-2'>
            <span className='text-gray-500 text-xs font-bold mx-1 px-1 absolute -top-0 bg-dark' style={{ fontSize: "10px" }}>{props.title}</span>
            <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{props.data}</span>
        </div>
        </>
     );
}

export default DetailDisplayMiniComponent;