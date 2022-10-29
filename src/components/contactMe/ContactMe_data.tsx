import {makeAutoObservable} from "mobx";

class contactMeData{
    constructor() {
        makeAutoObservable(this)
    }
    modalVisibility= false
    setModalVisibility(newModalStatus : boolean){
        this.modalVisibility = newModalStatus
        console.log("changed", newModalStatus)
    }

    messageSendStatus= 0
    changeMessageStatus(newStatus: number){
        this.messageSendStatus = newStatus
    }
    sendingError = "Network Error"

    loaderVisibility = false
    setLoaderVisibility(newLoaderStatus: boolean){
        console.log("change loader status")
        this.loaderVisibility = newLoaderStatus
    }
}

export default new contactMeData()
