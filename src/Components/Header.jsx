import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="hidden lg:flex flex-row-reverse justify-between mt-4 px-10">
        <div className="flex justify-center text-light gap-4 w-full items-center">
          <NavLink to="/" className="align-bottom font-semibold transition transform hover:scale-105">Home</NavLink>
          <NavLink className="hover:text-white transition transform hover:scale-105" to="/home">Everyday use</NavLink>
          <NavLink className="hover:text-white transition transform hover:scale-105" to="/student">Student</NavLink>
          <NavLink className="hover:text-white transition transform hover:scale-105" to="/creator">Creator</NavLink>
          <NavLink className="hover:text-white transition transform hover:scale-105" to="/gaming">Gaming</NavLink>
          <NavLink className="hover:text-white transition transform hover:scale-105" to="/programming">Programming</NavLink>
          <NavLink className="hover:text-white transition transform hover:scale-105" to="/datascience">ML/Data science</NavLink>
          <button className="bg-light text-dark hover:bg-white px-4 py-1 font-semibold rounded-xl transition transform hover:scale-105" onClick={() => navigate("/news")}>News</button>
        </div>
        
      </div>

      <div className="flex flex-row-reverse justify-between items-start lg:hidden mt-6 mx-10">
        <button className="text-white" onClick={() => { setToggle(prev => !prev) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
        <div className="flex justify-center items-end font-semibold self-end">
            <NavLink to="/" className="align-bottom self-end">GadgetLab</NavLink>
        </div> 
</div>

      {toggle && (
        <div className="flex flex-row flex-wrap gap-4 mt-4 px-10 w-full right-0 pl-8 justify-around items-start text-light bg-theme z-50 pb-8 absolute">
          <NavLink className="hover:text-white" to="/home">Everyday use</NavLink>
          <NavLink className="hover:text-white" to="/student">Student</NavLink>
          <NavLink className="hover:text-white" to="/creator">Creator</NavLink>
          <NavLink className="hover:text-white" to="/gaming">Gaming</NavLink>
          <NavLink className="hover:text-white" to="/programming">Programming</NavLink>
          <NavLink className="hover:text-white" to="/datascience">ML/Data science</NavLink>
          <NavLink className="hover:text-white" to="/datascience">News</NavLink>
        </div>
      )}
    </>
  );
}
