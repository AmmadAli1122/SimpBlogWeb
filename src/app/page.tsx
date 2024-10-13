import Image from "next/image";
import image1 from "../app/components/image/img1.jpg"
import image2 from "../app/components/image/img2.jpg"
import image3 from "../app/components/image/img3.jpg"
import image4 from "../app/components/image/img4.jpg"
import image5 from "../app/components/image/img5.jpg"
import image6 from "../app/components/image/img6.jpg"
import Header from "../app/components/header/page"

type IData= {
  title:string,
  description:string,
  link:string,
  img:any
}
const data:IData[] =[
  {
    title:"The fluffiest robot of CES 2021 is back thanks to Casio",
    description:"Moflin is an AI emotional support pet that thrives on cuddles.If you watched that Star Trek episode about the tribbles and thought, I need one of those in my life (minus the rapid reproduction problem), Casio’s got just the thing for you. The company is now taking pre-orders in Japan for Moflin, the adorable robotic plushie with AI “emotional capabilities ",
    link:"https://www.engadget.com/ai/the-fluffiest-robot-of-ces-2021-is-back-thanks-to-casio-174714733.html",
    img:image1
  },
  {
    title:"New iPhone SE 4 case leak highlights three things to expect",
    description:"Apple leaker Sonny Dickson has posted an apparent image of a case designed for the upcoming iPhone SE 4, which is expected to launch next spring. Although the images don’t showcase any groundbreaking new details, they do highlight some things that we should expect with the iPhone SE.",
    link:"https://9to5mac.com/2024/10/12/iphone-se-4-case-leak/",
    img:image2
  },
  {
    title:"Today’s The 25th Anniversary of The World’s First GPU: The NVIDIA GeForce 256",
    description:"Back in 1999, the PC gaming market didn't have a dedicated solution to power the growing needs of gamers. Before the GPU became a household name, add-in solutions were referred to as 3D game and video accelerators which included the likes of the Riva TNT or the 3dfx Voodoo3. With the launch of the GeForce 256, the entire industry changed forever.",
    link:"https://wccftech.com/nvidia-geforce-256-the-worlds-first-gpu-25th-anniversary/",
    img:image3
  },
  {
    title:"Finish the Puzzle on the Fortnitemares Twitch Extension!",
    description:"Fortnitemares 2024 is here, and among the fiends and frights is something puzzling. That’s because the Fortnitemares Twitch extension is now available! If you follow participating Fortnite content creators on Twitch, you’ll notice puzzle pieces appearing on their streams. Collect pieces to complete the puzzle and earn The Carver's Challenge Loading Screen in Fortnite!",
    link:"https://www.fortnite.com/news/finish-the-puzzle-on-the-fortnitemares-twitch-extension?lang=en-US",
    img:image4
  },
  {
    title:"I finally tried the iPhone Action button — and I don’t get it",
    description:"This is what happened to me as I recently upgraded my iPhone 14 Pro Max to an iPhone 15 Pro Max. Yes, I know, I am very late to the party — my new phone has since given way to the iPhone 16 Pro Max in Apple's lineup — but I wanted to wait until we had a bit more information about Apple Intelligence features and when we could expect to see them.",
    link:"https://www.tomsguide.com/phones/iphones/i-finally-tried-the-iphone-action-button-and-i-dont-get-it",
    img:image5
  },
  {
    title:"Motorola Android 15 roadmap revealed, and this 2024 phone isn't on the list",
    description:"Motorola has historically lagged far behind rivals as far as software update policies are concerned. This is slowly changing for some devices, and it’s quietly revealed which phones will get Android 15.",
    link:"https://www.androidauthority.com/motorola-android-15-roadmap-3489715/",
    img:image6
  }
];  

export default function Home() {
  return (
    <div>
      <Header/> 
    <div className="container">
      {data.map((data)=>(
      <div className="cards">
        <Image src={data.img} alt="image" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <a href={data.link}><button>read more</button></a>
      </div>
      ))}
    </div>
    </div>
  );
}
