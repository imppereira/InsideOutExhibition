//https://www.youtube.com/watch?v=ITa0C4WQq0Q&ab_channel=HMProgramming
$(document).ready(function () {
    //PASSO1
    let textoInicialButton = document.getElementById("textoInicialButton");
    let textoInicialAfter = document.getElementById("textoInicialAfter");
    $(textoInicialButton).click(function () {
        $(textoInicialAfter).slideToggle(1000);
        if (textoInicialButton.innerHTML == "Ler mais...") {
            textoInicialButton.innerHTML = "Ler menos...";
        } else if (textoInicialButton.innerHTML == "Ler menos...") {
            textoInicialButton.innerHTML = "Ler mais...";
        }
    });
})

//QUANDO HÁ CLICK NO MÓDULO DO MAPA------------------------------------------------------------------------------------------------------
var sp_arvore = document.querySelectorAll(".sp_mapa_botanico");
sp_arvore.forEach(function (c) {
    c.addEventListener("click", function () {
        getIdClicado(c);
        location.href = "exposicao_digital.html?id=" + id_clicado + "";
    })
})

function openSobreAnatomia() {
    let sobreAnatomia_container = document.getElementById("sobreAnatomia_container");
    $(sobreAnatomia_container).slideToggle(1000);
    let anatomiaContainerTitle = document.getElementById("anatomiaContainerTitle");
    if (anatomiaContainerTitle.innerHTML == "Sobre a Anatomia +") {
        anatomiaContainerTitle.innerHTML = "Sobre a Anatomia -";
    } else if (anatomiaContainerTitle.innerHTML == "Sobre a Anatomia -") {
        anatomiaContainerTitle.innerHTML = "Sobre a Anatomia +";
    }
}

function openSobreEspecies() {
    let sobreEspecie_container = document.getElementById("sobreEspecie_container");
    $(sobreEspecie_container).slideToggle(1000);
    let titleSobreEspecies = document.getElementById("titleSobreEspecies");
    if (titleSobreEspecies.innerHTML == "Sobre a Filogenia +") {
        titleSobreEspecies.innerHTML = "Sobre a Filogenia -";
    } else if (titleSobreEspecies.innerHTML == "Sobre a Filogenia -") {
        titleSobreEspecies.innerHTML = "Sobre a Filogenia +";
    }
}

//SCROLL UP NO PROCESSO-------------------------------------------------------------------------------------------------------------------
let scrollUp;
function openSobreProcesso() {
    let sobreProcesso_container = document.getElementById("sobreProcesso_container");
    $(sobreProcesso_container).slideToggle(1000);
    let sobreProcessoTitle = document.getElementById("sobreProcessoTitle");
    if (sobreProcessoTitle.innerHTML == "Sobre o Processo +"){
        sobreProcessoTitle.innerHTML = "Sobre o Processo -";
    } else if (sobreProcessoTitle.innerHTML == "Sobre o Processo -") {
        sobreProcessoTitle.innerHTML = "Sobre o Processo +";
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
let buttonEN = document.getElementById("botaoEN_3");
buttonEN.addEventListener("click", function () {
    window.location.href = "about_the_project.html";
})