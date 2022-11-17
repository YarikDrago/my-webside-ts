import {makeAutoObservable} from "mobx";

class football_data{
    constructor() {
        makeAutoObservable(this)
    }

    footballData: Object = {}

    setNewFootballData(newData: Object){
        this.footballData = newData
    }
}

export default new football_data()