type CookieObject = {
    setter: string,
    cookies: cookieType[],
    statement: StatementSection[],

}

type cookieType = {
    cookieId: string,
    reason: string,
    duration: string
}
    

type Cookies = {
    necessaryCookies: CookieObject[],
    analysisCookies: CookieObject[]
    
}

type StatementSection = {
    headline: string,
    text: string[],
    link: {
        linkdescription: string,
        linkUrl: string
    }
}


export const Cookies: Cookies = {
    analysisCookies: [
        {
            setter: 'Meta-Pixel',
            statement: [],
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
            statement: [],
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
            statement: [],
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
    ],
    necessaryCookies: []
}