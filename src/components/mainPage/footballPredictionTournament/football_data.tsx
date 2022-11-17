import {makeAutoObservable} from "mobx";

class football_data{
    constructor() {
        makeAutoObservable(this)
    }

    footballData: Object = {}

    setNewFootballData(newData: Object){
        this.footballData = newData
    }

    firstURL = true
    setFirstURLChecked(){
        this.firstURL = false
    }
}

export default new football_data()