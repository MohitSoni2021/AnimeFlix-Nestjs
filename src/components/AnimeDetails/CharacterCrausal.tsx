import React, { useEffect } from 'react'
import CrausalPage from '../common/crausal';
import axios from 'axios';
import MiniAppDisplayCard from '../appDashboard/MiniDisplayerCard';
import cssStyles from '@/styles/common.module.css'

function CharacterCrausalComponent(props:any) {
    const [ApiResponseData, setApiResponseData] = React.useState({data:[]});
    const ApiResponse = async ()=>{
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${props.id}/characters`)
        console.log(response.data.data)
        setApiResponseData(response.data)
    }

    useEffect(() => {
        let counter = 1
        if (counter){
            ApiResponse()
            counter = 0
        }
    }, [])

    return ( 
        <>
            <div className={`m-2 py-2 bg-dark ${cssStyles.boxShadowSm} rounded-md mt-5`}>
                <h5 className='mb-2 mx-1 text-white font-bold'>Characters :</h5>
            <CrausalPage
            effect={false}
            uniqueKey={"Characters"}
            roundedCorner={"rounded-sm"}
            button={false}
            crausalItems={
                ApiResponseData.data.map((ele:any, id:number)=>{
                    return(
                        <MiniAppDisplayCard
                        id={props.id}
                        url={ele.character.images.webp.image_url}
                        name={ele.character.name}
                        detail_url={`/character/${ele.character.mal_id}`}
                        />
                    )
                })
                
            }
            />
            
            </div>
        </>
     );
}

export default CharacterCrausalComponent;