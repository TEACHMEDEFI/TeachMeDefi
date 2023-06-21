
import { GeneralButton } from "@/components/Buttons/Buttons";
import Image from "next/image";
import Link from "next/link";
import { courseSections } from "@/data/coursesOverviewLinks";

export default function CourseOverview() {
  return (
    <section id='courses' className='py-44 flex flex-col items-center' >

      <div className="bg-gradient-to-r
      from-primaryBlue via-secondaryPurple to-primaryPink
        rounded-3xl relative text-white flex items-center"
      >
       
        <div className="mx-20 mb-20 mt-96" >
          <h2 className="text-4xl font-bold mb-6" >improve yourself to <br /> prepare for the better future.</h2>
          <p className="tracking-wider w-[500px] mb-5" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ab quisquam. Ad eveniet autem quae, obcaecati molestias error vitae beatae sunt, minima labore ab. Maxime inventore corrupti laboriosam porro beatae?</p>
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
        <div className="absolute left-36 top-16 w-[438px] h-[300px]">
          <Image src={"/home/inBackground/enterprise-ethereum.png"} fill alt="ethereum picknick" />
        </div>
      </div>



      {/* <div className='z-10'>
        <h3 className='text-4xl font-bold mb-14' >Was wir bieten ...</h3>
        <div className='flex flex-wrap gap-32' >
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl p-5 space-y-5 flex flex-col justify-between ' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/bitcoin-section-thumbnail.png"}
                  fill
                  loading='lazy'
                  className='object-cover rounded-xl'
                  alt='Find out more about Bitcoin quests on TeachMeDefi'
                />
              </div>
              <div className='max-w-[280px]'>
                <h4 className=' font-bold' >Bitcoin</h4>
                <p className='mt-5 max-w-72 tracking-wider text-sm'>
                  Text zu Bitcoin section
                </p>
              </div>
            </div>
            <GeneralButton
              href={"/btc"}
            >
              Weiter zu Bitcoin
            </GeneralButton>
          </div>
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl p-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/ethereum-section-thumbnail.png"}
                  fill
                  loading='lazy'
                  className='object-cover rounded-xl'
                  alt='Find out more about Etherum quests on TeachMeDefi'
                />
              </div>
              <div className='max-w-[280px]'>
                <h4 className=' font-bold' >
                  Ethereum
                </h4>
                <p className='mt-5 max-w-72 tracking-wider text-sm'>
                  Text zu Ethereum section
                </p>
              </div>
            </div>
            <GeneralButton
              href={"/eth"}
            >
              Weiter zu Ethereum
            </GeneralButton>
          </div>
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl p-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/polkadot-section-thumbnail.png"}
                  fill
                  loading='lazy'
                  className='object-cover rounded-xl'
                  alt='Find out more about Polkadot quest on TeachMeDefi'
                />
              </div>
              <div className='max-w-[280px]'>
                <h4 className=' font-bold' >
                  Polkadot
                </h4>
                <p className='mt-5 max-w-72 tracking-wider text-sm'>
                  text zu Polkadot section
                </p>
              </div>
            </div>
            <GeneralButton
              href={"/dot"}
            >
              Weiter zu Polkadot
            </GeneralButton>
          </div>
        </div>
      </div> */}
    </section>
  )
}
