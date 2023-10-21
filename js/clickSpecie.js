var id_hover = [];
var id_clicado = [];
var idSpecieFinal;
let id_sp_mapa_botanico;
let id_sp_slice;
let id_sp;

let slideIndex = 1;
var specie_image_jbuc = document.getElementById("specie_image_jbuc_0");
var specie_image_jbuc_1 = document.getElementById("specie_image_jbuc_1");
var specie_image_jbuc_2 = document.getElementById("specie_image_jbuc_2");
let n_imgs;

let seta_scroll_up_container = document.getElementById("seta_scroll_up_container");
let seta_scroll_up_p = document.getElementById("seta_scroll_up_p");
let visualization_container = document.getElementById("visualization_container");

let specie_container = document.getElementById("specie_container");
let specie_jbuc_container = document.getElementById("specie_jbuc_container");
let specie_image_anatomy = document.getElementById("specie_image_anatomy");
let specie_image_anatomy_button = document.getElementById("specie_image_anatomy_button");
let specie_image_anatomy_container = document.getElementById("specie_image_anatomy_container");
let hover_mapa_container = document.getElementById("hover_mapa_container");
let specie_latin_name_botanico = document.getElementById("specie_latin_name_botanico");
let specie_name_botanico = document.getElementById("specie_name_botanico");
let mapa_botanico_image = document.getElementById("mapa_botanico_image");

//LEGENDA----------------------------------------------------------------------------------------------------------------------
let legedanOpen = false;
let column1Legenda = document.createElement("div");
let column2Legenda = document.createElement("div");
let legendaMapaContainer = document.getElementById("legendaMapaContainer");

let circleNumero, textNumero, numeroContainer;
let posXX, posYY;
let raio, fontSize;

var sp_mapa_botanico = document.querySelectorAll(".sp_mapa_botanico");
console.log(legedanOpen)

window.onload = function (event) {
    drawNumeros();
    getPosNumeros();
    if (legedanOpen == true) {
        displayModulos();
    }
}

window.onresize = function (event) {
    getPosNumeros();
    if (legedanOpen == true) {
        displayModulos();
    }
};

window.addEventListener('scroll', function () {
    //BOTÃO UP e SCROLL----------------------------------------------------------------------------------------------------------------------
    //https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
    let positionMapa = mapa_botanico_image.getBoundingClientRect();
    let positionVisualization = visualization_container.getBoundingClientRect();

    // MAPA || FOOTER checking for partial visibility
    if ((positionMapa.bottom >= 0) || (positionVisualization.top < window.innerHeight)) {
        //console.log('Element is partially visible in screen');
        seta_scroll_up_container.style.display = "none";
    } else {
        seta_scroll_up_container.style.display = "flex";
    }

    seta_scroll_up_container.addEventListener("mouseover", function () {
        seta_scroll_up_p.style.color = "#333333";
    })
    seta_scroll_up_container.addEventListener("mouseout", function () {
        seta_scroll_up_p.style.color = "transparent";
    })
})
sp_mapa_botanico.forEach(function (a, i) {
    //ADCIONAR TEXTO LEGENDA EM BAIXO
    let textLegenda = document.createElement("p");
    d3.json("/assets/data/dados_inside_out_v6.json").then(d => {
        nSpecies = Object.keys(d.species_data).length;
        data = d.species_data;
        getIdHover(a);
        let nomeLatim = data[id_hover[0]].nome_especie;
        let nomeComum = data[id_hover[0]].nome_pt;
        textLegenda.innerHTML = Number(i + 1) + " - <em>" + nomeLatim + "</em> " + "<span class='nomeComum'>(" + nomeComum + ")</span>";
        textLegenda.id = data[id_hover[0]].ident;
        textLegenda.classList.add("legenda_text_hover");
        textLegenda.style.width = "fit-content";
    })
    if (i <= 18) {
        column1Legenda.appendChild(textLegenda);
    } else {
        column2Legenda.appendChild(textLegenda);
    }
    //QUANDO HÁ CLICK NO TEXTO LEGENDA EM BAIXO
    textLegenda.addEventListener("click", function () {
        idSpecieFinal = textLegenda.id - 1;
        exposicao_json(textLegenda.id - 1);
        specie_container.scrollIntoView({
            behavior: 'smooth'
        })
    })
    //QUANDO HÁ HOVER
    a.addEventListener("mouseover", function () {
        getIdHover(a);
        d3.json("/assets/data/dados_inside_out_v6.json").then(d => {
            nSpecies = Object.keys(d.species_data).length;
            data = d.species_data;
            functionPopContainer();
        })
        //DISPLAY POP CONTAINER
        checkMobileSize();
    })
    a.addEventListener("mouseout", function () {
        hover_mapa_container.style.display = "none";
    })
})
seta_scroll_up_container.addEventListener("click", function () {
    document.getElementById("svgMapaContainer").scrollIntoView({
        behavior: 'smooth'
    });
})

//BOTÃO PT EN----------------------------------------------------------------------------------------------------------------------
let buttonEN = document.getElementById("botaoEN");
buttonEN.addEventListener("click", function () {
    window.location.href = "digital_exhibition.html";
})

function displayModulos() {
    //MODULOS DO MAPA DESAPARECEM A PARTIR DO TABLET (apenas números)
    let w = window.innerWidth;
    let ib = document.getElementsByClassName("sp_mapa_botanico");
    if (w < 768) {
        for (let i = 0; i < ib.length; i++) {
            ib[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < ib.length; i++) {
            ib[i].style.display = "block";
        }
    }
}
function drawNumeros() {
    //ADCIONAR LEGENDA MAPA (CONTAINER + NÚMEROS)
    sp_mapa_botanico.forEach(function (a, i) {
        numeroContainer = d3.select('#svgMapaContainer svg').append('g');
        numeroContainer.attr('class', 'info_numero info_numero_close');
        circleNumero = numeroContainer.append('circle')
            .attr('class', 'circleNumeroClass')
            .attr('fill', '#333333')
        textNumero = numeroContainer.append('text')
            .attr('font-family', 'Lato')
            .attr('fill', 'white')
            .style('text-anchor', 'middle')
            .style('alignment-baseline', 'central')
    })
}
function getPosNumeros() {
    sp_mapa_botanico.forEach(function (a, i) {
        //POSICIONAR OS NUMEROS NO MAPA
        let posX = a.getBBox().x;
        let posY = a.getBBox().y;

        let w = window.innerWidth;
        if (w < 768) {
            posXX = posX + 10;
            posYY = posY + 10;
            raio = 16;
            fontSize = 15;

            circleNumero.attr('cx', posXX)
                .attr('cy', posYY)
                .attr('r', raio)
            textNumero.text(Number(i + 1))
                .attr('font-size', fontSize + 'px')
                .attr('x', posXX)
                .attr('y', posYY)

            console.log("mobile", posXX, posYY, raio);
            //newPosNumeros(posXX, posYY, raio, fontSize, i);
        } else {
            posXX = posX - 10;
            posYY = posY;
            raio = 12;
            fontSize = 13;

            circleNumero.attr('cx', posXX)
                .attr('cy', posYY)
                .attr('r', raio)
            textNumero.text(Number(i + 1))
                .attr('font-size', fontSize + 'px')
                .attr('x', posXX)
                .attr('y', posYY)

            console.log("desktop", posXX, posYY, raio);
            //newPosNumeros(posXX, posYY, raio, fontSize, i);
        }
    })
}
function newPosNumeros(posXX, posYY, raio, fontSize, i) {
    circleNumero.attr('cx', posXX)
        .attr('cy', posYY)
        .attr('r', raio)
    textNumero.text(Number(i + 1))
        .attr('font-size', fontSize + 'px')
        .attr('x', posXX)
        .attr('y', posYY)
    console.log(circleNumero.cx); //fica indefinido!!!1
}
function legendaFunction() {
    //ABRIR E FECHAR LEGENDA
    if (legedanOpen == true) {
        legedanOpen = false;
    } else if (legedanOpen == false) {
        legedanOpen = true;
    }
    console.log(legedanOpen)
    legendaMapaContainer.appendChild(column1Legenda);
    legendaMapaContainer.appendChild(column2Legenda);
    //CONTAINER LEGENDA
    legendaMapaContainer.classList.toggle("legendaClose");
    //CONTAINER TEXT
    document.getElementById("textBigContainer").classList.toggle("textClose");
    //NÚMEROS NO MAPA
    let numeroContainer = document.querySelectorAll(".info_numero");
    numeroContainer.forEach(function (div) {
        div.classList.toggle("info_numero_close");
    })

    return legedanOpen;
}

function getIdHover(i) {
    //DEFINIR O VALOR DE ID HOVER
    id_sp_mapa_botanico = i.id;
    id_sp_slice = id_sp_mapa_botanico.slice(2, 4);

    for (let j = 0; j < id_sp_slice.length; j++) {
        if (id_sp_slice[j] == "_") {
            id_sp = id_sp_slice.slice(0, 1);
        } else {
            id_sp = id_sp_slice;
        }
    }
    id_hover = [];
    id_hover.push(Number(id_sp) - 1);
}

function functionPopContainer() {
    //DEFINIR VALORES DO TEXTO DO POP CONTAINER
    specie_latin_name_botanico.innerHTML = "<em>" + data[id_hover[0]].nome_especie + "</em>";
    specie_name_botanico.innerHTML = data[id_hover[0]].nome_pt;
}

function checkMobileSize() {
    //QUANDO O SCREEN SIZE É DESKTOP
    let w = window.innerWidth;
    //O CONTAINER HOVER SÓ APARECE NO DESKTOP
    if (w > 768) {
        hover_mapa_container.style.display = "flex";
        let posX = event.clientX;
        let posY = Number(event.clientY - 55);
        let wHoverMapaContainer = hover_mapa_container.offsetWidth;
        //PARA A ESQUERDA QUANDO NÃO CABE NA JANELA
        if (posX + 200 > w) {
            hover_mapa_container.style.left = Number(posX - wHoverMapaContainer) + "px";
            hover_mapa_container.style.borderRadius = "10px 10px 0 10px";
            hover_mapa_container.style.alignItems = "flex-end";
        }
        //PARA A ESQUERDA QUANDO CABE
        else {
            hover_mapa_container.style.left = posX + "px";
            hover_mapa_container.style.borderRadius = "10px 10px 10px 0";
            hover_mapa_container.style.alignItems = "flex-start";
        }
        hover_mapa_container.style.top = posY + "px";
    }
}


function showSlides(cS) {
    //SLIDESHOW----------------------------------------------------------------------------------------------------------------------
    //let slides = document.getElementsByClassName("mySlides_JBUC");
    let slides = document.getElementsByClassName("specie_image_jbuc");

    if (cS > n_imgs) { //slides.length) { //se ultrupassar para a frente, vai para o início
        slideIndex = 1;
    }
    if (cS < 1) {
        slideIndex = slides.length; //se andar demasiado para trás para a frente, vai para o fim
    }
    console.log("cs", cS);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].addEventListener("error", function () {
        console.log("adeus")
    })

    slides[slideIndex - 1].style.display = "block";

}

function plusSlides(n) {
    let currentSlide = slideIndex = slideIndex + n;
    showSlides(currentSlide);
}









