import heroimage from "../assets/img/hero-image.webp"
import Card from "../Components/Card"
import gamingLaptop from "../assets/img/gamingLaptop.png"
import creatorLaptop from "../assets/img/creatorLaptop.webp"
import homeLaptop from "../assets/img/homeLaptop.webp"
import datascienceLaptop from "../assets/img/datascienceLaptop.png"
import studentLaptop from "../assets/img/studentLaptop.webp"
import programmingLaptop from "../assets/img/programmingLaptop.webp"

export default function Home(){
    return(
        <>
        <div className="flex flex-col items-center mt-8 my-8 lg:my-16  select-none">
            <h1 className=" text-light text-2xl w-10/12 lg:text-7xl lg:w-8/12 text-center leading-snug lg:leading-tight">Finding that <span className="font-semibold">perfect</span> laptop has never been <span className="font-semibold">easier</span></h1>
            <img src={heroimage} className="w-10/12 lg:w-2/3"/>
        </div>
        <div className="w-9/12 lg:w-8/12 mx-auto my-4 lg:my-8">
            <h2 className="text-lg lg:text-4xl pb-2">Laptops by usecase</h2>
            <p className="text-sm lg:text-xl">When selecting a laptop, your primary focus should be on your current and most frequent use cases. While it's tempting to choose a device based on potential future needs, this approach often leads to unnecessary compromises or overspending.<br/>
 
            While some foresight for potential upgrades or flexibility can be valuable, avoid prioritizing uncertain future use cases.
            Once you have figured out your use case, select it to explore options.</p>
        </div>
        <div className="w-10/12 mx-auto justify-center items-center my-4 flex flex-wrap lg:justify-center gap-6">
            <Card img={gamingLaptop} title="Gaming laptops" linkto="gaming">For gamers who value portability, and high performance </Card>
            <Card img={creatorLaptop} title="Creator laptops" linkto="creator">For creative work like video editing, modeling, graphic design, etc</Card>
            <Card img={studentLaptop} title="Student laptops" linkto="creator">For student use at affordable prices or basic home usage</Card>
            <Card img={homeLaptop} title="Home/Office laptops" linkto="creator">Designed for general productivity tasks and light multitasking.</Card>
            <Card img={datascienceLaptop} title="Data Science laptops" linkto="creator"> Designed for efficient data analysis, modeling, and visualization</Card>
            <Card img={programmingLaptop} title="Programming laptops" linkto="creator">Designed for coding and software development tasks</Card>
        </div>
        </>
    )
}