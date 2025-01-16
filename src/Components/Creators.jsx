import React from 'react';
import creatorHero from "../assets/img/creatorHero.webp";
import processor from "../assets/img/processor.png";
import graphicsCard from "../assets/img/graphics.png";
import memory from "../assets/img/memory.png";
import screen from "../assets/img/screen.png";
import { useContext } from "react";
import { LaptopContext } from "../App";
import Laptop from "./Laptop";
import Component from "./Component";
import Alert from "./Alerts";

export default function Creators() {
    const data = useContext(LaptopContext);
    console.log(data);

    return (
        <div className="w-9/12 lg:w-8/12 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-8 lg:mt-16 my-8 lg:my-16 select-none gap-4 lg:gap-0 text-center lg:text-left lg:h-auto">
                <div className="lg:w-2/3">
                    <div className="flex flex-col gap-2 lg:gap-4">
                        <h2 className="text-xl lg:text-4xl text-light">Find the <span className="font-semibold">perfect</span> creator laptop</h2>
                        <p className="text-xs lg:text-base">Creator laptops are ideal for professionals or enthusiasts in content creation fields such as video editors, graphic designers, 3D artists or animators, and game developers. These often come with a strong CPU and GPU to be able to perform these tasks with ease, and a color accurate display that creators need.</p>
                    </div>
                </div>
                <div className="lg:block w-full lg:w-2/5">
                    <img src={creatorHero} alt="Gaming laptop hero image" className="lg:w-full" />
                </div>
            </div>

            <Alert type="info">
                Creative work is a broad term for various use cases with different requirements. Some may need a laptop for graphic design or photo editing, while others focus on 3D modeling, video editing, or audio production. Each use case has distinct needs, which I’ll address below in detail. But in short, design and photo editing benefit from a high-quality touch display with decent components, video editors and 3D may artists require a good display, a powerful CPU, and a dedicated GPU, while writers and music producers need to prioritize storage.
            </Alert>

            <Component title="Processor" image={processor}>
                Photo editing, music production and design tools often need strong single core performance, for which Intel's latest H series processors like i7-13700H, Ryzen's H or HS series like Ryzen 7 7840HS, and Apple's M2+ chips are more than enough. Video editing and 3D modelling also need strong multicore performance, where Intel's HX series like Intel Core i9-13900HX or Apple's M2 Pro/Max chips shine. 
            </Component>

            <Component title="Graphics Card" image={graphicsCard}>
                If you are only looking at basic graphic design, or photo editing, an integrated GPU may suffice. For professional graphic designing and photography, RTX 4050 (6GB VRAM) is generally recommended. NVDIA GPU are highly recommended over AMD for video content and 3D work. For video based content creation, choose at least an RTX 4060 (8GB VRAM) to easily handle 4K editing, animations, color grading, multicams, etc. RTX 4070 would be better choice for 8K or professional grade video content. For 3D modelling, high power GPU is very essential, so an RTX 4080 or RTX 4090 is generally the best choice for optimal rendering. Music producers don't really need a dedicated GPU.
            </Component>

            <Component title="Screen" image={screen}>
                A color gamut is representative of the colors that can be accurately reproduced by output device compared to human eye. Following is the explaination of some standard color spaces. sRGB covers smallest range and very dull and muted. Adobe RGB is broader color gamut, particularly useful for graphic designer and photographers (90-100% Adobe RBG is ideal). DCI-P3 covers slightly smaller than Adobe RGB, leaning to warmer colors, and is standard for video editors and film prooduction (90-100% DCI-P3 is ideal). Delta E is another important measure referring to the accuracy with which color is reproduced compared to how human eye percieves (lower is better, less than 2 is good). As far as display technology goes, OLED has best color accuracy but is significantly more expensive than IPS, which still offers good accuracy. For most creative work, QHD or 4K resolution is recommended.
            </Component>

            <Component title="Memory" image={memory}>
                You should try getting a laptop with an upgradable memory for future if you can. Minimum 16 GB is needed to run most modern creator applications. Go with 32GB to allow some room for multitasking. Go bayond this only for advanced 3D rendering, large scale creation, or very heavy multitasking with resource intensive tools.
            </Component>

            
            <Alert type="caution">
                Since these laptops are generally targeted at professionals, they are often costlier than gaming or office laptops with similar specs. But it does come with a benefit of more professional centric laptop that is more inclined to the needs in content creation like SD card slots, better display, pen compatibility, etc. If you do decide to buy a gaming laptop, make sure you get what's needed for your use case. I would also provide some general laptop recommendations which can serve well in content creation so you don't have to research too much, but if you don't find them matching your usecase, its good to look for one yourself.
            </Alert>
            <h4 className="text-base lg:text-2xl mt-8">Budget gaming laptops</h4>
            <p className="mt-2 text-xs lg:text-sm">
                Expect an entry level gaming laptop to cost anywhere between &#8377;50,000 to &#8377;1,00,000. At this price point you can expect an RTX4050 or similar with 6GB graphics memory which is good for most demanding games on 1080p at fairly high settings. It provides overall good performace for it's price.
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