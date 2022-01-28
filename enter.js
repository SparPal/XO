document.querySelector(".ok").onclick = function() {
    let input = document.querySelector(".inputik").value;
    console.log(input);
}
function Printrules(linkToYourGame) {
    let createA = document.createElement("a");
    createA.href = linkToYourGame;
}