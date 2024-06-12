"use client"
import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import cssStyles from '@/styles/common.module.css'
import Link from "next/link";

function NavbarComponent() {
    const [Hamburger, setHamburger] = React.useState("Menu");
    const [SidebarLeft, setSidebarLeft] = React.useState("-780px");
    const ToggleNavbar = (e:any)=>{
        if (Hamburger == "Menu"){
            setHamburger("close")
            setSidebarLeft("0")
        }else{
            setHamburger("Menu")
            setSidebarLeft("-780px")
        }
    }
    

    return ( 
        <>
            <nav className={`flex justify-between items-center bg-dark text-white m-2 rounded ${cssStyles.boxShadowSm} max-md:p-2`}>
                <div className={`px-2 text-2xl font-bold text-red-600 ${cssStyles.BebasNeueFont} select-none cursor-pointer`}>
                    AnimeFlix
                </div>
                <div className={`max-md:absolute max-md:top-20 max-md:w-full max-md:rounded-md transition-all duration-100`} style={{left:SidebarLeft}}>
                    <div className={`max-md:mx-2 max-md:bg-dark bg-dark rounded-md ${cssStyles.mdboxShadowSm} flex items-center md:shadow-none max-md:flex-col`}>
                        <div className="w-full md:mr-10">
                            <ul className="flex items-center justify-center gap-1 my-auto pl-0 max-md:flex-col max-md:pl-0">
                                <Link href={"/"} className="text-white text-decoration-none hover:bg-red-600 py-2 px-3 rounded-md my-2 font-semibold max-md:w-11/12 max-md:text-center">Home</Link>
                                <Link href={"/"} className="text-white text-decoration-none hover:bg-red-600 py-2 px-3 rounded-md my-2 font-semibold max-md:w-11/12 max-md:text-center">App</Link>
                                <Link href={"/"} className="text-white text-decoration-none hover:bg-red-600 py-2 px-3 rounded-md my-2 font-semibold max-md:w-11/12 max-md:text-center">About</Link>
                                <Link href={"/search"} className="text-white text-decoration-none hover:bg-red-600 py-2 px-3 rounded-md my-2 font-semibold max-md:w-11/12 max-md:text-center">Search</Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex items-center justify-center">
                    <button onClick={ToggleNavbar}>
                        {
                            Hamburger == "Menu"? (<FiMenu className="text-3xl text-blue-200"/>) : (<CgClose className="text-3xl text-blue-200"/>)
                        }
                    </button>
                </div>
            </nav>
        </>
     );
}

export default NavbarComponent;