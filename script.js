/*alert ("Hej med dig");*/
window.addEventListener("load", sidenVises);

function sidenVises(){
    console.log("sidenVises");
    showStart();
}

function showStart(){

    console.log("showStart");
    document.querySelector("#start").classList.add("show");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#settingsknap").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart);
    console.log("working?");
}

function hideStart(){

    console.log("hideStart");

    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").classList.remove("show");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#play").classList.remove("pulse");

 document.querySelector("#start").addEventListener("animationend", startGame);
}

function showSettings() {


}
function hideSettings(){

}

