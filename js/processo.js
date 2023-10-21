//PROCESSO
$(document).ready(function () {
//----------------------------------------------------------------------------------------------------------------------
//BOTÃO LER MAIS
//https://www.youtube.com/watch?v=ITa0C4WQq0Q&ab_channel=HMProgramming
//PASSO2
    let passo2Button = document.getElementById("passo2Button");
    let passo2After = document.getElementById("passo2After");
    $(passo2Button).click(function () {
        $(passo2After).slideToggle(1000);
        if (passo2Button.innerHTML == "Ler mais...") {
            passo2Button.innerHTML = "Ler menos...";
        } else if (passo2Button.innerHTML == "Ler menos...") {
            passo2Button.innerHTML = "Ler mais...";
        }
    });

//PASSO3
    let passo3Button = document.getElementById("passo3Button");
    let passo3After = document.getElementById("passo3After");
    $(passo3Button).click(function () {
        $(passo3After).slideToggle(1000);
        if (passo3Button.innerHTML == "Ler mais...") {
            passo3Button.innerHTML = "Ler menos...";
        } else if (passo3Button.innerHTML == "Ler menos...") {
            passo3Button.innerHTML = "Ler mais...";
        }
    });

//PASSO4
    let passo4Button = document.getElementById("passo4Button");
    let passo4After = document.getElementById("passo4After");
    $(passo4Button).click(function () {
        $(passo4After).slideToggle(1000);
        if (passo4Button.innerHTML == "Ler mais...") {
            passo4Button.innerHTML = "Ler menos...";
        } else if (passo4Button.innerHTML == "Ler menos...") {
            passo4Button.innerHTML = "Ler mais...";
        }
    });

//PASSO5
    let passo5Button = document.getElementById("passo5Button");
    let passo5After = document.getElementById("passo5After");
    $(passo5Button).click(function () {
        $(passo5After).slideToggle(1000);
        if (passo5Button.innerHTML == "Ler mais...") {
            passo5Button.innerHTML = "Ler menos...";
        } else if (passo5Button.innerHTML == "Ler menos...") {
            passo5Button.innerHTML = "Ler mais...";
        }
    });

//CURIOSIDADE
    let curiosidadeButton = document.getElementById("curiosidadeButton");
    let curiosidadeContainer = document.getElementById("curiosidadeContainer");
    $(curiosidadeButton).click(function () {
        $(curiosidadeContainer).slideToggle(1000);
        if (curiosidadeButton.innerHTML == "Curiosidade +") {
            curiosidadeButton.innerHTML = "Curiosidade -";
        } else if (curiosidadeButton.innerHTML == "Curiosidade -") {
            curiosidadeButton.innerHTML = "Curiosidade +";
        }
    });
});


