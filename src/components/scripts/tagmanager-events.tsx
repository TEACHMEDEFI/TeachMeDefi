declare global {
    interface Window {
        dataLayer: any;
    }
}

export const reportLinkClick = (element: any) => {
    // window.location.href = 'www.google.de'
    const {linktarget} = element?.dataset;

    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': linktarget,
            'formLocation': 'navbar'
        });
    }
}