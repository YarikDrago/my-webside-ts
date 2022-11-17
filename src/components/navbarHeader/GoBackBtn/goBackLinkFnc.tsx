import football_data from "../../mainPage/footballPredictionTournament/football_data";

function goBackLinkFnc(currentURL: string){
    console.log("currentURL", currentURL)
    if (currentURL === "/football"){
        // football_data.setNewFootballData({})
        return "/"
    }
    else return '/'
}

export default goBackLinkFnc