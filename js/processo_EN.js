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
        if (passo2Button.innerHTML == "Read more...") {
            passo2Button.innerHTML = "Read less...";
        } else if (passo2Button.innerHTML == "Read less...") {
            passo2Button.innerHTML = "Read mor...";
        }
    });

//PASSO3
    let passo3Button = document.getElementById("passo3Button");
    let passo3After = document.getElementById("passo3After");
    $(passo3Button).click(function () {
        $(passo3After).slideToggle(1000);
        if (passo3Button.innerHTML == "Read more...") {
            passo3Button.innerHTML = "Read less...";
        } else if (passo3Button.innerHTML == "Read less...") {
            passo3Button.innerHTML = "Read more...";
        }
    });

//PASSO4
    let passo4Button = document.getElementById("passo4Button");
    let passo4After = document.getElementById("passo4After");
    $(passo4Button).click(function () {
        $(passo4After).slideToggle(1000);
        if (passo4Button.innerHTML == "Read more...") {
            passo4Button.innerHTML = "Read less...";
        } else if (passo4Button.innerHTML == "Read less...") {
            passo4Button.innerHTML = "Read more...";
        }
    });

//PASSO5
    let passo5Button = document.getElementById("passo5Button");
    let passo5After = document.getElementById("passo5After");
    $(passo5Button).click(function () {
        $(passo5After).slideToggle(1000);
        if (passo5Button.innerHTML == "Read more...") {
            passo5Button.innerHTML = "Read less...";
        } else if (passo5Button.innerHTML == "Read less...") {
            passo5Button.innerHTML = "Read more...";
        }
    });

//CURIOSIDADE
    let curiosidadeButton = document.getElementById("curiosidadeButton");
    let curiosidadeContainer = document.getElementById("curiosidadeContainer");
    $(curiosidadeButton).click(function () {
        $(curiosidadeContainer).slideToggle(1000);
        if (curiosidadeButton.innerHTML == "Curiosity +") {
            curiosidadeButton.innerHTML = "Curiosity -";
        } else if (curiosidadeButton.innerHTML == "Curiosity -") {
            curiosidadeButton.innerHTML = "Curiosity +";
        }
    });
});


