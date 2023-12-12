import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function UeberUns() {
  const { isDarkMode } = useTheme();
  return (
    <section className='py-10 px-5 sm:px-8 lg:px-16 mb-20'>
      <div className=" ">
        <h3 className="text-4xl font-bold mb-5">Über uns</h3>
        <p className="tracking-wide leading-relaxed  ">
          Seit 2017 haben wir uns alle persönlich und intensiv mit dem Thema DeFi und der Krypto-Welt auseinander gesetzt. 
          Seit 2022 führen wir immer wieder Kooperationsprojekte gemeinsam als TEACHMEDEFI durch.
          Wir können auf persönliche Erfolge und Misserfolge zurückgreifen. Daher sind wir auch
          die richtigen, um dir bei deinem Einstieg zu helfen. Wir wollen unsere Erfahrungen an
          dich weitergeben und dir mit Tipps und Tricks zur Seite stehen. Wir freuen uns auf dich!
        </p>
        <br />
        <p className="tracking-wide leading-relaxed " >
          Wir befinden uns in einem Zeitalter der Entwicklung. Während das Web 1.0 in seiner Ursprungsphase
          noch statisch und ohne Interaktionsmöglichkeiten die ersten Websites präsentierte, revolutionierte
          das Web 2.0 bereits alles bisher Dagewesene. Jede Person kann frei durch verschiedenste Websites
          navigieren. User können sogar selbst Content erstellen und mit der ganzen Welt teilen - das ist
          unser heutiger Stand. Aber die Entwicklung ist noch nicht abgeschlossen. Unsere Gesellschaft
          befindet sich auf dem Weg zu einer neuen Revolution - dem Web 3.0. Dies ist das Zeitalter des
          dezentralen Finanzsystems (DeFi), des neuen Bankings und des digitalen Eigentums.
        </p>
        <br />
        <p className="tracking-wide leading-relaxed mb-11" >
          Die Krypto-Industrie ist zwar momentan noch jung, doch in ihr steckt viel Potenzial - sie dürfte in
          den nächsten Jahren kontinuierlich wachsen. Daher ist es ratsam, dir schon jetzt die Zeit zu nehmen
          und nicht der Letzte zu sein, der den Markt betritt. Nutze stattdessen die Chance, sei frühzeitig
          dabei, positioniere dich und profitiere von den Möglichkeiten. Bei TEACHMEDEFI unterstützen wir
          dich dabei, diese Chancen zu erkennen und deine Position in der aufstrebenden Krypto-Welt zu stärken.
          Lass uns gemeinsam die Zukunft der Finanzen gestalten und keine Gelegenheit verpassen.
        </p>



        <div className="w-full flex flex-col items-center "  >
          <div className="w-full flex flex-wrap gap-5 xl:gap-10 2xl:gap-20 justify-center " >



            {/* <div className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink p-1 rounded-lg ' > */}
            <div className="p-1 rounded-lg bg-slate-200  dark:bg-slate-600">
              <div className=' overflow-hidden rounded-lg
              w-[325px] px-3 pb-5 bg-white dark:bg-bgDarkBlue h-full' >
                <div className="relative w-[250px] h-[395px] mx-auto -mt-20" >
                  <div className="absolute bg-gradient-to-br
                from-primaryBlue via-secondaryPurple to-primaryPink
                rounded-full w-[250px] h-[250px] bottom-0
                ">
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
                <p className="tracking-wide leading-relaxed mt-2 text-center" >
                  <strong>Sohejl</strong> ist seit 2017 in der Krypto-Welt aktiv. Er kann auf sechs Jahre internationale Erfahrung in den
                  Bereichen Mergers & Acquisitions, Controlling und Corporate Strategy zurückblicken.
                  Mit seiner umfangreichen Erfahrung ist er für die strategische Ausrichtung von TEACHMEDEFI verantwortlich.
                </p>
                <div className='flex justify-center gap-4 mt-2'>

                  <Link
                    href={"https://www.linkedin.com/in/sohejl-shahshahani-far-16aaba141/"}
                    target="_blank"
                  >
                    <div className="h-9 w-9 relative">
                      <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
                    </div>
                  </Link>
                  <Link
                    href={"https://twitter.com/Moeeinvest"}
                    target="_blank"
                  >
                    <div className="h-9 w-9 relative">
                      <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>




            {/* <div className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink p-1 rounded-lg ' > */}
            <div className="p-1 rounded-lg bg-slate-200  dark:bg-slate-600">
              <div className=' overflow-hidden rounded-lg
              w-[325px] px-3 pb-5 bg-white dark:bg-bgDarkBlue h-full' >
                <div className="relative w-[250px] h-[395px] mx-auto -mt-20" >
                  <div className="absolute bg-gradient-to-br
                from-primaryBlue via-secondaryPurple to-primaryPink
                rounded-full w-[250px] h-[250px] bottom-0
                ">
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
                <p className="tracking-wide leading-relaxed mt-2 text-center" >
                  <strong>Jan</strong> betrat die Krypto-Welt im Jahr 2019. Mit über fünf Jahren Erfahrung als Unternehmer,
                  Produktentwickler und Berater hat Jan mehrere Unternehmen gegründet, darunter DA&apos;QORD,
                  ein patentiertes Fashion-Tech-Accessoire. Seit 2019 arbeitet er als Berater in Marketing & Sales
                  und bringt diese Expertise in das TEACHMEDEFI-Team ein.
                </p>
                <div className='flex justify-center gap-4 mt-2'>
                  <Link
                    href={"https://www.linkedin.com/in/janzajfert/"}
                    target="_blank"
                  >
                    <div className="h-9 w-9 relative">
                      <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
                    </div>
                  </Link>
                  <Link
                    href={"https://twitter.com/Cezar3088"}
                    target="_blank"
                  >
                    <div className="h-9 w-9 relative">
                      <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>



            {/* <div className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink p-1 rounded-lg ' > */}
            <div className="p-1 rounded-lg bg-slate-200  dark:bg-slate-600">
              <div className=' overflow-hidden rounded-lg
              w-[325px] px-3 pb-5 bg-white dark:bg-bgDarkBlue h-full' >
                <div className="relative w-[250px] h-[395px] mx-auto -mt-20" >
                  <div className="absolute bg-gradient-to-br
                from-primaryBlue via-secondaryPurple to-primaryPink
                rounded-full w-[250px] h-[250px] bottom-0
                ">
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
                <p className="tracking-wide leading-relaxed mt-2 text-center" >
                  Auch <strong>Rustam</strong> hat seit 2017 seine Leidenschaft für Krypto entdeckt. Mit einem B.Sc. in Wirtschaftsingenieurwesen-Elektrotechnik
                  und über fünf Jahren Erfahrung im B2B- Vertrieb sowie zwei Jahren Erfahrung als Business und Approvals
                  Coordinator, bei dem er ein Team von 30 internationalen Mitarbeitern leitete, bringt Rustam eine solide operative Kompetenz in unser Team.
                </p>
                <div className='flex justify-center gap-4 mt-2'>
                  <Link
                    href={"https://www.linkedin.com/in/rustam-kohen-087048177/"}
                    target="_blank"
                  >
                    <div className="h-9 w-9 relative">
                      <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
                    </div>
                  </Link>
                  <Link
                    href={"https://x.com/stam_eth"}
                    target="_blank"
                  >
                    <div className="h-9 w-9 relative">
                      <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>


            {/* <div className='' >
              <div className="relative w-[250px] h-[395px]" >
                <div className="absolute bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[250px] h-[250px] bottom-0
              "
                >
                  <div className="absolute w-[250px] h-[395px] bottom-0 rounded-b-full" >
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
              <div className='flex justify-center gap-4'>

                <Link
                  href={"https://www.linkedin.com/in/janzajfert/"}
                  target="_blank"
                >
                  <div className="h-9 w-9 relative">
                    <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
                  </div>
                </Link>
                <Link
                  href={"https://twitter.com/Cezar3088"}
                  target="_blank"
                >
                  <div className="h-9 w-9 relative">
                    <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
                  </div>
                </Link>
              </div>
            </div>


            <div className='' >
              <div className="relative w-[250px] h-[395px]" >
                <div className="absolute bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[250px] h-[250px] bottom-0
              "
                >
                  <div className="absolute w-[250px] h-[395px] bottom-0 rounded-b-full" >
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
              <div className='flex justify-center gap-4'>

                <Link
                  href={"https://www.linkedin.com/in/rustam-kohen-087048177/"}
                  target="_blank"
                >
                  <div className="h-9 w-9 relative">
                    <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
                  </div>
                </Link>
                <Link
                  href={"________"}
                  target="_blank"
                >
                  <div className="h-9 w-9 relative">
                    <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
                  </div>
                </Link>
              </div>
            </div> */}



          </div>


        </div>











      </div>

    </section>
  )
}
