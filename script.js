{var money = document.querySelector(".money");}
money = 0;
document.querySelector(".free100").onclick = function() {
    money = money + 100;
    console.log(money);
    document.querySelector(".money").innerHTML = money;
    document.querySelector(".free100").disabled = true;
}
document.querySelector(".money").innerHTML = money;
if ( money == 0 ) {
    document.querySelector(".promo").disabled = true;
}