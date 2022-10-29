import {makeAutoObservable} from "mobx"

class AboutMe_data {
    constructor(){
        makeAutoObservable(this)
    }

    title = {
        en: "ABOUT ME",
        de: "über mich",
        ch: "关于我",
        ru: "ОБО МНЕ",
    }

    commonText = {
        en: "Hi everyone!\n" +
            "I am a beginner front-end developer and I am passionate about Web technologies. I am learning to create beautiful, pleasant, dynamic and high-quality websites." +
            "I'm trying to become a full-fledged full-stack developer and step by step I'm painstakingly moving towards this. " +
            "I used to write programs for CNC machines, embodying the program code into details, now I want to embody the program code into websites.",
        de: "Hi everyone!\n" +
            "I am a beginner front-end developer and I am passionate about Web technologies. I am learning to create beautiful, pleasant, dynamic and high-quality websites." +
            "I'm trying to become a full-fledged full-stack developer and step by step I'm painstakingly moving towards this. " +
            "I used to write programs for CNC machines, embodying the program code into details, now I want to embody the program code into websites.",
        ch: "Hi everyone!\n" +
            "I am a beginner front-end developer and I am passionate about Web technologies. I am learning to create beautiful, pleasant, dynamic and high-quality websites." +
            "I'm trying to become a full-fledged full-stack developer and step by step I'm painstakingly moving towards this. " +
            "I used to write programs for CNC machines, embodying the program code into details, now I want to embody the program code into websites.",
        ru: "Привет всем!\n" +
            "Я начинающий фронтенд разработчик и я увлечён Web технологиями. Я учусь создавать красивые, приятные, динамичные и качественные сайты.\n" +
            "Я пытаюсь стать полноценным fullstack разработчиком и шаг за шагом кропотливо иду к этому.\n" +
            "Раньше я писал программы для ЧПУ станков, воплощая программный код в детали, теперь я хочу воплощать программный код в сайты.",
    }

}

export default new AboutMe_data()