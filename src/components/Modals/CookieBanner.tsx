import { PrimaryButton } from '../Buttons/Buttons';
import { useEffect, useState } from 'react'


type acceptedCookies = {
    cookies: string;
}


interface CookieBannerInteraction {
    cookies: 'all' | 'necessary';
  }
  
const useCookieBannerInteraction = () => {
const [hasInteracted, setHasInteracted] = useState(false);

useEffect(() => {
    if (typeof window !== 'undefined') {
        const cookieBannerInteraction = localStorage.getItem('cookieBannerInteraction');
        if (cookieBannerInteraction) {
            const parsedCookieBannerInteraction: acceptedCookies = JSON.parse(cookieBannerInteraction)
            setHasInteracted(true);
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
        handleAcceptAll,
        handleAcceptNecessary,
    };
};
  



export default function CookieBanner() {
    const {hasInteracted, handleAcceptAll, handleAcceptNecessary} = useCookieBannerInteraction()

    const handleAll = () => {
        handleAcceptAll();
    }

    const handleNecessary = () => {
        handleAcceptNecessary();
    }

    console.log(hasInteracted)

    if (!hasInteracted) {
        return (
        
            <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
            <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >
              <p>Wir verwenden Cookies</p>

              
              <PrimaryButton data-policy="acceptAll" onClick={() => handleAll()} >Alle Cookies akzeptieren</PrimaryButton>
              <PrimaryButton data-policy="onlyVitals" onClick={() => handleNecessary()} >Nur Notwendige Cookies verwenden</PrimaryButton>
              
            </div>
          </div>
           
    )
    } else {
        return (<></>)
    }
}