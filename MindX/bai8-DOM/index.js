
const buttonElement= document.querySelector("#btn");

buttonElement.addEventListener("click", function() {
    const inputText1 = document.querySelector("#text1").value;
    const inputText2 = document.querySelector("#text2").value;
    const sum = Number(inputText1) + Number(inputText2);
    console.log(sum);
});

const buttonElement2= document.querySelector("#btn2");

buttonElement2.addEventListener("click", function() {
    const inputText3 = document.querySelector("#text3").value;
    const inputText4 = document.querySelector("#text4").value;
    const minus = Number(inputText3) - Number(inputText4);
    console.log(minus);
});

const buttonElement3= document.querySelector("#btn3");

buttonElement3.addEventListener("click", function() {
    const inputText5 = document.querySelector("#text5").value;
    const inputText6 = document.querySelector("#text6").value;
    const mutiply = Number(inputText5) * Number(inputText6);
    console.log(mutiply);
});

const buttonElement4= document.querySelector("#btn4");

buttonElement4.addEventListener("click", function() {
    const inputText7 = document.querySelector("#text7").value;
    const inputText8 = document.querySelector("#text8").value;
    const devine = Number(inputText7) / Number(inputText8);
    console.log(devine);
});




