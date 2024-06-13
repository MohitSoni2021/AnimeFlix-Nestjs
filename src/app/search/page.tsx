'use client'

import React, { useEffect } from 'react'
import CrausalPage from '@/components/common/crausal'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import axios from 'axios';
import MiniAppDisplayCard from '@/components/appDashboard/MiniDisplayerCard';
import cssStyles from '@/styles/common.module.css'
import { IoSearchSharp } from 'react-icons/io5';

function HomeDashboard() {
    const [SearchQuery, setSearchQuery] = React.useState("");
    const [CurrentPage, setCurrentPage] = React.useState(1);
    const [Content, setContent] = React.useState<any>([])
    const [MaxPages, setMaxPages] = React.useState(1);
    const getApiData = async () => {
        let response:any = {
            data: {
                pagination:{
                    last_visible_page:20
                },
                data:[]
            }
        }
        if (SearchQuery == ""){
            setContent(["No Data Yet!!"])
        }else{
            response = await axios.get(`https://api.jikan.moe/v4/anime?q="${SearchQuery}"`)
        }
        setMaxPages(response.data.pagination.last_visible_page)
        setContent(response.data.data.map((ele: any, i: number) => {
            return (
                <MiniAppDisplayCard
                    detail_url={`/anime/${ele.mal_id}`}
                    url={ele.images.webp.image_url}
                    id={ele.mal_id}
                    name={''}
                />
            )
        }))
    }

    useEffect(() => {
        let counter = 1
        if (counter){
            getApiData()
            counter = 0}
    })

    const getPreviousPage = async (e: any) => {
        if (CurrentPage > 1) {
            setCurrentPage(CurrentPage - 1)
            getApiData()
        } else {
            return;
        }
    }
    const getNextPage = async (e: any) => {
        if (CurrentPage <= (await MaxPages) - 1) {
            setCurrentPage(CurrentPage + 1)
            getApiData()
        }
    }


    return (
        <>
            <div className={`bg-dark rounded-md m-2 py-2 ${cssStyles.boxShadowSm} flex items-center justify-center`}>
                <div>
                    <div className="flex gap-1 items-center justify-center mr-2 max-md:pb-5">
                        <input type="text" name="search_query" id="" className=" rounded-md p-1 text-black outline-none" placeholder="Search Anime" onChange={(e)=>{setSearchQuery(e.target.value); getApiData()}} value={SearchQuery}/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="mx-2 flex items-center justify-center flex-wrap">
                    {Content}
                </div>
            </div>
            {
                SearchQuery==""?(<div className='text-white font-bold text-3xl text-center mt-5'>No Data Yet!!</div>)
                :
                (<div className='flex items-center gap-2 mt-4 mb-2 mx-2'>
                <button className='py-1 px-1 text-3xl font-bold rounded text-white bg-red-600' onClick={getPreviousPage}><GrFormPrevious /></button>
                <span className='bg-red-600 px-3 py-2 font-bold rounded text-white'>{CurrentPage}</span>
                <button className='py-1 px-1 text-3xl font-bold rounded bg-red-600 text-white' onClick={getNextPage}><MdOutlineNavigateNext /></button>
            </div>)
            }
        </>
    );
}

export default HomeDashboard;