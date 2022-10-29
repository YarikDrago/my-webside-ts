import React, {Fragment} from 'react';
import './default.scss'
import NavbarHeader_v1 from "./components/navbarHeader/NavbarHeader";
import {observer} from "mobx-react";
import MainPage_v1 from "./components/mainPage/MainPage";
import contactMe_data from "./components/contactMe/ContactMe_data";
import ContactMeModalV2 from "./components/contactMe/modal/ContactMeModalV2";

const App = observer(() => {
    return (
        <Fragment>
            <MainPage_v1/>
            <NavbarHeader_v1/>
            <ContactMeModalV2 status={contactMe_data.modalVisibility}/>
        </Fragment>
    );
})

export default App;
