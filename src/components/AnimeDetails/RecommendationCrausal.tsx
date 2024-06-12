import React, { useEffect } from 'react'
import CrausalPage from '../common/crausal';
import axios from 'axios';
import MiniAppDisplayCard from '../appDashboard/MiniDisplayerCard';
import cssStyles from '@/styles/common.module.css'

function RecommendationCrausalComponent(props:any) {
    const [ApiResponseData, setApiResponseData] = React.useState({data:[]});
    const ApiResponse = async ()=>{
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${props.id}/recommendations`)
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
                <h5 className='mb-2 mx-1 text-white font-bold'>Recommendations :</h5>
            <CrausalPage
            effect={false}
            uniqueKey={"Recommendations"}
            roundedCorner={"rounded-sm"}
            button={false}
            crausalItems={
                ApiResponseData.data.map((ele:any, id:number)=>{
                    return(
                        <MiniAppDisplayCard
                        id={ele.entry.mal_id}
                        url={ele.entry.images.webp.image_url}
                        name={ele.entry.title}
                        />
                    )
                }).slice(0,25)
                
            }
            />
            
            </div>
        </>
     );
}

export default RecommendationCrausalComponent;