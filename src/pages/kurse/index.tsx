import React from 'react'
import { PrimaryButton } from '@/components/Buttons/Buttons'
import Image from 'next/image'

export default function index() {
  return (
    <main className='py-12 flex flex-col-reverse lg:flex-row max-lg:justify-end min-h-[80vh]'>

      <div className='border border-red-700 w-full self-center'>

        <h1 className='xl:text-5xl text-4xl font-bold mb-5' >
          ÜBERBLICK ÜBER UNSERE KURSE
        </h1>
        <p className=' xl:text-lg text-sm backdrop-blur-lg pb-1 lg:pb-5rounded-3xl pr-3 mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem cupiditate, adipisci sit fugiat voluptate architecto reprehenderit voluptas quia sunt sed voluptates enim dolorem modi. Id dolore ipsa pariatur inventore.
          Dolor accusamus aliquam blanditiis, placeat voluptatum sapiente veritatis, eos quam perspiciatis inventore dolores eveniet rerum commodi, quidem unde ut omnis nulla id? Ut nam ullam, laudantium voluptatibus dicta commodi esse.
        </p>
        <div className='flex  gap-4 '>
        <PrimaryButton href='/eth' >
                ETHEREUM
              </PrimaryButton>
              <PrimaryButton href='/dot' >
                POLKADOT
              </PrimaryButton>
              <PrimaryButton href='/btc' >
                BITCOIN
              </PrimaryButton>
        </div>
      </div>


      <div className='border border-green-700 w-full relative'>
        {/* <div className="absolute left-[50%] translate-x-[-50%] top-0 w-[80%] aspect-[707/390]">
          <Image src={"/kurse-page/old-ship-no-trust.png"} fill alt="_________" />
        </div>
        <div className="absolute left-[46%] translate-x-[-50%] top-20 w-[50%] aspect-[337/435] ">
          <Image src={"/kurse-page/merge-ship.png"} fill alt="_________" />
        </div> */}
      


      </div>

    </main>
  )
}
