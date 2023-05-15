import Script from "next/script";


const GTM_ID = '';

export const TagManagerScript = () => {

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
  )
}


export const TagManagerNoScript = () => {

  const tagManagerUrl = `https://www.googletagmanager.com/ns.html?id=GTM-${GTM_ID}`

  return (
    <div id="google-tag-manager-no-script" strategy="afterInteractive" className="tagmanager-hide">
      <iframe src={tagManagerUrl} />
   </div>
  )
}

