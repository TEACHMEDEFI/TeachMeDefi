
import { GeneralButton } from "@/components/Buttons/Buttons";
import Image from "next/image";
import Link from "next/link";
import { courseSections } from "@/data/coursesOverviewLinks";

export default function CourseOverview() {
  return (
    <section id='courses' className=' flex flex-col items-center relative pb-44' >



      <div className="bg-gradient-to-r
      from-primaryBlue via-secondaryPurple to-primaryPink
        rounded-3xl relative text-white flex items-center "
      >
       <div className="absolute -right-72 -top-72 w-[500px] h-[358px] z-10">
        <Image src={"/home/inBackground/doge-master.png"} fill alt="ethereum doge robot" />
      </div>
        <div className="mx-20 mb-20 mt-96" >
          <h2 className="text-4xl font-bold mb-6" >Krypto Bootcamp: <br />Dein Start in Krypto</h2>
          <p className="tracking-wider w-[500px] mb-5" >
          {/* Unser Krypto Bootcamp führt dich in nur 90 Minuten durch die Grundlagen von Blockchains wie Bitcoin,  */}
          Unser Krypto Bootcamp führt dich in nur 90 Minuten durch die Grundlagen von Blockchains wie
          Ethereum und Polkadot. Lerne auf deine eigene Art und Weise und erhalte Belohnungen in Form von 
          NFTs für deinen Fortschritt. Mach den ersten Schritt in die Zukunft der Finanzen mit TEACHMEDEFI!
            </p>
          <div className="flex" >
            {courseSections && courseSections.map((course, i) => (
              <div key={course.title} className="flex" >
                <Link href={course.href} className="font-bold text-xl" >{course.title}</Link>
                {courseSections.length > i + 1 && <div className="mx-3 font-bold text-xl">|</div>}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[550px] h-[800px]">

        </div>
        <div className="absolute right-12 bottom-0 w-[500px] h-[750px]">
          <Image src={"/home/sohejl.png"} fill alt="teaching crypto" />
        </div>
        <div className="absolute left-16 top-16 w-[438px] h-[300px]">
          <Image src={"/home/inBackground/enterprise-ethereum.png"} fill alt="ethereum picknick" />
        </div>
      </div>



  
    </section>
  )
}
