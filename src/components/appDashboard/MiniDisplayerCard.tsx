import React from "react";
import cssStyles from '@/styles/common.module.css'
import Link from "next/link";

function MiniAppDisplayCard(props:any) {
    return ( 
        <>
            <Link href={`${props.detail_url}`} className="flex items-center justify-center">
            <div className={`inline-block rounded-lg p-1 my-1 select-none mx-1`}>
                <div className="w-24 max-w-24 lg:w-32 lg:max-w-32">
                    <div className={` w-24  max-w-24 lg:w-32 lg:max-w-32 rounded-lg mb-1 ${cssStyles.boxShadowSm} `}>
                        <img src={props.url} alt={props.id} className="w-24 max-h-36 lg:max-h-48 lg:min-h-48 max-w-24 lg:w-32 lg:max-w-32 rounded-lg select-none" />
                    </div>
                    <div className="text-center text-white text-xs text-decoration-none line-clamp-1">
                        {props.name}
                    </div>
                </div>
            </div>
            </Link>
        </>
     );
}

export default MiniAppDisplayCard;