let array = ["*" , "*" , "*" , "*" ,"*" , "*" , "*" , "*" , "*"];
let coms = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
            ];
let turn = 0;
let char = "X";
let div1 = document.createElement("div");
div1.classList.add("main");
let photo = new Image();
//let photo = document.createElement("img");

document.querySelector(".badge").innerHTML = char;
let item = document.querySelector(".item");
document.querySelector(".container").addEventListener("click" , klik);
function klik() {
    let element = event.target;
    let nod = element.parentNode;
    let nodes = ([...nod.children]);
    let nodeIndex = nodes.indexOf(element);
    console.log(nodeIndex);
    if ( element.innerHTML == '') {
        array[nodeIndex] = char;
        element.innerHTML = char;
        turn++;
        if ( turn %2 == 1 ) {
            char = "0";
            element.classList.add("cross");
        }
        else {
            char = "X";
            element.classList.add("zero");
        } 
        document.querySelector(".badge").innerHTML = char;
        array[nodeIndex] = char;
        for ( let e = 0; e < coms.length; e++) {
            if (array[coms[e][0]] === "X" && array[coms[e][1]] === "X" && array[coms[e][2]] === "X") {
                document.querySelector(".iswinner").innerHTML = "Новая игра началась";
                document.querySelector(".container").removeEventListener("click" , klik);
                crosslineX();
                setTimeout(newGame , 10000000);
                console.log(nod);
                }
            if (array[coms[e][0]] === "0" && array[coms[e][1]] === "0" && array[coms[e][2]] === "0") {
                document.querySelector(".iswinner").innerHTML = "Новая игра началась";
                document.querySelector(".container").removeEventListener("click" , klik);
                crossline0();
                setTimeout(newGame , 10000000);
                console.log(nod);
                }
            }
    }

}
function crosslineX() {
    console.log(10000);
    if (array[coms[0][0]] === char && array[coms[0][1]] === char && array[coms[0][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin.PNG';
        photo.classList.add("line1");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
    }
    if (array[coms[1][0]] === char && array[coms[1][1]] === char && array[coms[1][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin.PNG';
        photo.classList.add("line2");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[2][0]] === char && array[coms[2][1]] === char && array[coms[2][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin.PNG';
        photo.classList.add("line3");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][0]] === char && array[coms[1][0]] === char && array[coms[2][0]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin.PNG';
        photo.classList.add("line4");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][1]] === char && array[coms[1][1]] === char && array[coms[2][1]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin.PNG';
        photo.classList.add("line5");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][2]] === char && array[coms[1][2]] === char && array[coms[2][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin12.PNG';
        photo.classList.add("line6");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][0]] === char && array[coms[1][1]] === char && array[coms[2][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/linlong.PNG';
        photo.classList.add("line7");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[2][0]] === char && array[coms[1][1]] === char && array[coms[0][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/linlong.PNG';
        photo.classList.add("line8");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
}
function crossline0() {
    console.log(10000);
    if (array[coms[0][0]] === char && array[coms[0][1]] === char && array[coms[0][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin2.PNG';
        photo.classList.add("line1");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
    }
    if (array[coms[1][0]] === char && array[coms[1][1]] === char && array[coms[1][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin2.PNG';
        photo.classList.add("line2");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
    }
    if (array[coms[2][0]] === char && array[coms[2][1]] === char && array[coms[2][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin2.PNG';
        photo.classList.add("line3");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][0]] === char && array[coms[1][0]] === char && array[coms[2][0]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin2.PNG';
        photo.classList.add("line4");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][1]] === char && array[coms[1][1]] === char && array[coms[2][1]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin2.PNG';
        photo.classList.add("line5");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][2]] === char && array[coms[1][2]] === char && array[coms[2][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/lin22.PNG';
        photo.classList.add("line6");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[0][0]] === char && array[coms[1][1]] === char && array[coms[2][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/linlong2.PNG';
        photo.classList.add("line7");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
    if (array[coms[2][0]] === char && array[coms[1][1]] === char && array[coms[0][2]] === char) {
        console.log(10000);
        let div1 = document.createElement("div");
        div1.classList.add("main");
        photo.src = 'img/linlong2.PNG';
        photo.classList.add("line8");
        console.log(photo);
        div1.append(photo);
        document.body.append(div1);
        console.log("ddd");
    }
}
function newGame() {
    char = "X";
    document.querySelector(".badge").innerHTML = char;
    photo.parentNode.removeChild(photo);
    turn = 0;
    //document.querySelector(".iswinner").innerHTML = "Новая игра началась";
    document.querySelector(".container").addEventListener("click" , klik);
    let cell = document.querySelectorAll(".item");
    for ( let i = 0; i < cell.length; i++ ) {
        cell[i].innerHTML = "";
        cell[i].classList.remove("cross");
        cell[i].classList.remove("zero");
        array[i] = "";
        document.querySelector(".iswinner").innerHTML = "Новая игра началась";
    }
}
