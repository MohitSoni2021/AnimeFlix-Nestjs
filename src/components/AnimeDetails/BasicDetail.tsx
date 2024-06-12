import React, { useEffect } from 'react'
import cssStyles from '@/styles/common.module.css'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

function BasicAnimeDetailsPage(props:any) {
    const [ApiData, setApiData] = React.useState({
        titles:[1,2],
        genres:[1,2],
    });
    const getdata = async()=>{
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${props.id}/full`)
        console.log(response.data)
        setApiData(response.data.data)
        console.log(ApiData)
    }

    useEffect(() => {
        let counter = 1
        if (counter){
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
                    <span className='bg-dark text-2xl font-bold text-red-600 mx-2 px-2 absolute -top-5'>{ApiData.title||""}</span>
                    <div className='m-2 text-white'>

                        <div className='text-sm mt-2 mb-3'>
                            <div className='font-bold px-2 my-2 w-full text-center mt-3'>Titles</div>
                            <div className='flex flex-wrap items-center justify-center'>
                                {
                                    ApiData.titles.map((ele:any, id:number)=>{
                                        return(
                                            <div key={id} className='flex relative p-1'>
                                                <span className='text-gray-500 font-bold mx-1 px-1 absolute -top-2 bg-dark' style={{ fontSize: "10px" }}>{ele.type}</span>
                                                <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{ele.title}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Detail">
                                    <div className='flex flex-wrap gap-1 flex-col items-center justify-center'>
                                        <div className='flex flex-wrap gap-1'>
                                            <div className='flex relative p-2'>
                                                <span className='text-gray-500 text-xs font-bold mx-1 px-1 absolute -top-0 bg-dark' style={{ fontSize: "10px" }}>Duration</span>
                                                <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{ApiData.duration}</span>
                                            </div>
                                            <div className='flex relative p-2'>
                                                <span className='text-gray-500 text-xs font-bold mx-1 px-1 absolute -top-0 bg-dark' style={{ fontSize: "10px" }}>Type</span>
                                                <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{ApiData.type}</span>
                                            </div>
                                            <div className='flex relative p-2'>
                                                <span className='text-gray-500 text-xs font-bold mx-1 px-1 absolute -top-0 bg-dark' style={{ fontSize: "10px" }}>Rank</span>
                                                <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{ApiData.rank}</span>
                                            </div>
                                            <div className='flex relative p-2'>
                                                <span className='text-gray-500 text-xs font-bold mx-1 px-1 absolute -top-0 bg-dark' style={{ fontSize: "10px" }}>Score</span>
                                                <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{ApiData.score}</span>
                                            </div>
                                            <div className='flex relative p-2'>
                                                <span className='text-gray-500 text-xs font-bold mx-1 px-1 absolute -top-0 bg-dark' style={{ fontSize: "10px" }}>Rating</span>
                                                <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{ApiData.rating}</span>
                                            </div>
                                            <div className='flex relative p-2'>
                                                <span className='text-gray-500 text-xs font-bold mx-1 px-1 absolute -top-0 bg-dark' style={{ fontSize: "10px" }}>Episodes</span>
                                                <span className='border-1 border-gray-500 rounded-md p-2 font-bold max-md:text-sm max-sm:text-xs lg:text-xl'>{ApiData.episodes}</span>
                                            </div>
                                        </div>

                                        <div className='flex relative p-2 my-2'>
                                                <span className='text-gray-500 max-md:text-xs font-bold mx-1 px-1 absolute max-md:-top-0 lg:-top-1 bg-dark ' >Genres :</span>
                                                <div className='py-3 px-3 border-1 rounded-md border-gray-400 flex flex-wrap gap-2 items-center justify-center'>
                                                    {
                                                        ApiData.genres.map((ele:any, id:number)=>{
                                                            return(
                                                                <span key={id} className=' p-2 bg-red-600 rounded-md font-bold max-sm:text-sm lg:text-xl'>{ele.name}</span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                        </div>

                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Description">
                                    <div className='max-sm:text-xs max-md:text-sm'>
                                    {ApiData.synopsis}
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasicAnimeDetailsPage;