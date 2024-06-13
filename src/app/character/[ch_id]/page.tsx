"use client"
import React, { useEffect } from 'react'
import cssStyles from '@/styles/common.module.css'
import MiniAppDisplayCard from '@/components/appDashboard/MiniDisplayerCard';
import Link from 'next/link';
import axios from 'axios';
import CrausalPage from '@/components/common/crausal';

function CharacterDetailPage({params}:any) {
    const {ch_id} = params
    const [ApiResponseData, setApiResponseData] = React.useState({data:{
        name:"",
        name_kanji:"",
        images:{
            webp:{
                image_url:""
            }
        },
        anime:[],
        about:"No Data Avaliable"
    }});
    const GetApiData = async ()=>{
        const Serverresponse = await axios.get(`https://api.jikan.moe/v4/characters/${ch_id}/full`)
        setApiResponseData(Serverresponse.data)
    }

    useEffect(()=>{
        let counter = 1
        if (counter){
            GetApiData()
            counter = 0
        }
    })

    return ( 
        <>
            <div className='m-2'>
                <div className='relative'>
                    <Link href={"/"} className=' text-decoration-none'>
                        <div className={`bannerContainer w-full rounded-md bg-red-600 text-center font-bold text-8xl max-sm:text-7xl py-5 text-white ${cssStyles.BebasNeueFont}`}>
                            <div className='my-3'>
                                AnimeFlix
                            </div>
                        </div>
                    </Link>
                    <div className="profileImg aspect-square overflow-hidden w-48 h-48 max-md:w-40 max-md:h-40 max-sm:w-32 max-sm:h-32 rounded-full border-3 border-white absolute -bottom-24  max-md:-bottom-20 max-sm:-bottom-16">
                        <img src={ApiResponseData.data.images.webp.image_url} className='w-full h-full' alt=""/>
                    </div>
                </div>
                <div className={`detailContainer py-5 rounded-lg text-white max-sm:mt-3`}>
                    <div className='flex items-center justify-center select-none'>
                        <h3 className={`text-white text-center ${cssStyles.boxShadowSm} max-sm:w-full my-2 py-2 px-2 rounded-md w-2/4 inline-block lg:text-4xl`}>{`${ApiResponseData.data.name} (${ApiResponseData.data.name_kanji==null?(""):(ApiResponseData.data.name_kanji)})`}</h3>
                    </div>
                    <div className={`${cssStyles.boxShadowSm} p-2 rounded-md mt-3`}>
                        {   

                            <CrausalPage
                            effect={false}
                            uniqueKey={"Characters-anime"}
                            roundedCorner={"rounded-sm"}
                            button={false}
                            crausalItems={
                                ApiResponseData.data.anime.map((ele:any, id:number)=>{
                                    return(
                                        <div>
                                            <MiniAppDisplayCard
                                            detail_url={`/anime/${ele.anime.mal_id}`}
                                            id={ele.anime.mal_id}
                                            url={ele.anime.images.webp.image_url}
                                            name={ele.anime.title}
                                            />
                                        </div>
                                    )
                                })
                                
                            }
                            />                            

                            
                        }
                    </div>
                    <div className={`${cssStyles.boxShadowSm} p-2 rounded-md max-sm:text-sm mt-4`}>
                        <span className='text-white text-2xl font-bold mb-2'>About:</span>
                        <br />
                        <div className='mt-2'>
                        {
                            ApiResponseData.data.about==null?("No Data Avaliable"):(ApiResponseData.data.about)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default CharacterDetailPage;