import {makeAutoObservable} from "mobx";

class AppData{
    constructor() {
        makeAutoObservable(this)
    }

    hexSide = 50
}

export default new AppData()