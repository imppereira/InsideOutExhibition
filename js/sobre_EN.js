//https://www.youtube.com/watch?v=ITa0C4WQq0Q&ab_channel=HMProgramming
$(document).ready(function () {
    //PASSO1
    let textoInicialButton = document.getElementById("textoInicialButton");
    let textoInicialAfter = document.getElementById("textoInicialAfter");
    $(textoInicialButton).click(function () {
        $(textoInicialAfter).slideToggle(1000);
        if (textoInicialButton.innerHTML == "Read more...") {
            textoInicialButton.innerHTML = "Read less...";
        } else if (textoInicialButton.innerHTML == "Read less...") {
            textoInicialButton.innerHTML = "Read more...";
        }
    });
})

//QUANDO HÁ CLICK NO MÓDULO DO MAPA------------------------------------------------------------------------------------------------------
var sp_arvore = document.querySelectorAll(".sp_mapa_botanico");
sp_arvore.forEach(function (c) {
    c.addEventListener("click", function () {
        getIdClicado(c);
        location.href = "digital_exhibition.html?id=" + id_clicado + "";
    })
})

function openSobreAnatomia() {
    let sobreAnatomia_container = document.getElementById("sobreAnatomia_container");
    $(sobreAnatomia_container).slideToggle(1000);
    let anatomiaContainerTitle = document.getElementById("anatomiaContainerTitle");
    if (anatomiaContainerTitle.innerHTML == "About the Anatomy +") {
        anatomiaContainerTitle.innerHTML = "About the Anatomy -";
    } else if (anatomiaContainerTitle.innerHTML == "About the Anatomy -") {
        anatomiaContainerTitle.innerHTML = "About the Anatomy +";
    }
}

function openSobreEspecies() {
    let sobreEspecie_container = document.getElementById("sobreEspecie_container");
    $(sobreEspecie_container).slideToggle(1000);
    let titleSobreEspecies = document.getElementById("titleSobreEspecies");
    if (titleSobreEspecies.innerHTML == "About the Phylogeny +") {
        titleSobreEspecies.innerHTML = "About the Phylogeny -";
    } else if (titleSobreEspecies.innerHTML == "About the Phylogeny -") {
        titleSobreEspecies.innerHTML = "About the Phylogeny +";
    }
}

let scrollUp;
function openSobreProcesso() {
    let sobreProcesso_container = document.getElementById("sobreProcesso_container");
    $(sobreProcesso_container).slideToggle(1000);
    let sobreProcessoTitle = document.getElementById("sobreProcessoTitle");
    if (sobreProcessoTitle.innerHTML == "About the Process +"){
        sobreProcessoTitle.innerHTML = "About the Process -";
    } else if (sobreProcessoTitle.innerHTML == "About the Process -") {
        sobreProcessoTitle.innerHTML = "About the Process +";
    }

    scrollUp = !scrollUp;
    buttonScrollUp();
}
function buttonScrollUp() {
    //----------------------------------------------------------------------------------------------------------------------
    //BOTÃO UP e SCROLL
    let seta_scroll_up_container = document.getElementById("seta_scroll_up_container");
    let seta_scroll_up_p = document.getElementById("seta_scroll_up_p");
    let sobreProcessoTitle = document.getElementById("sobreProcessoTitle");

    let sobreEspeciesBigContainer = document.getElementById("sobreEspeciesBigContainer");
    let pessoasBigContainer = document.getElementById("pessoasBigContainer")

    window.addEventListener('scroll', function () {
        var positionSobreEspeciesBigContainer = sobreEspeciesBigContainer.getBoundingClientRect();
        var positionPessoasBigContainer = pessoasBigContainer.getBoundingClientRect();

        if (window.innerWidth > 768) {
            if (scrollUp == true) {
                //checking for partial visibility
                if ((positionSobreEspeciesBigContainer.bottom >= 0) || (positionPessoasBigContainer.top < window.innerHeight)) {
                    seta_scroll_up_container.style.display = "none";
                } else {
                    seta_scroll_up_container.style.display = "flex";
                }
            } else {
                seta_scroll_up_container.style.display = "none";
            }

            seta_scroll_up_container.addEventListener("mouseover", function () {
                seta_scroll_up_p.style.color = "#333333";
            })
            seta_scroll_up_container.addEventListener("mouseout", function () {
                seta_scroll_up_p.style.color = "transparent";
            })
        } else {
            seta_scroll_up_container.style.display = "none";
        }
    })

    seta_scroll_up_container.addEventListener("click", function () {
        sobreProcessoTitle.scrollIntoView({
            behavior: 'smooth'
        });
    })
}

//BOTÃO PT EN----------------------------------------------------------------------------------------------------------------------
let buttonPT = document.getElementById("botaoPT_4");
buttonPT.addEventListener("click", function (){
    window.location.href = "sobre_o_projeto.html";
})