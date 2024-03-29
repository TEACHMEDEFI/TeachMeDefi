import Script from "next/script";
import type { NextPage } from "next";
import { useState, useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_TAGMANAGER_CONTAINER_ID;


const useAcceptedCookies = () => {
  const [acceptedCookies, setAcceptedCookies] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cookieBannerInteraction = localStorage.getItem('cookieBannerInteraction');
      if (cookieBannerInteraction) {
        const acceptedCookiesInStorage = JSON.parse(cookieBannerInteraction);
        const allCookiesAccepted = acceptedCookiesInStorage && acceptedCookiesInStorage.cookies === 'all';
        setAcceptedCookies(allCookiesAccepted);
      }
    }
  }, []);

  return acceptedCookies;
};

const TagManagerScript: NextPage = () => {
  const acceptedCookies = useAcceptedCookies();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'consent_declaration',
        'consentSettings': {
          'ad_storage': acceptedCookies ? 'granted' : 'denied',
          'analytics_storage': acceptedCookies ? 'granted' : 'denied',
          // add other consent settings if needed
        }
      });
    }
  }, [acceptedCookies]);  // This ensures the effect runs whenever acceptedCookies changes

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
};

const TagManagerNoScript: NextPage = () => {
  const tagManagerUrl = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;


  return (
    <noscript id="google-tag-manager-no-script">
      <iframe src={tagManagerUrl} className="tagmanager-hide" />
    </noscript>
  );
};

export default TagManagerScript;
export { TagManagerNoScript, TagManagerScript };