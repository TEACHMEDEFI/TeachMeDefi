type Cookies = {
    cookies: Array<CookieObject>
}
    


export type CookieObject = {
    setter: string,
    cookies: Array<cookieType>

}

type cookieType = {
    cookieId: string
    reason: string
    duration: string
}

// type StatementSection = {
//     headline: string,
//     text: string[],
//     link: {
//         linkdescription: string,
//         linkUrl: string
//     }
// }


export const Cookies: Cookies =  {
    cookies: [
        {
            setter: 'Meta-Pixel',
            cookies: [
                {
                    cookieId: '_ga',
                    reason: 'Unterscheidung der Webseitenbesucher.',
                    duration: '2 Jahre'
                }
            ]
        },
        {
            setter: 'Google Analytics',
            cookies: [
                {
                    cookieId: '_ga',
                    reason: 'Unterscheidung der Webseitenbesucher.',
                    duration: '2 Jahre'
                },
                {
                    cookieId: '_gid',
                    reason: 'Unterscheidung der Webseitenbesucher.',
                    duration: '24 Stunden'
                },
                {
                    cookieId: '_gat_gtag_UA_',
                    reason: 'Wird zum Drosseln der Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ .',
                    duration: '1 Minute'
                }
            ]
        },
        {
            setter: 'Youtube',
            cookies: [
                {
                    cookieId: 'YSC',
                    reason: 'Dieses Cookie wird vom Videodienst YouTube auf Webseiten mit eingebetteten YouTube-Videos gesetzt.',
                    duration: '1 Jahr'
                },
                {
                    cookieId: 'VISITOR_INFO1_LIVE',
                    reason: 'Hierbei handelt es sich um ein Cookie, das YouTube setzt, um die Bandbreite des Nutzers zu berechnen. Anhand dieser Information wird bestimmt, ob der Nutzer die neue oder alte Benutzeroberfläche des Players verwenden sollte.',
                    duration: 'Bis zu 1 Jahr'
                }
            ]
        }
    ]
}
