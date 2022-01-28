//let lastItem = colors[colors.length - 2];
let array = [];
let yourarray = [];
let botarray = [];
let money = 100;
let bet = 0;
let yourscore = 0;
let botscore = 0;
let global = window.yourscore;
document.querySelector(".points").innerHTML = money;
document.querySelector(".bet").innerHTML = bet;
let take = document.querySelector(".take");
let drop = document.querySelector(".drop");
let start = document.querySelector(".start");
let betminus = document.querySelector(".betminus");
let betplus = document.querySelector(".betplus");
drop.disabled = true;
take.disabled = true;
cardmassiv();
let turn = 0;
function cardmassiv() {
  let image1 = new Image();
  image1.src = "img/img1.jfif" ;
  image1.number = 2;
  array.push(image1);
  let image2 = new Image();
  image2.src = "img/img2.gif";
  image2.number = 3;
  array.push(image2);
  let image3 = new Image();
  image3.src = "img/img3.gif";
  image3.number = 4;
  array.push(image3);
  let image4 = new Image();
  image4.src = "img/img4.gif";
  image4.number = 5;
  array.push(image4);
  let image5 = new Image();
  image5.src = "img/img5.png";
  image5.number = 6;
  array.push(image5);
  let image6 = new Image();
  image6.src = "img/img6.png";
  image6.number = 7;
  array.push(image6);
  let image7 = new Image();
  image7.src = "img/img7.png";
  image7.number = 8;
  array.push(image7);
  let image8 = new Image();
  image8.src = "img/img8.png";
  image8.number = 9;
  array.push(image8);
  let image9 = new Image();
  image9.src = "img/img9.png";
  image9.number = 10;
  array.push(image9);
}
function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}
array.sort(makeRandomArr);
function take4cards() {
  setTimeout( element1func , 1000);
  setTimeout( element2func , 2000);
  setTimeout( element3func , 3000);
  setTimeout( element4func , 4000);
}
if ( bet === 0 ) {
  start.disabled = true;
}
else {
  start.disabled = false;
}
betplus.onclick = function() {
  bet = bet + 10;
  document.querySelector(".bet").innerHTML = bet;
  if ( bet == 0 ) {
    betminus.disabled = true;
    betplus.disabled = false;
    start.disabled = true;
    }
  else {
    betminus.disabled = false;
    betplus.disabled = false;
    start.disabled = false;
  }
  if ( bet == money ) {
    betplus.disabled = true;
  }
  if ( bet < money ) {
    betplus.disabled = false;
  }
}
betminus.onclick = function() { 
  bet = bet - 10;
  document.querySelector(".bet").innerHTML = bet;
  if ( bet === 0 ) {
    betminus.disabled = true;
    betplus.disabled = false;
    start.disabled = true;
  }
  else {  
    betminus.disabled = false;
    betplus.disabled = false;
    start.disabled = false;
  }
}
start.onclick = function() {
  setTimeout(take4cards , 500);
  drop.disabled = false;
  take.disabled = false;
}
let element1 = array[0];
let element2 = array[1];
let element3 = array[2];
let element4 = array[3];
yourscore = element1.number + element3.number;
botscore = element2.number + element4.number;
function element1func() {
  let element1 = array[0];
  element1.classList.add("img_elementfront");
  let div1 = document.createElement("div");
  div1.classList.add("firsttake");
  div1.append(element1);
  document.body.append(div1); 
  setTimeout(move , 1000);
  turn = 1;
  yourarray.push(element1);
  function move() {
    element1.classList.add("move");
    console.log(element1.number);
  }
}
function element2func() {
  let element2 = array[1];
  element2.classList.add("img_elementfront");
  let div1 = document.createElement("div");
  div1.classList.add("firsttake");
  div1.append(element2);
  document.body.append(div1); 
  setTimeout(move , 1000);
  turn = 1;
  botarray.push(element2);
  function move() {
    element2.classList.add("movebot2");
    console.log(botarray);
  }
}
function element3func() {
  let element3 = array[2];
  element3.classList.add("img_elementfront");
  let div1 = document.createElement("div");
  div1.classList.add("firsttake");
  div1.append(element3);
  document.body.append(div1); 
  setTimeout(move , 1000);
  turn = 2;
  yourarray.push(element3);
  function move() {
    element3.classList.add("move1");
    console.log(element3.number);
  }
}
function element4func() {
  let element4 = array[3];
  element4.classList.add("img_elementfront");
  let div1 = document.createElement("div");
  div1.classList.add("firsttake");
  let elementback = new Image();
  elementback.src = "img/maincard.png";
  elementback.classList.add("img_elementback");
  div1.append(element4);
  div1.append(elementback);
  document.body.append(div1); 
  setTimeout(move , 1000);
  start.disabled = true;
  turn = 2;
  botarray.push(element4);
  function move() {
    element4.classList.add("movebot1");
    elementback.classList.add("movebot1");
    console.log(element4.number);
  }
}
function takecard() { 
  let div1 = document.createElement("div");
  div1.classList.add("firsttake");
  setTimeout(peoplecard , 500);
  function peoplecard() {
    let element1 = array[4];
    window.yourscore = yourscore + element1.number;
    element1.classList.add("img_elementfront");
    div1.append(element1);
    document.body.append(div1); 
    setTimeout(move , 1000); 
    array.splice(4,1);
    console.log(element1.number);
    yourarray.push(element1);
    console.log(botarray);
    function move() {
      element1.classList.add("move");
      console.log(window.yourscore);
    }
    if ( window.yourscore > 21 ) {
      take.disabled = true;
      money = money - bet;
      document.querySelector(".points").innerHTML = money;
      document.querySelector(".bet").innerHTML = "";
      document.querySelector(".badge").innerHTML = "Вы проиграли";
      take.disabled = true;
      drop.disabled = true;
    }
  }
  /*function botcard() {
    let element2 = array[5];
    element2.classList.add("img_elementfront");
    let elementback = new Image();
    elementback.src = "img/maincard.png";
    elementback.classList.add("img_elementback");
    div1.append(element2);
    div1.append(elementback);
    document.body.append(div1); 
    setTimeout(move , 1000);
    function move() {
      element2.classList.add("movebot");
      elementback.classList.add("movebot");
    }
  }*/

}
function previuoselement() {
  for ( let i = 0; i < botarray.length; i++ ) {
    let elementindex = botarray[i];
    if ( elementindex === botarray.lenght - 2 ) {
      elementindex.classList.add("rotate");
      console.log("ghghg");
    }
  }
}
function botcards() {
  if ( window.botscore <= 16 ) {
    take.disabled = true;
    let div1 = document.createElement("div");
    div1.classList.add("firsttake");
    let element1 = array[4];
    window.botscore = global + element1.number;
    element1.classList.add("img_elementfront");
    let elementback = new Image();
    elementback.src = "img/maincard.png";
    elementback.classList.add("img_elementback");
    div1.append(element1);
    div1.append(elementback);
    document.body.append(div1); 
    setTimeout(move , 1000);
  }
  if ( window.botscore >= 17 ) {
    alert("Не выдаеться")
  }
  function move() {
    element1.classList.add("movebot");
    elementback.classList.add("movebot");
  }
}
function result() {
  if ( window.yourscore > window.botscore && window.botscore <= 16 ) {
    alert("Хорош");
    money = money + bet;
    document.querySelector(".points").innerHTML = money;
    document.querySelector(".bet").innerHTML = "";
  }
  if ( window.yourscore < window.botscore && window.botscore <= 16 ) {
    alert("Лох");
    money = money - bet;
    document.querySelector(".points").innerHTML = money;
    document.querySelector(".bet").innerHTML = "";
  }
  if ( window.yourscore === window.botscore && window.botscore <= 16 ) {
    alert("Ничья");
    document.querySelector(".bet").innerHTML = "";
  }
}
function dropcards() {
  take.disabled = true;
  setInterval(botcards , 1000);
}
take.addEventListener("click", takecard);
//document.querySelector(".take").onclick = function() {
 // setTimeout(takecard , 500);
//}
drop.onclick = function() {
  drop.disabled = true;
  take.disabled = true;
  if ( botscore <= 16 ) {
    take.disabled = true;
    drop.disabled = false;
    let div1 = document.createElement("div");
    div1.classList.add("firsttake");
    let element1 = array[4];
    window.botscore = botscore + element1.number;
    element1.classList.add("img_elementfront");
    let elementback = new Image();
    elementback.src = "img/maincard.png";
    elementback.classList.add("img_elementback");
    div1.append(element1);
    div1.append(elementback);
    document.body.append(div1); 
    setInterval(move , 1000);
    console.log(window.botscore);
    botarray.push(element1);
    console.log(botarray);
    let elementindex = botarray[botarray.length - 2];
    console.log(elementindex);
    elementindex.classList.add("rotate");
    elementback.classList.add("rotate");
    //previuoselement();
    function move() {
      element1.classList.add("movebot");
      //elementback.classList.add("movebot");
    }
  if ( botscore >= 17 ) {
    setTimeout(result , 1000);
    console.log(window.botscore);
  }
  }
}
console.log(yourscore);
console.log(botscore);
console.log(botarray);
console.log(yourarray);
/*document.querySelector(".drop").disabled = true; 
let array = [];
let yoursecret = 0;
let yourtake = 0;
let botsecret = 0;
let bottake = 0;
let number = 0;
let turn = array.indexOf;
let maincard = document.querySelector(".maincard");
let div1 = document.createElement('div');
div1.classList.add("cardstyle");


function cardmassiv() {
  let image1 = new Image();
  image1.src = "img/img1.jfif" ;
  image1.number = 2;
  array.push(image1);
  let image2 = new Image();
  image2.src = "img/img2.gif";
  image2.number = 3;
  array.push(image2);
  let image3 = new Image();
  image3.src = "img/img3.gif";
  image3.number = 4;
  array.push(image3);
  let image4 = new Image();
  image4.src = "img/img4.gif";
  image4.number = 5;
  array.push(image4);
  let image5 = new Image();
  image5.src = "img/img5.png";
  image5.number = 6;
  array.push(image5);
}
function makeRandomArr(a, b) {
    return Math.random() - 0.5;
  }


array.sort(makeRandomArr);
//makeRandomArr();
for (let i = 0; i < array.length; i++ ) {
  let element = array[i];
  function cardmove() {
    if ( turn %2 !== 1 ) {
    element.classList.add("move");
    elementback.classList.add("move");
    }
    if (turn %2 == 1 ) {
    element.classList.add("movebot");
    elementback.classList.add("movebot");
    }
  }
    element.classList.add("img_elementfront");
  let elementback = new Image();
  elementback.src = "img/maincard.png"; 
  elementback.classList.add("img_elementback");
  console.log(array[0]);
  console.log(element.number);
  function cardTake() {
    yourtake = element.number;
    yoursecret = yoursecret + yourtake;
    array.sort(makeRandomArr);
    makeRandomArr();
  // div1.append(element);
    //div1.append(elementback);
    //document.body.append(div1);
    //element = array[0]; 
    console.log(yoursecret);
    for (let e = 0; e < 4 ; e++ ) {
      div1.append(element);
      div1.append(elementback);
      document.body.append(div1);
      setInterval(cardmove , 10);
      //document.querySelector(".start").disabled = true;
    }
  }
  document.querySelector(".start").addEventListener("click" , cardTake);



}






let money = 100;
let bet = 0;
document.querySelector(".bet").innerHTML = bet;


document.querySelector(".betplus").onclick = function() {
  bet = bet + 10;
  document.querySelector(".bet").innerHTML = bet;
  if ( bet == 0 ) {
    document.querySelector(".betminus").disabled = true;
    }
  else {
    document.querySelector(".betminus").disabled = false;
  }
}



document.querySelector(".betminus").onclick = function() {
  bet = bet - 10;
  document.querySelector(".bet").innerHTML = bet;
  if ( bet == 0 ) {
  document.querySelector(".betminus").disabled = true;
  }
  else {
  document.querySelector(".betminus").disabled = false;
  }
}



document.querySelector(".drop").onclick = function() {
  money = money + bet;
  document.querySelector(".points").innerHTML = money;
}


document.querySelector(".points").innerHTML = money;


console.dir(document.querySelector(".take_left"));
*/