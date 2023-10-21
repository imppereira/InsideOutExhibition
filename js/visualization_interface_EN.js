//INTERFACE------------------------------------------------------------------------
let barra_lateral_legenda_container = document.getElementById("legenda_container");
let barra_lateral_filtro_container = document.getElementById("filtro_container");
let legenda_title = document.getElementById("legenda_title");
let filtro_title = document.getElementById("filtro_title")
let cruz_legenda = document.getElementById("legenda_container_cruz");
let cruz_filtro = document.getElementById("filtro_container_cruz");

let cruz_clickEspecie = document.getElementById("click_mapa_container_cruz");
let click_mapa_container = document.getElementById("click_mapa_container");

let drop_seta = document.getElementsByClassName("drop_seta");
let drop_content = document.getElementsByClassName("dropdown_content");

//POP NOVO CONTÉUDO ESPÉCIE------------------------------------------------------------------------
cruz_clickEspecie.addEventListener("click", function(){
    click_mapa_container.style.display = "none";
})

//BARRA LATERAL------------------------------------------------------------------------
checkDisplayUnderline();
cruz_legenda.addEventListener("click", fecharBarraLateral);
cruz_filtro.addEventListener("click", fecharBarraLateral);

function fecharBarraLateral(){
    barra_lateral_legenda_container.style.display = "none";
    barra_lateral_filtro_container.style.display = "none";
    checkDisplayUnderline();
}

function LegendaContainerOpen() {
    barra_lateral_filtro_container.style.display = "none";
    barra_lateral_legenda_container.style.display = "block";
    checkDisplayUnderline();
}

function FiltroContainerOpen() {
    barra_lateral_legenda_container.style.display = "none";
    barra_lateral_filtro_container.style.display = "block";
    checkDisplayUnderline();
}

//Verifica o display para mudar o underline
function checkDisplayUnderline() {
    if (window.getComputedStyle(barra_lateral_legenda_container).display != "none") {
        legenda_title.style.textDecoration = "underline";
    } else {
        legenda_title.style.textDecoration = "none";
    }
    if (window.getComputedStyle(barra_lateral_filtro_container).display != "none") {
        filtro_title.style.textDecoration = "underline";
    } else {
        filtro_title.style.textDecoration = "none";
    }
}
//FUNÇÃO CLICK NO DROPDOWN------------------------------------------------------------------------
for (let i = 0; i < drop_seta.length; i++) {
    drop_seta[i].addEventListener("click", function () {
        drop_content[i].classList.toggle("dropdown_content_open");

        if (window.getComputedStyle(drop_content[i]).display == "none") {
            drop_seta[i].src = "img/seta_baixo.png";
        } else {
            drop_seta[i].src = "img/seta_cima.png";
        }
    })
}
