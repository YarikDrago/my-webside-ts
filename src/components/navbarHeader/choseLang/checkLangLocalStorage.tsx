import languages_data from "../../../languages_data";
import {toJS} from "mobx";

function checkLangLocalStorage(){
    if (localStorage.getItem('activeLang') !== null){
        const localStorageLang = localStorage.getItem('activeLang')
        if (typeof localStorageLang === "string"){
            const newFlag = languages_data.lang.find(elem  =>  elem.abr === localStorageLang && elem.flagPath)
            if (newFlag){
                console.log("local storage not empty", toJS(newFlag).flagPath)
                languages_data.SetNewActiveLang(localStorageLang, toJS(newFlag).flagPath)
            }
        }
    }
}

export default checkLangLocalStorage