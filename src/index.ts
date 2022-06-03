/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    
    // =================== SHOP ===================

    WA.room.onEnterLayer('zones/shop/1').subscribe(() => {
        const id = "1"
        const description = WA.state["shop"+id+"Description"] as string;
        const url = WA.state["shop"+id+"URL"] as string;
        const embed = WA.state["shop"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("shop"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/shop/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/shop/2').subscribe(() => {
        const id = "2"
        const description = WA.state["shop"+id+"Description"] as string;
        const url = WA.state["shop"+id+"URL"] as string;
        const embed = WA.state["shop"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("shop"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/shop/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/shop/3').subscribe(() => {
        const id = "3"
        const description = WA.state["shop"+id+"Description"] as string;
        const url = WA.state["shop"+id+"URL"] as string;
        const embed = WA.state["shop"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("shop"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/shop/3').subscribe(closePopup)

    // =================== METAVERSE ===================

    WA.room.onEnterLayer('zones/metaverse/1').subscribe(() => {
        const id = "1"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/2').subscribe(() => {
        const id = "2"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/3').subscribe(() => {
        const id = "3"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/4').subscribe(() => {
        const id = "4"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/5').subscribe(() => {
        const id = "5"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/6').subscribe(() => {
        const id = "6"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/6').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/playlist').subscribe(closePopup)

    // =================== VIDEOS ===================

    WA.room.onEnterLayer('zones/videos/playlist').subscribe(() => {
        const description = WA.state["videosDescription"] as string;
        const url = WA.state["videosURL"] as string;
        const embed = WA.state["videosEmbed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videosPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/playlist').subscribe(closePopup)

    // =================== PATRIMOINE ===================

    WA.room.onEnterLayer('zones/patrimoine/1').subscribe(() => {
        const id = "1"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/2').subscribe(() => {
        const id = "2"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/3').subscribe(() => {
        const id = "3"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/patrimoine/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["patrimoine"+id+"Description"] as string;
        const url = WA.state["patrimoine"+id+"URL"] as string;
        const embed = WA.state["patrimoine"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("patrimoine"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/patrimoine/playlist').subscribe(closePopup)

    // =================== FRANCE META ===================

    WA.room.onEnterLayer('zones/francemeta/1').subscribe(() => {
        const id = "1"
        const description = WA.state["francemeta"+id+"Description"] as string;
        const url = WA.state["francemeta"+id+"URL"] as string;
        const embed = WA.state["francemeta"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("francemeta"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/francemeta/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/francemeta/2').subscribe(() => {
        const id = "2"
        const description = WA.state["francemeta"+id+"Description"] as string;
        const url = WA.state["francemeta"+id+"URL"] as string;
        const embed = WA.state["francemeta"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("francemeta"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/francemeta/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/francemeta/3').subscribe(() => {
        const id = "3"
        const description = WA.state["francemeta"+id+"Description"] as string;
        const url = WA.state["francemeta"+id+"URL"] as string;
        const embed = WA.state["francemeta"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("francemeta"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/francemeta/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/francemeta/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["francemeta"+id+"Description"] as string;
        const url = WA.state["francemeta"+id+"URL"] as string;
        const embed = WA.state["francemeta"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("francemeta"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/francemeta/playlist').subscribe(closePopup)

    // =================== FOOTBALL ===================

    WA.room.onEnterLayer('zones/football/1').subscribe(() => {
        const id = "1"
        const description = WA.state["football"+id+"Description"] as string;
        const url = WA.state["football"+id+"URL"] as string;
        const embed = WA.state["football"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("football"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/football/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/football/2').subscribe(() => {
        const id = "2"
        const description = WA.state["football"+id+"Description"] as string;
        const url = WA.state["football"+id+"URL"] as string;
        const embed = WA.state["football"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("football"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/football/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/football/3').subscribe(() => {
        const id = "3"
        const description = WA.state["football"+id+"Description"] as string;
        const url = WA.state["football"+id+"URL"] as string;
        const embed = WA.state["football"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("football"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/football/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/football/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["football"+id+"Description"] as string;
        const url = WA.state["football"+id+"URL"] as string;
        const embed = WA.state["football"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("football"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/football/playlist').subscribe(closePopup)

    // =================== CINEMA ===================

    WA.room.onEnterLayer('zones/cinema/1').subscribe(() => {
        const id = "1"
        const description = WA.state["cinema"+id+"Description"] as string;
        const url = WA.state["cinema"+id+"URL"] as string;
        const embed = WA.state["cinema"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/cinema/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema/2').subscribe(() => {
        const id = "2"
        const description = WA.state["cinema"+id+"Description"] as string;
        const url = WA.state["cinema"+id+"URL"] as string;
        const embed = WA.state["cinema"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/cinema/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema/3').subscribe(() => {
        const id = "3"
        const description = WA.state["cinema"+id+"Description"] as string;
        const url = WA.state["cinema"+id+"URL"] as string;
        const embed = WA.state["cinema"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/cinema/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/cinema/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["cinema"+id+"Description"] as string;
        const url = WA.state["cinema"+id+"URL"] as string;
        const embed = WA.state["cinema"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("cinema"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/cinema/playlist').subscribe(closePopup)

    // =================== ASSURANCE ===================

    WA.room.onEnterLayer('zones/assurance/1').subscribe(() => {
        const id = "1"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/2').subscribe(() => {
        const id = "2"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/3').subscribe(() => {
        const id = "3"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/assurance/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["assurance"+id+"Description"] as string;
        const url = WA.state["assurance"+id+"URL"] as string;
        const embed = WA.state["assurance"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("assurance"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/assurance/playlist').subscribe(closePopup)

    // =================== VINS ===================

    WA.room.onEnterLayer('zones/vins/1').subscribe(() => {
        const id = "1"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/2').subscribe(() => {
        const id = "2"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/3').subscribe(() => {
        const id = "3"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/vins/playlist').subscribe(() => {
        const id = "Playlist"
        const description = WA.state["vins"+id+"Description"] as string;
        const url = WA.state["vins"+id+"URL"] as string;
        const embed = WA.state["vins"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("vins"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/vins/playlist').subscribe(closePopup)

    // DISCORD
    WA.room.onEnterLayer('zones/discord').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("discordPopup", "Rejoignez la communauté WorkAdventure sur Discord! \nAide, conseils, discussions, avant-premières...", [
            {label: 'Me voilà!', className: 'primary', callback: () => openWebsite("https://discord.gg/G6Xh9ZM9aR", false)}
        ]);
    })
    WA.room.onLeaveLayer('zones/discord').subscribe(closePopup)

    // OFFICE
    WA.room.onEnterLayer('youtubeZone').subscribe(() => {
        const id = "youtube"
        const description = WA.state[id+"Description"] as string;
        const url = WA.state[id+"URL"] as string;
        const embed = WA.state[id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("youtubePopup", description, cta);
    })
    WA.room.onLeaveLayer('youtubeZone').subscribe(closePopup)

    WA.room.onEnterLayer('metafrontierZone').subscribe(() => {
        const id = "metafrontier"
        const description = WA.state[id+"Description"] as string;
        const url = WA.state[id+"URL"] as string;
        const embed = WA.state[id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metafrontierPopup", description, cta);
    })
    WA.room.onLeaveLayer('metafrontierZone').subscribe(closePopup)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function openWebsite(url: string, embed: boolean = true){
    if (embed) {
        WA.nav.openCoWebSite(url)
    } else {
        WA.nav.openTab(url)
    }
    closePopup()
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
