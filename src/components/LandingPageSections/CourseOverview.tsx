
import { GeneralButton } from "@/components/Buttons/Buttons";
import Image from "next/image";
import Link from "next/link";
import { courseSections } from "@/data/coursesOverviewLinks";

export default function CourseOverview() {
  return (
    <section id='courses' className=' flex flex-col items-center relative pb-24 lg:pb-44 px-5' >



      <div className="bg-gradient-to-r
      from-primaryBlue via-secondaryPurple to-primaryPink
        rounded-3xl relative text-white flex lg:items-center max-xl:w-full xl:w-[1240px]"
      >
       <div className="absolute max-xl:hidden -left-72 -top-72 w-0 xl:w-[500px] h-0 xl:h-[358px] z-10">
        <Image src={"/home/inBackground/doge-master.png"} fill alt="ethereum doge robot" />
      </div>
        <div className=" mx-4 sm:mx-10 lg:mx-20 mb-10 lg:mb-20 mt-10 sm:mt-16 lg:mt-96 z-10 backdrop-blur-md " >
          <h2 className=" text-2xl sm:text-4xl font-bold mb-6" >Krypto Bootcamp: <br />Dein Start in Krypto</h2>
          <p className="tracking-wider  md:w-[360px] lg:w-[420px] xl:w-[500px] mb-5" >
          {/* Unser Krypto Bootcamp führt dich in nur 90 Minuten durch die Grundlagen von Blockchains wie Bitcoin,  */}
          Unser Krypto Bootcamp führt dich in nur 90 Minuten durch die Grundlagen von Blockchains wie
          Bitcoin, Ethereum und Polkadot. Lerne auf deine eigene Art und Weise und erhalte Belohnungen in Form von 
          NFTs für deinen Fortschritt. Mach den ersten Schritt in die Zukunft der Finanzen mit TEACHMEDEFI!
            </p>
          <div className="flex flex-wrap" >
            {courseSections && courseSections.map((course, i) => (
              <div key={course.title} className="flex" >
                <Link href={course.href}  className="font-bold text-2xl border px-2 rounded " >
                  {course.title}
                  </Link>
                {courseSections.length > i + 1 && <div className="mx-3 font-bold text-2xl">|</div>}
              </div>
            ))}
          </div>
        </div>
        <div className="xl:w-[550px] h-[840px] sm:h-[800px] max-lg:hidden ">

        </div>
        <div className="absolute max-md:hidden right-4 sm:right-12 bottom-0 w-[260px]  lg:w-[460px] xl:w-[500px] h-[390px]  lg:h-[690px] xl:h-[750px]">
          <Image src={"/home/sohejl.png"} fill alt="teaching crypto" />
        </div>
        <div className="absolute max-lg:hidden left-16 top-16 lg:w-[438px] lg:h-[300px]">
          <Image src={"/home/inBackground/enterprise-ethereum.png"} fill alt="ethereum picknick" />
        </div>
      </div>



  
    </section>
  )
}
