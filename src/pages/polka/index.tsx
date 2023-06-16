
import Image from 'next/image'
import Polkdadot from '@/components/Polkadot/Polka';


export default function index() {
  return (
    <div className='flex flex-col  w-full justify-center items-center'>
      <section className='relative h-screen w-full flex  justify-center items-center max-w-7xl' >
        <div className='w-2/4 space-y-10  backdrop-blur-sm rounded-lg' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span className='text-polkaPink'> Polkadot!</span>
          </h1>
          <h2 className='text-xl font-bold' >
          Lerne alles über die skalierbare, interoperable Blockchain für eine dezentrale Zukunft.
          </h2>
        </div>
        <div className='relative w-2/4 h-full grow'>
          <Image src={"/dot/Polkadot_Logo_Vertical.png"} fill alt='Ethereum Hero' />
        </div>
        <Image src={"/dot/polka_x.svg"} width={392/2} height={400/2} alt='polkadot ' className='absolute -left-60 bottom-0 ' />
        <Image src={"/dot/polka_line.svg"} width={289/2} height={258/2} alt='polkadot ' className='absolute -right-8 -top-2 ' />
      </section>

      <Polkdadot />
     



    </div >
  )
}