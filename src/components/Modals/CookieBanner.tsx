import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useEffect, useState } from 'react'

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
    linksActive: boolean
    handleCookieBannerInteraction: Function
    fromCookiePolicyNoobsie: boolean
    togglePopup: Function
}


interface CookieBannerInteraction {
    cookies: 'all' | 'necessary';
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

    if (showBanner || linksActive) {
        return (
        
            <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
                <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >
                    <p>Wir verwenden Cookies - Sie haben derzeit {cookieTypeAccepted === 'all' ? 'analyse und notwendige' : 'nur notwendige'} Cookies akzeptiert</p>

                    <PrimaryButton data-policy="acceptAll" onClick={() => handleAll()} >Alle Cookies akzeptieren</PrimaryButton>
                    <PrimaryButton data-policy="onlyVitals" onClick={() => handleNecessary()} >Nur Notwendige Cookies verwenden</PrimaryButton>

                    {fromCookiePolicyNoobsie ? (
                        <>
                            <GeneralButton onClick={() => togglePopup(false)}>Modal Schließen</GeneralButton>
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
                            Hier werden dann die einzelnen Cookies aufgelistet die wir über den TagManager setzen Todo: Jan
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