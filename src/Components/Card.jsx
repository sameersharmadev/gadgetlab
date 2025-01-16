import { useNavigate } from "react-router-dom";

export default function Card({ img, title, linkto, children }) {
    const navigate = useNavigate();
    return (
        <>
            <div 
                className="flex flex-col items-center w-5/12 lg:w-3/12 p-2 py-4 lg:p-6 bg-dark shadow-[0_0_2px] shadow-light gap-1 lg:gap-2 cursor-default transition transform hover:scale-105" 
                onClick={() => navigate(linkto)}
            >
                <div className="flex justify-center items-center h-20 lg:h-48">
                    <img className="w-full h-full object-contain" src={img} alt={`${title} laptop placeholder`} />
                </div>
                <div className="flex flex-col items-center justify-center lg:justify-between lg:h-1/2">
                    <h3 className="text-xs h-1/3 lg:text-lg lg:h-1/3">{title}</h3>
                    <p className="hidden lg:block text-base text-center lg:h-2/3">{children}</p>
                    
                </div>
            </div>
        </>
    );
}
