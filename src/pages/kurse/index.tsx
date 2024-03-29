import React from 'react'
import { PrimaryButton } from '@/components/Buttons/Buttons'
import Image from 'next/image'

export default function index() {
  return (
    <main className='py-12 flex flex-col lg:flex-row max-lg:justify-end 
    lg:min-h-[700px] xl:w-[1240px] mx-auto px-5'>

      <div className='text-center lg:text-start lg:w-1/2 lg:pt-32 xl:pt-24'>

        <h1 className='xl:text-5xl text-4xl font-bold mb-5' >
          Kursübersicht
        </h1>
        <p className=' xl:text-lg text-sm backdrop-blur-lg pb-1 lg:pb-5rounded-3xl pr-3 mb-5'>
          Seit 2017 meistern wir alle Markthöhen und -tiefen und haben daraus prägnante Kurse geformt, 
          die dich optimal auf deine Krypto-Odyssee vorbereiten. Wir erschließen dir die Grundlagen von Bitcoin, 
          Ethereum und Polkadot und belohnen deinen Fortschritt mit einzigartigen NFTs. Starte jetzt und werde fit 
          für die Zukunft in der Kryptowelt!
        </p>
        <div className='flex flex-wrap gap-4 max-lg:justify-center'>
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
        <div className=" absolute  md:hidden w-[105vw] min-w-[700px] left-1/2 translate-x-[-50%] aspect-[256/125]">
          <Image src={"/home/landing-stripe-sm.svg"} fill alt="Gradient background with Bitcoin, Ethereum, Polkadot, Brave, Talisman, Metamask, Trezor, Ledger and Trust Wallet logos" />
        </div>
        <div className=" absolute max-md:hidden lg:hidden w-[105vw] min-w-[900px] left-1/2 translate-x-[-50%] aspect-[256/125]">
          <Image src={"/home/landing-stripe.svg"} fill alt="Gradient background with Bitcoin, Ethereum, Polkadot, Brave, Talisman, Metamask, Trezor, Ledger and Trust Wallet logos" />
        </div>
        <div className="absolute hidden lg:block left-0 translate-x-[-10%] top-0 translate-y-[-10%] w-[250%] aspect-square">
          <Image src={"/home/landing_rgb_donut.svg"} fill alt="Gradient background with Bitcoin, Ethereum, Polkadot, Brave, Talisman, Metamask, Trezor, Ledger and Trust Wallet logos" />
        </div>
        <div className='h-[300px] md:h-[400px] lg:hidden' />

      </div>

    </main>
  )
}
