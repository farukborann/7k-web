"use client";
import Image from "next/image";
import { Title } from "@/components/Title";
import { TypeAnimation } from "react-type-animation";
import landing from "../../public/home-page/landing.webp";
import { ExperienceData, ExperienceDataType } from "@/models/experience.data";

export default function Home() {
 const historyJobTitle = "w-full  text-[20px]  ";

 return (
  <>
   <div className="relative h-[100dvh] mb-10 pb-[10vh] sm:pb-0 sm:h-[100vh] w-full ">
    <Image
     src={landing}
     loading="lazy"
     alt="Landin img"
     width={1600}
     height={900}
     className=" size-full object-[75%_0%] sm:object-top object-cover absolute inset-0"
     layout="right"
    />
    <div className="size-full inset-0 absolute landing-section flex flex-col justify-end pb-[40%] sm:pb-[15%] items-center z-50">
     <TypeAnimation
      sequence={[
       "Hello, my name is",
       1000,
       "Ömer Faruk BORAN",
       1000,
       "and I am a software developer.",
       1000,
       "you can find more about me below.",
       1000,
      ]}
      wrapper="h1"
      speed={30}
      className="font-bold sm:text-[52px] text-[10vw] text-center drop-shadow max-w-[90vw] sm:max-w-[80vw] uppercase "
      repeat={Infinity}
     />
    </div>
   </div>
   <div className="mx-auto  w-[95vw] sm:w-[85vw]  space-y-16 pb-20">
    <div className="space-y-10  ">
     <Title title="About" />
     <div className=" space-y-4 text-justify *:text-[18px] *:opacity-80">
      <p className="">
      Hello, I am <span className="font-bold">Ömer Faruk Boran</span>.
      I was born in Şanlıurfa and I am continuing my education in Konya. 
      I work as a Full Stack Developer with experience in both front-end and back-end development.
      Currently, I am in the process of learning about artificial intelligence.
      </p>
     </div>
    </div>
    <div className="space-y-10  ">
     <Title title="Education" />
     <div className="w-full flex items-center justify-start gap-x-4">
      <h2 className="text-[16px] opacity-80 text-nowrap">2021 / 2025 </h2> -
      <h1 className={historyJobTitle}>
       Konya Technical University Computer Science
      </h1>
     </div>
     <div className="w-full flex items-center justify-start gap-x-4">
      <h2 className="text-[16px] opacity-80 text-nowrap">2017 / 2021 </h2> -
      <h1 className={historyJobTitle}>
       Mem Anatolian Private High School
      </h1>
     </div>
    </div>
    <div className="space-y-10">
     <Title title="Experience" />
     <div className="space-y-14">
      {ExperienceData.map((exp: ExperienceDataType, index: number) => {
       return (
        <div key={index} className="space-y-4  ">
         <h1 className=" text-[35px] sm:text-[40px] font-bold  ">{exp.type}</h1>
         <h1 className="opacity-80 text-[16px] ">{exp.date}</h1>
         <div className=" flex flex-col sm:flex-row sm:items-center gap-x-4 *:sm:text-nowrap">
          <h1 className=" text-[24px] font-semibold ">{exp.jobTitle}</h1>
          <span className="hidden sm:block">-</span>
          <h1 className="w-full  text-[20px]">{exp.company}</h1>
         </div>
         <p className="text-[18px] text-justify">{exp.description}</p>
        </div>
       );
      })}
     </div>
    </div>
   </div>
  </>
 );
}


