import {makeAutoObservable} from "mobx";

class SkillAnimationLines_data{
    constructor() {
        makeAutoObservable(this)
    }
    // color1 = '#0b885e'
    color1 = 'rgb(11, 136, 94)'
    // color1 = 'rgb(230,0,236)'
    // color2 = '#50ec4a'
    color2 = 'rgb(9,255,0)'
    // color2 = 'orange'
    // color2 = 'rgb(255,225,0)'

    alterMode = false
    setAlterModeTrue(){
        // console.log("enter")
        this.alterMode = true
    }
    setAlterModeFalse(){
        // console.log("leave")
        this.alterMode = false
    }
}

export default new SkillAnimationLines_data()