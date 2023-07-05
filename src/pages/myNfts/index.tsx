
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
      <section className='h-[20vh] w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl max-lg:mb-24' >
        <div className=' my-14 md:my-32 lg:my-0 lg:w-2/4 space-y-5' >
          <h1 className='xl:text-5xl text-4xl font-bold' >
            Meine Gesammelten <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              NFTs
            </span>
          </h1>
          <h2>Wenn du schon Fortschritt NFTs auf unserer Seite gemintet hast, dann werden sie dir hier angezeigt</h2>
         
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