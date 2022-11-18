import {makeAutoObservable} from "mobx";

class footballModal_data{
    constructor() {
        makeAutoObservable(this)
    }
    mainHeading = {
        en: 'Football Prediction Tournament',
        de: 'Fußball-Vorhersageturnier',
        ch: '足球预测比赛',
        ru: 'Футбольный Турнир Прогнозов',
    }

    propSide = false

    changePropSide(newStatus: boolean){
        console.log("new status", newStatus ? "true" : "false")
        this.propSide = newStatus
    }
}

export default new footballModal_data