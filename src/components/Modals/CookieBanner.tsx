import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useEffect, useState } from 'react'
import Link from "next/link";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'


type acceptedCookies = {
    cookies: string;
}

type CookieBannerProps = {
    linksActive?: boolean
    handleCookieBannerInteraction?: Function
    fromCookiePolicyNoobsie: boolean
    togglePopup?: Function
}

  
const useCookieBannerInteraction = () => {
    const [hasInteracted, setHasInteracted] = useState<boolean>(false);
    const [cookieTypeAccepted, setCookieTypeAccepted] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cookieBannerInteraction = localStorage.getItem('cookieBannerInteraction');
            if (cookieBannerInteraction) {
                const parsedCookieBannerInteraction: acceptedCookies = JSON.parse(cookieBannerInteraction)
                setHasInteracted(true);
                setCookieTypeAccepted(parsedCookieBannerInteraction.cookies)
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    trackingCookiesAccepted: parsedCookieBannerInteraction && parsedCookieBannerInteraction.cookies === 'all' ? true : false
                })

            }
        }
    }, []);

    const handleAcceptAll = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cookieBannerInteraction', JSON.stringify({ cookies: 'all' }));
            setHasInteracted(true);
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                trackingCookiesAccepted: true
            })
        }
    }

    const handleAcceptNecessary = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cookieBannerInteraction', JSON.stringify({ cookies: 'necessary' }));
            setHasInteracted(true);

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                trackingCookiesAccepted: false
            })
        }
    };

    return {
        hasInteracted,
        cookieTypeAccepted,
        handleAcceptAll,
        handleAcceptNecessary
    };
};


export default function CookieBanner({linksActive, handleCookieBannerInteraction, fromCookiePolicyNoobsie, togglePopup}: CookieBannerProps) {
    const {hasInteracted, handleAcceptAll, handleAcceptNecessary, cookieTypeAccepted} = useCookieBannerInteraction()
    const [showBanner, setShowBanner] = useState(false);


    useEffect(() => {
        setShowBanner(!hasInteracted)
    }, [hasInteracted])

    const handleAll = () => {
        handleAcceptAll();
        if (typeof handleCookieBannerInteraction !== 'undefined') {
            handleCookieBannerInteraction();
        }
    }

    const handleNecessary = () => {
        handleAcceptNecessary();
        if (typeof handleCookieBannerInteraction !== 'undefined') {
            handleCookieBannerInteraction();
        }
    }

    const toggleModal = () => {
        if (typeof togglePopup === 'undefined') return
        togglePopup(false)
    }

    if (showBanner || linksActive) {
        return (
        
            <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
                <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >
                    <p>Wir verwenden Cookies - Du hast derzeit {cookieTypeAccepted === 'all' ? 'analyse und notwendige' : 'nur notwendige'} Cookies akzeptiert</p>

                    <PrimaryButton data-policy="acceptAll" onClick={() => handleAll()} >Alle Cookies akzeptieren</PrimaryButton>
                    <PrimaryButton data-policy="onlyVitals" onClick={() => handleNecessary()} >Nur Notwendige Cookies verwenden</PrimaryButton>

                    {fromCookiePolicyNoobsie ? (
                        <>
                            <GeneralButton onClick={() => toggleModal()}>Schließen</GeneralButton>
                        </>) : null
                    }

                    <Accordion allowToggle className='border-y-2 w-full' >
                        <AccordionItem className="border-y-2 py-4" >
                        <h2 className='font-bold' >
                            <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Mehr Informationen
                            </Box>
                            <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <h2>Derzeit setzen wir keine First-Party Cookies</h2>
                            <h2 className='pb-5'>Unsere Third-Party Cookies setzen sich zusammen aus den Anbietern: Youtube, GoogleAnalytics und Meta</h2>
                              <span className='flex gap-1'>
                              
                              <Link onClick={toggleModal} data-linktarget="faq-section" href={"/privacy"} 
                              className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent"
                               >Datenschutzerklärung, 
                               </Link> 
                              <Link onClick={toggleModal} data-linktarget="faq-section" href={"/termsAndConditions"} 
                              className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent"
                               >AGBs
                                </Link> 
                              <p>und</p>
                              <Link onClick={toggleModal} data-linktarget="faq-section" href={"/haftungsausschluss"} 
                              className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent"
                               > Haftungsauschluss 
                               </Link> 

                                </span>
                            {/* <p>Für mehr Informationen zu unserer Datenschutzerklärung, zu unseren AGBs</p>
                            <Link onClick={toggleModal} data-linktarget="faq-section" href={"/privacy"} className="rainbow-text" >Für Mehr Informationen Clicke Bitte Hier</Link> */}
                        </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
              
            </div>
          </div>
           
    )
    } else {
        return (<></>)
    }
}