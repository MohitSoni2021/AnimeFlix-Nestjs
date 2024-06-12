"use client"
import React, { useEffect } from 'react'
import cssStyles from '@/styles/common.module.css'


function CrausalPage(props) {
    const scroll = (e)=>{
        let ItemContainer = document.getElementById(`crausal-items-container-${props.uniqueKey}`)
        if (e.target.parentElement.id == "right-btn"){
            ItemContainer.scrollLeft = ItemContainer.scrollLeft+ItemContainer.children[0].clientWidth
        }else{
            ItemContainer.scrollLeft = ItemContainer.scrollLeft-ItemContainer.children[0].clientWidth
        }
    }

    useEffect(()=>{
        if (!props.button){
            let scroll_btn = document.querySelectorAll('.scroll_btn')
            scroll_btn.forEach(btn=>{
                btn.classList.add('hidden')
            })
        }

        

        const slider = document.getElementById(`crausal-items-container-${props.uniqueKey}`);

        

        if (props.roundedCorner){
            slider.classList.add(props.roundedCorner)
        }

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
        isDown = true;
        if (props.effect){slider.classList.add('scale-110');}
        
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('scale-110');
        });
        slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('scale-110');
        });
        slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 0.8; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
        });
    })


    return ( 
        <>
            <div className='w-full flex list-none  items-center overflow-x-hidden'>
                <div className={`overflow-x-scroll  flex  transition-all duration-500 scroll-smooth ${cssStyles.scrollbarHide}`} id={`crausal-items-container-${props.uniqueKey}`} style={{gap:props.crausalItemGap, scrollbarWidth:-1}}>
                    {props.crausalItems}
                </div>
            </div>
        </>
        );
}

export default CrausalPage;