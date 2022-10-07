//Dice1

var randomNumber1 = Math.floor((Math.random()*Math.floor(6)+1)); //Assigning a Random No. 1-6

var randomImage="dice"+randomNumber1+".png";//Concating as Dice(1-6).png
var randomImageSource="images/"+randomImage;//Concating as images/Dice(1-6).png

var image1=document.querySelectorAll("img")[0];//Selecting the first image
image1.setAttribute("src",randomImageSource);//Replacing it with new  random image

//Same Process for dice2

var randomNumber2 = Math.floor((Math.random()*Math.floor(6)+1));

var randomImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomImage2;

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//Checking the Winner

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 Wins";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 🚩 Wins";
}else{
  document.querySelector("h1").textContent="--Draw--";
}


//--Below is a bigger, brute force process doing the same thing---


// var randomNumber2 = Math.floor((Math.random()*Math.floor(6)+1));
//
// if (randomNumber1===1) {
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
//
// if (randomNumber2===1) {
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
//
// if (randomNumber1===2) {
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
//
// if (randomNumber2===2) {
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
//
// if (randomNumber1===3) {
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
//
// if (randomNumber2==3) {
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
//
// if (randomNumber1===4) {
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
//
// if (randomNumber2===4) {
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
//
// if (randomNumber1===5) {
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
//
// if (randomNumber2===5) {
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
//
// if (randomNumber1===6) {
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
//
// if (randomNumber2===6) {
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
//
// if(randomNumber1===randomNumber2){
//   document.querySelector("h1").textContent="Draw";
// }
//
// if(randomNumber1>randomNumber2){
//   document.querySelector("h1").textContent="Player 1 Wins";
// }
//
// if(randomNumber1<randomNumber2){
//   document.querySelector("h1").textContent="Player 2 Wins";
// }
