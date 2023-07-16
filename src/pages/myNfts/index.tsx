import { useEffect } from 'react';
import { switchNetworkIfNeeded} from '../../pages/api/ethereum-api'
import NftCard from '@/components/NftCards/NftCard';



export default function Index() {
  useEffect(() => {
    switchNetworkIfNeeded()

  }, [])

  return (
    <div className='flex flex-col  w-full justify-center items-center relative mb-32 pt-20'>
      <section className='h-[20vh] w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl max-lg:mb-24' >
        <div className=' my-14 md:my-32 lg:my-0 lg:w-2/4 space-y-5' >
          <h1 className='xl:text-5xl text-4xl font-bold' >
            Meine Gesammelten <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              NFTs
            </span>
          </h1>
          <h2>Willkommen in deiner NFT-Sammlung! Hier siehst du alle NFTs, die du durch das Absolvieren der Lern-Quests in unseren Bootcamps verdient hast. 
            Verbinde deine Ethereum Wallet, um deine Fortschritts-NFTs zu sehen und freu dich auf weitere spannende Lernabenteuer! 
            Viel Spaß beim Lernen und Sammeln!</h2>
         
        </div>

      </section>

      <section className='mt-22 px-5 w-full mb-44 nft-card-section' >
        <h2 className="xl:text-2xl text-2xl font-bold">Ethereum Quests</h2>
        <div className="nft-card-container flex relative mt-5 mb-20">
          
          <NftCard questSectionId={'eth-quest-1'} questIndex={0}/>
          <NftCard questSectionId={'eth-quest-2'} questIndex={1}/>
          <NftCard questSectionId={'eth-quest-3'} questIndex={2}/>
          <NftCard questSectionId={'eth-quest-4'} questIndex={3}/>
          <NftCard questSectionId={'eth-quest-5'} questIndex={4}/>
          <NftCard questSectionId={'eth-quest-6'} questIndex={5}/>
        </div>
        <h2 className="xl:text-2xl text-2xl font-bold">Polkadot Quests</h2>
        <div className="nft-card-container flex relative mt-5 mb-20">
          
          <NftCard questSectionId={'dot-quest-1'} questIndex={0} />
          <NftCard questSectionId={'dot-quest-2'} questIndex={1} />
          <NftCard questSectionId={'dot-quest-3'} questIndex={2} />
          <NftCard questSectionId={'dot-quest-4'} questIndex={3} />
          <NftCard questSectionId={'dot-quest-5'} questIndex={4} />
        </div>

      </section>
    </div >
  )
}