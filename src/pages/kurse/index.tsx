import React from 'react'
import { PrimaryButton } from '@/components/Buttons/Buttons'
import Image from 'next/image'

export default function index() {
  return (
    <main className='py-12 flex flex-col-reverse lg:flex-row max-lg:justify-end 
    min-h-[80vh] xl:w-[1240px] mx-auto px-5'>

      <div className='w-1/2'>

        <h1 className='xl:text-5xl text-4xl font-bold mb-5' >
          ÜBERBLICK ÜBER UNSERE KURSE
        </h1>
        <p className=' xl:text-lg text-sm backdrop-blur-lg pb-1 lg:pb-5rounded-3xl pr-3 mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem cupiditate, adipisci sit fugiat voluptate architecto reprehenderit voluptas quia sunt sed voluptates enim dolorem modi. Id dolore ipsa pariatur inventore.
          Dolor accusamus aliquam blanditiis, placeat voluptatum sapiente veritatis, eos quam perspiciatis inventore dolores eveniet rerum commodi, quidem unde ut omnis nulla id? Ut nam ullam, laudantium voluptatibus dicta commodi esse.
        </p>
        <div className='flex flex-wrap gap-4 '>
          <PrimaryButton customClassWrapper='max-sm:w-44 text-center' href='/eth' >
            ETHEREUM
          </PrimaryButton>
          <PrimaryButton customClassWrapper='max-sm:w-44 text-center' href='/dot' >
            POLKADOT
          </PrimaryButton>
          <PrimaryButton customClassWrapper='max-sm:w-44 text-center' href='/btc' >
            BITCOIN
          </PrimaryButton>
        </div>
      </div>


      <div className='relative flex-1'>
        {/* <div className='courses-donut' /> */}

        <div className="absolute left-0 translate-x-[-10%] top-0 translate-y-[-10%] w-[250%] aspect-square">
          <Image src={"/home/landing_rgb_donut.svg"} fill alt="_________" />
        </div>
        {/* <div className="absolute left-[50%] translate-x-[-50%] top-0 w-[80%] aspect-[707/390]">
          <Image src={"/kurse-page/old-ship-no-trust.png"} fill alt="_________" />
        </div>
        <div className="absolute left-[46%] translate-x-[-50%] top-20 w-[50%] aspect-[337/435] ">
          <Image src={"/kurse-page/merge-ship.png"} fill alt="_________" />
        </div> */}
        {/* <div className="relative w-full sm:w-[500px] lg:w-full aspect-[780/533] ">
          <Image src={"/kurse-page/kurse-hero-people.png"} fill alt="_________" />
        </div>  */}






      </div>

    </main>
  )
}
