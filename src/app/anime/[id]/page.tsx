"use client"
import BasicAnimeDetailsPage from '@/components/AnimeDetails/BasicDetail';
import CharacterCrausalComponent from '@/components/AnimeDetails/CharacterCrausal';
import RecommendationCrausalComponent from '@/components/AnimeDetails/RecommendationCrausal';
import axios from 'axios';
import React, { useEffect } from 'react'

function AnimeDetailPage({params}:any) {
    const {id}:any = params
    const getdata = async()=>{
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
        console.log(response.data)
    }
    return ( 
        <>
            
            <BasicAnimeDetailsPage
            id={id}
            />
            <CharacterCrausalComponent
            id={id}
            />
            <RecommendationCrausalComponent id={id}/>
        </>
     );
}

export default AnimeDetailPage;