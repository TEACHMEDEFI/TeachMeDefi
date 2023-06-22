type CookieObject = {
    setter: string,
    cookies: cookieType[],
    statement: string
}

type cookieType = {
    cookieId: string,
    reason: string,
    duration: string,
}
    


type Cookies = {
    cookies: CookieObject[]
    
}


export const Cookies: Cookies = {
    cookies: [
        {
            setter: 'Meta-Pixel',
            statement: 'Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA ("Facebook"). Mit Hilfe des Facebook-Pixel kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf unsere Website weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet und zukünftige Werbemaßnahmen optimiert werden. Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann. Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.',
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
            statement: '',
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
    ]
}