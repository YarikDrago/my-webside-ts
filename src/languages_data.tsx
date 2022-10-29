import {makeAutoObservable} from "mobx";

class Languages_data{
    constructor() {
        makeAutoObservable(this)
    }
    lang = [
        {
            abr: "en",
            flagPath: require('@/components/navbarHeader/images/flags/en-flag-icon.png').default
        },
        {
            abr: "de",
            flagPath: require('@/components/navbarHeader/images/flags/de-flag-icon.png').default
        },
        {
            abr: "ch",
            flagPath: require('@/components/navbarHeader/images/flags/ch-flag-icon.png').default
        },
        {
            abr: "ru",
            flagPath: require('@/components/navbarHeader/images/flags/ru-flag-icon.png').default
        },
    ]

    activeLang= {
        abr: "en",
        flagPath: require('@/components/navbarHeader/images/flags/en-flag-icon.png').default
    }

    SetNewActiveLang(newLang: string, newFlagPath: string){
        // console.log("set new active lang",  this.activeLang.abr, "=>", newLang )
        this.activeLang.abr = newLang
        this.activeLang.flagPath = newFlagPath
    }

}

export default new Languages_data()