var idSpecieFinal;
window.onload = function(){
    //CHAMA A ESPÉCIE CLICADA NA ÁRVORE FILOGENÉTICA E NO MAPA DO JBUC
    const urlParams = new URL(window.location.href).searchParams;
    const id = urlParams.get('id');
    console.log("id",id);
    if(id){
        idSpecieFinal = Number(id)-1;
        exposicao_json(Number(id)-1);
        let specie_container = document.getElementById("specie_container");
        specie_container.scrollIntoView({
            behavior: 'smooth'
        })
    }

    onLoadVisualization();
}
//----------------------------------------------------------------------------------------------------------------------
window.onscroll = function () {
    //BARRA DE PROGRESSO
    //https://pt.stackoverflow.com/questions/292906/barra-de-carregamento-baseado-no-scroll
    functionScrollProgression();
};
//----------------------------------------------------------------------------------------------------------------------
//DEFINIR O VALOR DO ID CLICADO
function getIdClicado(c) {
    //vai buscar o id
    id_sp_mapa_botanico = c.id;
    id_sp_slice = id_sp_mapa_botanico.slice(2, 4);
    for (let j = 0; j < id_sp_slice.length; j++) {
        if (id_sp_slice[j] == "_") {
            id_sp = id_sp_slice.slice(0, 1);
        } else {
            id_sp = id_sp_slice;
        }
    }
    id_clicado = [];
    id_clicado.push(id_sp);
    console.log("id_clicado",id_clicado);
}
//FUNÇÃO PARA REVELAR O CONTEÚDO NO SCROLL
function functionScrollProgression() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50; //distância do topo da janela

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

let hamburguer = document.getElementById("hamburguer");
let hamburguerOpen = false;
hamburguer.addEventListener("click", function () {
    document.getElementById("header_hamburguer_container").classList.toggle("hamburguerClose");
    hamburguerOpen = !hamburguerOpen;
    console.log(hamburguerOpen)
    if (hamburguerOpen == true) {
        document.body.style.overflowY = "hidden";
        document.getElementById("htmlContainer").style.overflowY = "hidden";

    } else {
        document.body.style.overflowY = "scroll";
        document.getElementById("htmlContainer").style.overflowY = "scroll";
    }
})




