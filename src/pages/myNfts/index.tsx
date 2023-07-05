
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ethQuests } from '@/data/eth';
import { ethTheory } from '@/data/eth/ethTheory';
import { generalLessons } from '@/data/generalLessons';
import LessonsList from '@/components/LessonsList/LessonsList';
import LessonsListNew from '@/components/LessonsList/LessonsListNew';
import ReactPlayer from "react-player"
import { PrimaryButton } from "@/components/Buttons/Buttons";
import StickyHelpButton from '@/components/Buttons/StickyHelpButton'
import { useNFTBalance, switchNetworkIfNeeded, useConnectedToMetaMask, QuestNftContractAddresses } from '../../pages/api/ethereum-api'
import NftCard from '@/components/NftCards/NftCard';


export default function Index() {
  useEffect(() => {
    switchNetworkIfNeeded()

  }, [])


  const renderNftCards = () => {
   
  }



  return (
    <div className='flex flex-col  w-full justify-center items-center relative mb-32'>
      <section className='h-[90vh] w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl max-lg:mb-24' >
        <div className=' my-14 md:my-32 lg:my-0 lg:w-2/4 space-y-5' >
          <h1 className='xl:text-5xl text-4xl font-bold' >
            Meine Gesammelten <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              NFTs
            </span>
          </h1>
          {/* <h2 className='text-xl font-bold' >Hier erfährst du alles über die zweitgrößte <br /> Kryptowährung der Welt.</h2> */}
          <h2 className='xl:text-lg text-sm pb-1 lg:pb-10 backdrop-blur-lg rounded-3xl pr-10 ' >
            Verbinde einfach deine Wallet mit unserer Page, und schon kannst du hier deine NFTs sehen!

          </h2>
        </div>
        <div className='relative w-full lg:w-2/4 h-full grow'>
          <Image src={"/eth/eth_hero.png"} fill alt='Ethereum Hero' />
        </div>

      </section>

      <section className='mt-22 flex relative px-5 w-full mb-44 nft-card-container' >

          <NftCard questSectionId={'eth-quest-1'} />
          <NftCard questSectionId={'eth-quest-2'} />
          <NftCard questSectionId={'eth-quest-3'} />
          <NftCard questSectionId={'eth-quest-4'} />
          <NftCard questSectionId={'eth-quest-5'} />
          <NftCard questSectionId={'eth-quest-6'} />
          <NftCard questSectionId={'dot-quest-1'} />
          <NftCard questSectionId={'dot-quest-2'} />
          <NftCard questSectionId={'dot-quest-3'} />
          <NftCard questSectionId={'dot-quest-4'} />
          <NftCard questSectionId={'dot-quest-5'} />

      </section>

    
    </div >
  )
}