let secret = "Амогус";
document.querySelector(".promo-ok").onclick = function() {
    let input = document.querySelector("input").value;
    if ( secret == input ) {
        alert("right");
        money = money + money * 0.2;
    }
    if ( secret !== input ) {
        alert("lie");
    }
}
//import money from './script'
console.log(money);
//document.querySelector(".xos").onclick = function() {
//
//}