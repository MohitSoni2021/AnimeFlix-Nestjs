import React from "react";
import cssStyles from '@/styles/loading.module.css'

function Loading() {
    return ( 
        <>
        <div className={`w-full text-red-600 max-sm:text-5xl text-7xl my-5 py-5 ${cssStyles.BebasNeueFont} text-center`}>
            AnimeFlix
        </div>
        </>
     );
}

export default Loading;