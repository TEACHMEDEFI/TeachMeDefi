
import { useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { SecondaryButton } from "../Buttons/Buttons"
import Link from 'next/link'
import Image from "next/image"
import AboutUsModal from '../Modals/AboutUsModal'

export default function AboutUs() {
  const [showPopup, setShowPopup] = useState<boolean>(false);


  useEffect(() => {

  }, [showPopup]);


  /*
  * Handles Modal Toggle and is passed as props
  */
  const togglePopup = (show: boolean) => {
    setShowPopup(show)
  }

  const onOpen = () => {
    setShowPopup(true)
  }


  return (
    <section id='about-us' className='flex flex-col items-center mb-5 px-5' >
      <div className="w-full flex flex-col items-center  max-w-[1240px]"  >
        <div className='z-10'>
          <h3 className="text-4xl font-bold mb-6">Über uns</h3>

          <p className="tracking-wide leading-relaxed ">
            Seit 2017 setzen wir uns intensiv mit dem Thema DeFi und der Krypto-Welt auseinander.
            Wir können auf persönliche Erfolge und Misserfolge zurückgreifen. Daher sind wir auch
            die richtigen, um Dir bei deinem Einstieg zu helfen. Wir wollen unsere Erfahrungen an
            Dich weitergeben und Dir mit Tipps und Tricks zur Seite stehen. Wir freuen uns auf Dich!
          </p>
          <Link
            href={"/ueber-uns"}
            className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent '
          >
            Erfahre mehr über uns...
          </Link>
          {/* <SecondaryButton onClick={onOpen}>Mehr lesen</SecondaryButton> */}
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 lg:gap-16 xl:gap-28 -mt-10 " >



        <div className='-mt-10' >
            <div className="relative w-[250px] h-[395px]" >
              <div className="absolute bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[250px] h-[250px] bottom-0
              "
              >
                <div className="absolute w-[250px] h-[396px] bottom-0 rounded-b-full" >
                  <Image
                    src={"/home/aboutUs/sohejl.png"}
                    className="rounded-3xl"
                    fill
                    loading='lazy'
                    alt="Profil picture Sohejl"
                  />
                </div>
              </div>
            </div>
            <h4 className="font-bold mb-2 text-2xl text-center mt-5" >Sohejl</h4>
          </div>

          <div className='-mt-10' >
            <div className="relative w-[250px] h-[395px]" >
              <div className="absolute bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[250px] h-[250px] bottom-0
              "
              >
                <div className="absolute w-[250px] h-[396px] bottom-0 rounded-b-full" >
                  <Image
                    src={"/home/aboutUs/jan.png"}
                    className="rounded-3xl"
                    fill
                    loading='lazy'
                    alt="Profil picture Jan"
                  />
                </div>
              </div>
            </div>
            <h4 className="font-bold mb-2 text-2xl text-center mt-5" >Jan</h4>
          </div>


          <div className='-mt-10' >
            <div className="relative w-[250px] h-[395px]" >
              <div className="absolute bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[250px] h-[250px] bottom-0
              "
              >
                <div className="absolute w-[250px] h-[396px] bottom-0 rounded-b-full" >
                  <Image
                    src={"/home/aboutUs/rustam.png"}
                    className="rounded-3xl"
                    fill
                    loading='lazy'
                    alt="Profil picture Rustam"
                  />
                </div>
              </div>
            </div>
            <h4 className="font-bold mb-2 text-2xl text-center mt-5" >Rustam</h4>
          </div>
          {/* <div
            // className="flex flex-col items-center"
            className="bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-3xl relative text-bgDarkGray flex flex-col items-center"
          >
            <div className=" mt-5 w-64 text-center flex flex-col items-center text-white">

              <h4 className="font-bold mb-2 text-2xl" >Jan</h4>
              <div className="h-64 w-48 relative mt-3" >
                <Image
                  src={"/home/aboutUs/jan.png"}
                  className="rounded-3xl"
                  fill
                  loading='lazy'
                  alt="Profil picture"
                />
              </div>
            </div>
          </div>
          <div
            // className="flex flex-col items-center"
            className="bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-3xl relative text-bgDarkGray flex flex-col items-center"
          >
            <div className=" mt-5 w-64 text-center flex flex-col items-center text-white">
              <h4 className="font-bold mb-2 text-2xl" >Sohejl</h4>
              <div className="h-64 w-52 relative mt-3" >
                <Image
                  src={"/home/aboutUs/sohejl.png"}
                  className="rounded-3xl"
                  fill
                  loading='lazy'
                  alt="Profil picture"
                />
              </div>
            </div>
          </div>
          <div
            // className="flex flex-col items-center"
            className="bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-3xl relative text-bgDarkGray flex flex-col items-center"
          >
            <div className=" mt-5 w-64 text-center flex flex-col items-center text-white">
              <h4 className="font-bold mb-2 text-2xl" >Rustam</h4>
              <div className="h-64 w-52 relative mt-3" >
                <Image
                  src={"/home/aboutUs/rustam.png"}
                  className="rounded-3xl"
                  fill
                  loading='lazy'
                  alt="Profil picture"
                />
              </div>
            </div>
          </div> */}


        </div>

        {showPopup ? (
          <>
            <AboutUsModal togglePopup={togglePopup} />
          </>)
          : null}
      </div>
    </section>
  )
}