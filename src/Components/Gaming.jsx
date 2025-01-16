import React from 'react';
import gamingHero from "../assets/img/gamingHero.webp";
import processor from "../assets/img/processor.png";
import graphicsCard from "../assets/img/graphics.png";
import memory from "../assets/img/memory.png";
import screen from "../assets/img/screen.png";
import { useContext } from "react";
import { LaptopContext } from "../App";
import Laptop from "./Laptop";
import Component from "./Component";
import Alert from "./Alerts";

export default function Gaming() {
    const data = useContext(LaptopContext);
    console.log(data);

    return (
        <div className="w-9/12 lg:w-8/12 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-8 lg:mt-16 my-8 lg:my-16 select-none gap-4 lg:gap-0 text-center lg:text-left lg:h-auto">
                <div className="lg:w-2/3">
                    <div className="flex flex-col gap-2 lg:gap-4">
                        <h2 className="text-xl lg:text-4xl text-light">Find the <span className="font-semibold">perfect</span> gaming laptop</h2>
                        <p className="text-xs lg:text-base">Gaming laptops are ideal for high performance gaming and resource intensive tasks. Best for gamers who travel a lot. Gaming laptops generally have powerful GPU for delivering the best graphical performance for games complemented by powerful CPU. These are built to deliver the best performance and hence come with the best components.</p>
                    </div>
                </div>
                <div className="lg:block w-full lg:w-2/5">
                    <img src={gamingHero} alt="Gaming laptop hero image" className="lg:w-full" />
                </div>
            </div>

            <Alert type="info">
                Gaming laptops are powerful machines, and excellent for people looking for portable gaming or just want high performance. You will get a laptop that will handle all workloads with ease. However there are a few caveats to consider. These laptops are generally bulkier, have poor battery life, and generate more heat and fan noise. These laptops also require more cleaning and maintainance to ensure longetivity.<br />
                Due to design constraints, gaming laptops will always be more pricey, less upgradable, and worse in performance and thermals than desktop. Also, their performance significantly drops when on battery so you would need to keep it plugged in for optimal performance during heavy tasks. That being said, if you won't travel a lot, desktop is generally a better investment. But if you value portability and freedom to carry a powerful machine anywhere, don't hesitate to buy it, just be aware of its shortcomings.
            </Alert>

            <Component title="Graphics Card" image={graphicsCard}>
                A good GPU should be the top priority in gaming laptop. Since it can't be upgraded, make sure you're choosing the right one. Since it's also the most expensive component, you need to choose the one that fits your budget. I recommend RTX 4050 for budget gaming laptops, RTX 4060 (+20% more powerful than RTX 4050) for mid-tier gaming laptops, and RTX 4070 (+20% more powerful than RTX 4060) for mainstream gaming, which will be the sweet spot for most. RTX 4080 / RTX 4090 is for gamers seeking exceptional performance or laptop enthusiasts Check <a className="underline" href="https://www.notebookcheck.net/Mobile-Graphics-Cards-Benchmark-List.844.0.html" target="_blank">GPU benchmarks</a> for detailed comparision.<br />
                If you are considering this for video editing / data science, get an NVDIA GPU to benifit from CUDA cores.
            </Component>

            <Component title="Processor" image={processor}>
                Most gaming laptops are paired with latest H, HX, and HK processors, which are all plenty powerful for gaming, so always prioritize GPU over CPU. For instance, its okay to get an i5 or Ryzen 5 processor if you get a better GPU for that price. For budget builds, i5 with RTX 4050 or RTX 4060 will suffice. Upgrading to i7 is more than enough for most. Upgrading to an i9 processor often yields diminishing returns unless you play CPU-intensive games, so I'd recommend against it.
                <Alert type="caution"><span className="text-xs lg:text-sm">Try to avoid Ryzen 7 7435HS. It has no iGPU and very poor battery life</span></Alert>
            </Component>

            <Component title="Memory" image={memory}>
                You should try getting a laptop with an upgradable memory for future if you can, but many good gaming laptops like ROG Zephyrus come with soldered one. For modern gaming, 16GB of RAM is typically sufficient. However, if you plan to multitask extensively or stream, 32GB of RAM is a better choice and should meet most demands. DDR4 memory performs well for gaming, and upgrading to DDR5 may not provide significant benefits for most users, so don't prioritize it unless your use case justifies the extra cost.
            </Component>

            <Component title="Screen" image={screen}>
                For budget gaming laptops, aim for at least an FHD (1080p) display, while mid-to-high-end gaming laptops should feature a 1440p display, which is sufficient for most gamers. 4K displays are suitable only when paired with high-end GPUs.
                Refresh rate of 120-144Hz is recommended for most users. Refresh rates beyond 144Hz are preferable only with high-end components capable of pushing more FPS in games.
                Screen size is mostly a matter of preference, but 16 inches tends to be the sweet spot for most people. Consider an IPS display with 300+ nits brightness for better visibility. OLED screens provide stunning visuals but are more expensive.
                <Alert type="caution"><span className="text-xs lg:text-sm">If you are looking at a gaming laptop for content creation like video editing, make sure it has good color accuracy</span></Alert>
            </Component>

            <h4 className="text-base lg:text-2xl">Budget gaming laptops</h4>
            <p className="mt-2 text-xs lg:text-sm">
                Expect an entry level gaming laptop to cost anywhere between &#8377;50,000 to &#8377;1,00,000. At this price point you can expect an RTX4050 or similar with 6GB graphics memory which is good for most games on 1080p at fairly high settings and demanding games at normal settings. It provides overall good performace for it's price.
            </p>
            <div className="flex flex-col gap-4 mt-4">
                {data.gaming.budget.map(
                    (laptop) => <Laptop key={laptop.name} name={laptop.name} link={laptop.link} description={laptop.description} image={laptop.image} specs={laptop.specs} pros={laptop.pros} cons={laptop.cons} />
                )}
            </div>

            <h4 className="text-base lg:text-2xl mt-8">Mainstream gaming laptops</h4>
            <p className="mt-2 text-xs lg:text-sm">
                Expect these cost anywhere between &#8377;1,00,000 to &#8377;2,00,000, and the price depends on the configuration (especially the GPU) you're getting. RTX 4070 can be around &#8377;30,000 more than the RTX 4060, but provides 20-30% better performance. Both versions are powerful enough for all modern games but RTX 4070 can handle 1440p at high settings with ease. The RTX 4060 has 8GB VRAM whereas RTX 4070 has 12GB.
            </p>
            <div className="flex flex-col gap-4 mt-4">
                {data.gaming.mid.map(
                    (laptop) => <Laptop key={laptop.name} name={laptop.name} link={laptop.link} description={laptop.description} image={laptop.image} specs={laptop.specs} pros={laptop.pros} cons={laptop.cons} />
                )}
            </div>

            <h4 className="text-base lg:text-2xl mt-8">High end gaming laptops</h4>
            <p className="mt-2 text-xs lg:text-sm">
                You're looking at either an RTX 4070 with much better build quality, premium feel, and portablility or an RTX 4080/RTX 4090 laptop for exceptional performance. However, keep in mid that the RTX 4080 is much more expensive than the RTX 4070, but gives a 40-50% improvement in games. Expect these to cost above &#8377;2,00,000, with RTX 4080 laptops costing costing &#8377;3,00,000 or more.
            </p>
            <div className="flex flex-col gap-4 mt-4">
                {data.gaming.high.map(
                    (laptop) => <Laptop key={laptop.name} name={laptop.name} link={laptop.link} description={laptop.description} image={laptop.image} specs={laptop.specs} pros={laptop.pros} cons={laptop.cons} />
                )}
            </div>
            <Alert type="info">I have only provided the product links to their official websites in case you want detailed configuration options and specifications. But these laptops frequently go for lower price at platforms like Amazon. Always be on a look out for such deals for your laptops.</Alert>
        </div>
    );
}