'use client'

import React, { useEffect } from 'react'
import CrausalPage from '@/components/common/crausal'
import MiniAppDisplayCard from './MiniDisplayerCard';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import axios from 'axios';

function HomeDashboard() {
    const [CurrentPage, setCurrentPage] = React.useState(1);
    const [Content, setContent] = React.useState<any>([])
    const [MaxPages, setMaxPages] = React.useState(20);
    const getApiData = async()=>{
        const response:any = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${CurrentPage}`)
        setMaxPages(response.data.pagination.last_visible_page)
        setContent(response.data.data.map((ele:any, i:number)=>{
            return (
                <MiniAppDisplayCard 
                            url={ele.images.webp.image_url}
                            id={ele.mal_id}
                            name={''}
                            />
            )
        }))
    }

    useEffect(()=>{
        getApiData()
    })

    const getPreviousPage = async(e:any)=>{
        if(CurrentPage >1){
            setCurrentPage(CurrentPage-1)
            getApiData()
        }else{
            return;
        }
    }
    const getNextPage = async(e:any)=>{
        if(CurrentPage<=(await MaxPages)-1){
            setCurrentPage(CurrentPage+1)
            getApiData()
        }
    }


    return (
        <>
            <div className='flex justify-center'>
                <div className="mx-2 flex items-center justify-center flex-wrap">
                                {Content}
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4 mb-2 mx-2'>
                <button className='py-1 px-1 text-3xl font-bold rounded text-white bg-red-600' onClick={getPreviousPage}><GrFormPrevious/></button>
                <span className='bg-red-600 px-3 py-2 font-bold rounded text-white'>{CurrentPage}</span>
                <button className='py-1 px-1 text-3xl font-bold rounded bg-red-600 text-white' onClick={getNextPage}><MdOutlineNavigateNext/></button>
            </div>
        </>
    );
}

export default HomeDashboard;