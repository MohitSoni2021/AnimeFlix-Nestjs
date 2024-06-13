import React, { useEffect } from 'react'
import cssStyles from '@/styles/common.module.css'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import DetailDisplayMiniComponent from '../common/DetailDisplayMiniComponent';

function BasicAnimeDetailsPage(props: any) {
    const [ApiData, setApiData] = React.useState({
        titles: [1, 2],
        genres: [1, 2],
    });
    const getdata = async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${props.id}/full`)
        console.log(response.data)
        setApiData(response.data.data)
        console.log(ApiData)
    }

    useEffect(() => {
        let counter = 1
        if (counter) {
            getdata()
            counter = 0
        }
    }, [])


    const [key, setKey] = useState<any>('home');
    return (
        <>


            <div className='bg-dark'>
                <div className='text-white text-xl font-bold mb-3'>

                </div>
                <div className={` m-2 rounded-lg py-2 relative mt-5 ${cssStyles.boxShadowSm}`}>
                    <span className='bg-dark text-2xl font-bold text-red-600 mx-2 px-2 absolute -top-5'>{ApiData.title || ""}</span>

                    <div className='text-sm mt-2 mb-3 text-white'>
                        <div className='font-bold px-2 my-2 w-full text-center mt-3'>Titles</div>
                        <div className='flex flex-wrap items-center justify-center'>
                            {
                                ApiData.titles.map((ele: any, id: number) => {
                                    return (
                                        <DetailDisplayMiniComponent title={ele.type} data={ele.title} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className={`flex flex-wrap gap-1 flex-col items-center justify-center text-white m-2 ${cssStyles.boxShadowSm} p-2 rounded-md mt-5`}>
                    <span className='font-bold text-xl mb-2'>Details:</span>
                    <div className='flex flex-wrap gap-1 items-center justify-center'>
                        <DetailDisplayMiniComponent title={"Duration"} data={ApiData.duration} />
                        <DetailDisplayMiniComponent title={"Type"} data={ApiData.type} />
                        <DetailDisplayMiniComponent title={"Rank"} data={ApiData.rank} />
                        <DetailDisplayMiniComponent title={"Score"} data={ApiData.score} />
                        <DetailDisplayMiniComponent title={"Rating"} data={ApiData.rating} />
                        <DetailDisplayMiniComponent title={"Episodes"} data={ApiData.episodes} />
                    </div>

                    <div className='flex relative p-2 my-2'>
                        <span className='text-gray-500 max-md:text-xs font-bold mx-1 px-1 absolute max-md:-top-0 lg:-top-1 bg-dark ' >Genres :</span>
                        <div className='py-3 px-3 border-1 rounded-md border-gray-400 flex flex-wrap gap-2 items-center justify-center'>
                            {
                                ApiData.genres.map((ele: any, id: number) => {
                                    return (
                                        <span key={id} className=' p-2 bg-red-600 rounded-md font-bold max-sm:text-sm lg:text-xl'>{ele.name}</span>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className={`${cssStyles.boxShadowSm} m-2 mt-5 text-white p-2 rounded-md`}>
                    <span className='font-bold text-xl mb-2'>Description:</span>
                    <div className='max-sm:text-xs max-md:text-sm'>
                        {ApiData.synopsis}
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default BasicAnimeDetailsPage;