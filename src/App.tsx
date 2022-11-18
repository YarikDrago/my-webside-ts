import React, {Fragment} from 'react';
import './default.scss'
import NavbarHeader_v1 from "./components/navbarHeader/NavbarHeader";
import {observer} from "mobx-react";
import MainPage_v1 from "./components/mainPage/MainPage";
import contactMe_data from "./components/contactMe/ContactMe_data";
import ContactMeModalV2 from "./components/contactMe/modal/ContactMeModalV2";
import {Route, Routes} from "react-router";
import FootballModal from "./components/mainPage/footballPredictionTournament/footballModal/FootballModal";
import TestLinkPage from "./TestLinkPage";

const App = observer(() => {
    return (
        <Fragment>
            <Routes>
                <Route path={'/'} element={<MainPage_v1/>}/>
                <Route path={'/football'} element={<FootballModal/>}/>
                <Route path={'/test'} element={<TestLinkPage/>}/>
                <Route path={'/*'} element={<MainPage_v1/>}/>

            </Routes>
            {/*<MainPage_v1/>*/}
            <NavbarHeader_v1/>
            <ContactMeModalV2 status={contactMe_data.modalVisibility}/>
        </Fragment>
    );
})

export default App;
