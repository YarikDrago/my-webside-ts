import {makeAutoObservable} from "mobx";

class Skills_data{
    constructor() {
        makeAutoObservable(this)
    }

    skillsInfo=[
        {
            title: "ReactJS",
            additionalText: "MobX, ReactRouter, styled-components",
            mainText: "После озкамоления и написания первых приложений c использованием  HTML, CSS/SCSS, " +
                "Vanilla JavaScript  настало время определиться с JS-библиотекой. Angular 🤜🤛 React. " +
                "Выбор пал на React.\n Доп. библиотеки и инструменты: " +
                "Webpack, MobX, Styled-components, CSSTransitionGroup, Axios, canvas и др... ",
            percentValue: 0.25,
            path: "images/React-icon.svg.png"
        },
        {
            title: "TypeScript",
            additionalText: "",
            mainText: "После работы с JSX пришло время двигаться дальше и научиться использовать TypeScript (TSX)." +
                "Меньше ошибок, больше типизации, более понятный код 🤘 \n" +
                "Конечно, для меня это только начало🙃 \n Все еще впереди!",
            percentValue: 0.2,
            path: "images/typescript_icon.svg"
        },

        {
            title: "NodeJS",
            additionalText: "Wrote program for server path to treat contact information",
            mainText: "Ну не останавливаться же на простой SPA! Надо запустить свой сервер!!! Даже самый простенький, " +
                "но свой родной, который может обработать ваши мне сообщения и отправить их мне на почту." +
                " А также это хорошая тренировкса с сетевыми запросами. \n" +
                "Буду рад вашим сообщениям! ",
            percentValue: 0.1,
            path: "images/nodejs-icon-logo-vector.svg"
        },
    ]

    activeIndex = 0
    changeActiveIndex(newIndex : number){
        this.activeIndex = newIndex
    }
}

export default new Skills_data()