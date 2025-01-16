import logo from "../assets/img/Logo.png"
import {NavLink} from "react-router-dom"
export default function Footer(){
    return(
        <footer className="bg-blacked h-20 md:h-32  mt-16 flex flex-col items-center justify-center gap-4 py-4">
        
        <div className=" flex justify-center items-center gap-4">
            <img src={logo} className="w-8 md:w-12" alt="Gadget lab logo"/>
            <div className="flex flex-col text-sm lg:text-base">
                <span>Gadget Labs 2025</span>
                <span>All rights are reserved</span>
            </div>
        </div>
        <div className="hidden md:flex justify-center text-light gap-4 w-11/12 items-center">
        <NavLink className="hover:text-white" to="/home">Home/Office</NavLink>
        <NavLink className="hover:text-white" to="/student">Student</NavLink>
        <NavLink className="hover:text-white" to="/creator">Creator</NavLink>
        <NavLink className="hover:text-white" to="/gaming">Gaming</NavLink>
        <NavLink className="hover:text-white" to="/programming">Programming</NavLink>
        <NavLink className="hover:text-white" to="/datascience">ML/Data Science</NavLink>
        <NavLink className="hover:text-white" to="/news">News</NavLink>
        </div>
        </footer>
    )
}