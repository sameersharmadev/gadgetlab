export const laptops={
    gaming:{
        budget:[
        {
            id:"lenovoloq",
            name:"Lenovo LOQ",
            link: "https://www.lenovo.com/in/en/p/laptops/loq-laptops/lenovo-loq-15irx9/83dv00l9in",
            description:"One of the best budget gaming laptops in this range. It features an excellent build quality for a budget laptop, much better than alternatives at this price range. You could get an NVDIA RTX 4050 at a really good price, and its often discounted heavily. For a budget entry level gaming laptop, I suggest look no further than Lenovo LOQ",
            image:"https://m.media-amazon.com/images/I/616fX5Yh00L._SX679_.jpg",
            specs:{
                graphics:"NVDIA RTX 4050",
                processor:"Intel® Core™ i5-13450HX",
                memory:"24 GB ",
                screen:"15.6'' FHD IPS 144Hz 300 nits",
                storage:"512GB NVME SSD"
            },
            pros:["Good build quality compared to competitors","Features like NVIDIA Advanced Optimus Mode and G-Sync are rare at this price"],
            cons:["Some screen wobble","Won't recommend Intel ARC GPU version, get RTX 2050 for same price","Avoid Ryzen 7 7435HS (Explained above) "],
        },
        {
            id:"victus4050",
            name:"HP Victus 15",
            link: "https://www.hp.com/in-en/shop/laptops-tablets/personal-laptops/victus-laptops.html",
            description:"Another good alternative to LOQ that goes frequently on sale too. It's has a minimalist design, great for those who want a gaming laptop that does not look too over the top. ",
            image:"https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_33.png",
            specs:{
                graphics:"NVDIA RTX 4050",
                processor:"Intel® Core™ i5-13240H",
                memory:"16 GB ",
                screen:"15.6'' FHD IPS 144Hz 250nits",
                storage:"1TB NVME SSD"
            },
            pros:["Somewhat good build quality but some screen wobble"],
            cons:["Worse Wifi quality","Dim screen"],
        },
        
        {
            id:"asustuf",
            name:"ASUS TUF A15",
            link:"https://in.store.asus.com/gaming-laptop-asus-tuf-gaming-a15-fa577nu-lp082w.html",
            description:"Another great option for entry level gaming laptops. It is a good alternative to Lenovo LOQ laptops but usually costs more. Beware of its Ryzen 7 7435 processor model for reasons mentioned above. The specifications do mention a 140W TGP for the RTX 4050 but realistically it stops showing improvements after about 100W.",
            image:"https://in.store.asus.com/media/catalog/product/f/a/fa577nu-lp082w.png?width=439&height=439&store=en_IN&image-type=image",
            specs:{
                graphics:"NVDIA RTX 4050",
                processor:"Ryzen 7 7735HS",
                screen:"15.6'' 144Hz",
                memory:"16 GB",
                storage:"512 GB NVME SSD"
            },
            pros:["Good build quality","Good value for money"],
            cons:["Dim display at 250nits"],
        },
    ],
    mid:[
        {
            id:"legion5i",
            name:"Lenovo Legion 5i",
            link: "https://www.lenovo.com/in/en/p/laptops/legion-laptops/legion-5-series/lenovo-legion-5i-gen-9-16-inch-intel/len101g0035",
            description:"Another big win for Lenovo. The legion 5i is one of the best in mid tier mainstream gaming laptops. It comes with both RTX 4060 and RTX 4070 configurations which can frequently be found on sales. RTX 4070 is generally 20-30% faster than RTX 4060 in most games",
            image:"https://m.media-amazon.com/images/I/61SAVk2BzpL._SX679_.jpg",
            specs:{
                graphics:"NVDIA RTX 4070",
                processor:"Intel® Core™ i7-14650HX",
                memory:"16 GB",
                screen:"16'' 2560x1600 IPS 165Hz 350 nits",
                storage:"1TB SSD"
            },
            pros:["Provides customization options","Better battery life for a gaming laptop"],
            cons:["Mediocre speakers"],
        },
        {
            id:"acerhelios",
            name:"Acer Helios Neo",
            link: "https://www.acer.com/in-en/predator/laptops/helios/helios-neo-16",
            description:"Excellent gaming laptop just like the Legion 5i, with slightly better performance in similar configurations, lower latency, and vibrant display, but slightly less portable",
            image:"https://m.media-amazon.com/images/I/61cEq+fQcxL._SX679_.jpg",
            specs:{
                graphics:"NVDIA RTX 4070",
                processor:"Intel® Core™ i9-14900HX",
                memory:"16 GB",
                screen:"16'' 2560x1600 240Hz",
                storage:"1TB SSD"
            },
            pros:["Good colour accuracy","Low latency which is great for competitive gaming"],
            cons:["Worse battery life"],
        },
        {
            id:"zephyrus14",
            name:"ASUS Zephyrus G14",
            link: "https://rog.asus.com/in/laptops/rog-zephyrus/rog-zephyrus-g14-2024/",
            description:"Amazing laptop for those who love portability, and it's the lightest and thinnest gaming laptop. It comes with a beautiful OLED display with large color gamut. It has a great battery life too.",
            image:"https://dlcdnwebimgs.asus.com/gain/D366E1B6-C6E2-41B1-BF53-EF909B21FF09/w250",
            specs:{
                graphics:"NVDIA RTX 4060",
                processor:"AMD Ryzen™ 9 8945HS",
                memory:"16 GB",
                screen:"14'' 3K OLED 120Hz",
                storage:"1TB SSD"
            },
            pros:["Amazing portability","Great battery life","OLED display","Good color accuracy"],
            cons:["Comes with only an RTX 4060. You can buy an RTX 4070 laptop at this price point but with worse build quality and portability","Less upgradale with soldered memory"],
        },
    ],
    high:[
        
        {
            id:"legion7i",
            name:"Lenovo Legion 7i",
            link: "https://www.lenovo.com/in/en/p/laptops/legion-laptops/legion-7-series/legion-7i-gen-9-16-inch-intel/len101g0037",
            description:"With a premium aluminium chassis and stylish look, this is a well rounded premium gaming laptop. It has an HX processor which gives it slight edge over the competing Zephyrus G16, with slightly better performance in games. It has more upgradability but slightly worse battery than Zephyrus. Also, it only has an IPS display.",
            image:"https://m.media-amazon.com/images/I/81PwRP+de0L._SX679_.jpg",
            specs:{
                graphics:"NVDIA RTX 4070",
                processor:"Intel® Core™ i9-14900HX",
                memory:"16 GB",
                screen:"16'' 3.2K 165Hz",
                storage:"1TB SSD"
            },
            pros:["Strong build quality","Excellent upgradability"],
            cons:["Slightly worse battery life than competing Zephyrus","Less portable than Zephyrus"],
        },
        {
            id:"zephyrus16",
            name:"ASUS Zephyrus G16",
            link: "https://rog.asus.com/in/laptops/rog-zephyrus/rog-zephyrus-g16-2024-ga605/",
            description:"The most portable 16 inch gaming laptop. It provides a good balance of power and battery efficiency, comes with a nice OLED display, and its very slim and portable. However, it is less upgradable than the competing Legion 7i as it comes with soldered memory. Its slightly less powerful than Legion but is much more portable",
            image:"https://dlcdnwebimgs.asus.com/gain/81DE2B4B-C365-4D4D-AA81-984261EFBE89/w250",
            specs:{
                graphics:"NVDIA RTX 4070",
                processor:"AMD Ryzen™ AI 9 HX 370",
                memory:"32 GB",
                screen:"16'' 2.5K OLED 240Hz",
                storage:"2TB SSD"
            },
            pros:["Excellent portability","Great battery life","OLED display","Good build quality"],
            cons:["Limited upgradability"],
        },
        {
            id:"legionpro7",
            name:"Lenovo Legion Pro 7i",
            link: "https://www.lenovo.com/in/en/p/laptops/legion-laptops/legion-7-series/lenovo-legion-pro-7i-gen-9-16-inch-intel/83decto1wwin1",
            description:"If you have the budget, and want exceptional performance, the Lenovo Legion pro 7i will deliver it. It has a good build quality, comes with an RTX 4080 or RTX 4090 at a justified price, has a nice screen, and offers excellent performance. For comparision, RTX 4080 is significantly (30-40%) more powerful than an RTX 4070",
            image:"https://m.media-amazon.com/images/I/81JUbPkcH4L._SX679_.jpg",
            specs:{
                graphics:"NVDIA RTX 4080",
                processor:"Intel® Core™ i9-14900HX",
                memory:"16 GB",
                screen:"16'' 2560x1600 IPS 240Hz 500 nits",
                storage:"1TB SSD"
            },
            pros:["Provides good price for RTX 4080 compared to competing laptops"],
            cons:["No options for OLED display"],
        },
    ]
},
    
}