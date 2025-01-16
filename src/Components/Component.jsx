export default function Component({image,title,children}){
    return(
        <div className="my-8 shadow-[0_0_2px] shadow-light p-4">
                        
        <div  className="flex flex-row-reverse justify-center items-center gap-2 lg:gap-4">
        <div className="hidden lg:block lg:w-2/12 pr-6">   
            <img src={image} alt="graphical unit" className="ml-auto w-24"/>
        </div>
        <div className="lg:w-full">             
        <h4 className="text-base lg:text-2xl">{title}</h4>
        <p className="text-xs lg:text-sm">{children}
        </p>

        </div>   
        </div>
        </div>
    )
}