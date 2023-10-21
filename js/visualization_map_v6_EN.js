let geoJsonFile = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
let nSpecies;
let data;

//Criar o svg que contém o mapa-----------------------------------------------------------
let mapa_svg = document.getElementById("my_dataviz");
let width = mapa_svg.clientWidth;
let height = mapa_svg.clientHeight;
let svg, zoom, projectionMap;
let widthModulo, heightModulo, widthAngio, heightAngio, widthGimno, heightGimno, widthIdade, heightIdade;

const modulosVis = {
    idade_0: "idade_0",
    idade_1: "idade_1",
    idade_2: "idade_2",
    idade_3: "idade_3",
    idade_4: "idade_4",
    idade_5: "idade_5",
    gimno_0: "gimno_0",
    gimno_1: "gimno_1",
    gimno_2: "gimno_2",
    gimno_3: "gimno_3",
    gimno_4: "gimno_4",
    gimno_5: "gimno_5",
    angio_0: "angio_0",
    angio_1: "angio_1",
    angio_2: "angio_2",
    angio_3: "angio_3",
    angio_4: "angio_4",
    angio_5: "angio_5"
}

let filtros = {
    "n_regioes": 'null',
    "idade_max": 'null',
    "tipo_arvore": 'null',
    "estado_conservacao": 'null',
    "nome_familia": 'null',
    "altura_media": 'null',
    "largura_media": 'null',
    "tipo_folha": 'null',
    "dioica": 'null'
}

/*FUNÇÃO QUE TRATA DO ZOOM DO MAPA E MÓDULOS*/
function zoomIn() {
    //Zoom
    let zoom = d3.zoom()
    zoom.on('zoom', handleZoom);
    zoom.scaleBy(svg.transition().duration(750), 1.2);
}

function zoomOut() {
    //Zoom
    let zoom = d3.zoom()
    zoom.on('zoom', handleZoom);
    zoom.scaleBy(svg.transition().duration(750), 0.8);
}

function handleZoom(e) {
    //move o mapa
    d3.select('#my_dataviz .mapaG')
        .attr('transform', e.transform);

    //move todos os modulos
    d3.selectAll('.moduloG')
        .attr('transform', e.transform)

    // change in scale
    if (e.transform.k > 1 && e.transform.k < 3) {
        //alterar tamanho em cada um dos módulos
        let aumentoModulo = (1 - (e.transform.k - 1) / e.transform.k);

        //REGIAO
        let moduloRegiao = d3.selectAll('.moduloRegiao')
        moduloRegiao.attr('width', widthRegiao * aumentoModulo)
            .attr('height', heightRegiao * aumentoModulo)
            .attr('transform', function () {
                let difWidth = widthRegiao * aumentoModulo - widthRegiao;
                let difHeight = heightRegiao * aumentoModulo - heightRegiao;
                let xt = difWidth / 2
                let yt = difHeight / 2
                return 'translate(' + -xt + ',' + -yt + ')'
            })

        //ANGIO
        let moduloAngio = d3.selectAll('.moduloAngio')
        moduloAngio.attr('width', widthAngio * aumentoModulo)
            .attr('height', heightAngio * aumentoModulo)
            .attr('transform', function () {
                let difWidth = widthAngio * aumentoModulo - widthAngio;
                let difHeight = heightAngio * aumentoModulo - heightAngio;
                let xt = difWidth / 2
                let yt = difHeight / 2
                return 'translate(' + -xt + ',' + -yt + ')'
            })

        //GIMNO
        let moduloGimno = d3.selectAll('.moduloGimno')
        moduloGimno.attr('width', widthGimno * aumentoModulo)
            .attr('height', heightGimno * aumentoModulo)
            .attr('transform', function () {
                let difWidth = widthGimno * aumentoModulo - widthGimno;
                let difHeight = heightGimno * aumentoModulo - heightGimno;
                let xt = difWidth / 2
                let yt = difHeight / 2
                return 'translate(' + -xt + ',' + -yt + ')'
            })

        //IDADE
        let moduloIdade = d3.selectAll('.moduloIdade')
        moduloIdade.attr('width', widthIdade * aumentoModulo)
            .attr('height', heightIdade * aumentoModulo)
            .attr('transform', function () {
                let difWidth = widthIdade * aumentoModulo - widthIdade;
                let difHeight = heightIdade * aumentoModulo - heightIdade;
                let xt = difWidth / 2
                let yt = difHeight / 2
                return 'translate(' + -xt + ',' + -yt + ')'
            })
    }
}

function zoomMove(e) {
    if (e.sourceEvent.type === 'mousemove') {
        //move o mapa
        d3.select('#my_dataviz .mapaG')
            .attr('transform', e.transform);

        //move todos os modulos
        d3.selectAll('.moduloG')
            .attr('transform', e.transform)
    }
}

/*FUNÇÃO QUE CHAMA TUDO QUANDO A PÁGINA É INICIADA*/
function onLoadVisualization() {
//MAPA--------------------------------------------------------------------------------------------------------------------------------
    d3.json(geoJsonFile).then(function (data) {
        let zoomSVG = d3.zoom()
        zoomSVG.on('zoom', zoomMove);

        //Projeção
        projectionMap = d3.geoNaturalEarth1()
            .fitSize([width, height], data);

        //Desenhar o mapa
        let svg1 = d3.select('#my_dataviz')

        svg = svg1.append("g")
            .attr('width', width)
            .attr('height', height)
            .call(zoomSVG)
            .on("mousewheel.zoom", null)
            .on("DOMMouseScroll.zoom", null) // disables older versions of Firefox
            .on("wheel.zoom", null) // disables newer versions of Firefox
            .style("transform", "translateX(-200px)")

        svg.append("g")
            .attr('class', 'mapaG')
            .selectAll("path")
            .data(data.features)
            .join("path")
            .attr("fill", "#D9D9D9")
            .attr("d", d3.geoPath()
                .projection(projectionMap)
            )
            .style("stroke", "#D9D9D9") //pus as linhas dos países cinzentas para não se ver

        //Chama os dados
        d3.json("/assets/data/dados_inside_out_v6.json").then(i => {
            nSpecies = Object.keys(i.species_data).length;
            originalData = i.species_data;
            //functionDrawVisualization(originalData)

            //inicialmente: dados originais
            finalData = originalData;

            //após o click nos filtros: dados filtrados
            d3.selectAll(".grupoDrop").on("change", function (d) {
                selectedGroup = this.value;
                updateChart(originalData, selectedGroup, this.id)
            })

            //após o click no botão limpar filtros
            d3.select("#buttonCleanData").on("click", function () {
                cleanData();
            })

            //chamar a função que desenha os módulos
            functionDrawVisualization(finalData, originalData);
        })
    })
}

const cleanData = (e) => {
    let selectDrop = document.getElementsByClassName('grupoDrop');
    for (let i = 0; i < selectDrop.length; i++) {
        if (selectDrop[i].value != 'null') {
            selectDrop[i].value = 'null';
            console.log(selectDrop[i]);
            updateChart(originalData, selectDrop[i].value, selectDrop[i].id)
        }
    }
};

/*FUNÇÃO DE FITLRAGEM DOS DADOS*/
function updateChart(data, selectedGroup, selectedID) {

    filtros[selectedID] = selectedGroup;
    let filteredData = JSON.parse(JSON.stringify(data));

    for (const key in filtros) {
        if (filtros[key] !== 'null') {

            if (key == "idade_max" || key == "altura_media" || key == "largura_media") {
                console.log(key, filtros[key]);

                let breakId = filtros[key].indexOf("_");
                let value1 = filtros[key].substring(0, breakId);
                let value2 = filtros[key].substring(breakId + 1);
                console.log(breakId, value1, value2)

                if (filtros[key] == "0") {
                    filteredData = Object.values(filteredData).filter(function (d) {
                        return d[key] == null;
                    });
                } else if (filtros[key] == "50" || filtros[key] == "10" || filtros[key] == "1") {
                    filteredData = Object.values(filteredData).filter(function (d) {
                        return d[key] > 0 && d[key] < value2;
                    });
                } else if (filtros[key] == "500" || filtros[key] == "40" || filtros[key] == "3") { //ALTEREI filtros[key] == "1000"
                    filteredData = Object.values(filteredData).filter(function (d) {
                        return d[key] >= value2;
                    });
                } else {
                    filteredData = Object.values(filteredData).filter(function (d) {
                        return d[key] >= value1 && d[key] < value2;
                    });
                }
            } else {
                filteredData = Object.values(filteredData).filter(function (d) {
                    return d[key] === filtros[key];
                });
            }
        }
    }
    finalData = filteredData;

    console.log(finalData);
    functionDrawVisualization(finalData, data);
}

//VARIÁVEIS
let idadeMaxima = [];
let idadeMaximaGrafico = [];
let alturaMediaGrafico = [];
let larguraMediaGrafico = [];
let idadeScale;
let estadoConservacao = [];
let estadoScale;
let coordenadasRegiao = [];
let coordenadasLat = [];
let coordenadasLong = [];
let grupoPlantas = [];
let nomeEspecie = [];
let idEspecie = [];

/*FUNÇÃO PARA DESENHAR OS MÓDULOS NO MAPA*/
function functionDrawVisualization(data, og_data) {

    idadeMaximaGrafico = [];
    alturaMediaGrafico = [];
    larguraMediaGrafico = [];
    idadeMaxima.length = 0;
    idadeScale = 0;
    estadoConservacao.length = 0;
    estadoScale = 0;
    coordenadasRegiao.length = 0;
    coordenadasLat.length = 0;
    coordenadasLong.length = 0;
    grupoPlantas.length = 0;
    nomeEspecie.length = 0;
    idEspecie.length = 0;

    svg.selectAll(".moduloG").remove();

    Object.keys(og_data).forEach((element, index) => {

        //let index = data[element].ident;
        //GET IDADE FROM TABLE
        if (og_data[element].idade_max == undefined || og_data[element].idade_max == null || og_data[element].idade_max == NaN) {
            idadeMaximaGrafico.push([og_data[element].ident, 0, og_data[element].nome_especie]);

        } else {
            idadeMaximaGrafico.push([og_data[element].ident, Number(og_data[element].idade_max), og_data[element].nome_especie]);

        }
        //GET LARGURA FROM TABLE
        if (og_data[element].largura_media == undefined || og_data[element].largura_media == null || og_data[element].largura_media == NaN) {
            larguraMediaGrafico.push([og_data[element].ident, 0, og_data[element].nome_especie]);
        } else {
            larguraMediaGrafico.push([og_data[element].ident, Number(og_data[element].largura_media), og_data[element].nome_especie]);
        }

        //GET ALTURA FROM TABLE
        if (og_data[element].altura_media == undefined || og_data[element].altura_media == null || og_data[element].altura_media == NaN) {
            alturaMediaGrafico.push([og_data[element].ident, 0, og_data[element].nome_especie]);
        } else {
            alturaMediaGrafico.push([og_data[element].ident, Number(og_data[element].altura_media), og_data[element].nome_especie]);
        }
    });

    Object.keys(data).forEach((element, index) => {

            //let index = data[element].ident;
            //GET IDADE FROM TABLE
            if (data[element].idade_max == undefined || data[element].idade_max == null || data[element].idade_max == NaN) {
                idadeMaxima.push(0);

            } else {
                idadeMaxima.push(Number(data[element].idade_max));

            }
            //DISTRIBUIR DADOS EM INTERVALOS E NOS VALORES QUE CADA INTERVALO VAI TER
            idadeScale = d3.scaleThreshold()
                //.domain([50, 100, 500, 1000]) //INICIALMENTE
                .domain([50, 100, 250, 500]) //ALTEREI
                .range(["1", "2", "3", "4", "5"]);

            //GET ESTADO DE CONSERVAÇÃO
            estadoConservacao.push(data[element].estado_conservacao);
            estadoScale = d3.scaleThreshold()
                .domain(["DD", "LC", "NT", "VU", "EN", "CR", "EW", "EX"])
                .range(["#333333", "#66CCCC", "#336699", "#333399", "#392374", "#663399", "#993399", "#CC3366"]);

            //GET COORDENADAS
            coordenadasRegiao.push(data[element].coordenadas_regiao.split(","));
            coordenadasLat.push(Number(data[element].coordenadas_regiao.split(",")[0]));
            coordenadasLong.push(Number(data[element].coordenadas_regiao.split(",")[1]));

            //GET GRUPO DE PLANTAS
            if (data[element].tipo_arvore == undefined || data[element].tipo_arvore == null || data[element].tipo_arvore == NaN) {
                grupoPlantas.push("");
            } else {
                grupoPlantas.push(data[element].tipo_arvore);
            }

            //GET ID e NOME ESPECIE
            idEspecie.push(element);
            nomeEspecie.push(data[element].nome_especie);

            //MODULOS---------------------------------------------------------------------------------------------------

            //muda com a idade (é o que funciona melhor)
            let sizeInitial = 25;
            if (data[element].idade_max == null) {
                widthModulo = sizeInitial - 4;
                heightModulo = sizeInitial - 4;
            } else if (data[element].idade_max > 0 && data[element].idade_max < 500) {
                widthModulo = sizeInitial - 2;
                heightModulo = sizeInitial - 2;
            } else if (data[element].idade_max >= 500) {
                widthModulo = sizeInitial;
                heightModulo = sizeInitial;
            }

            //G GERAL
            let moduloVis = svg.append('g')
                .attr('id', "modulo" + data[element].nome_especie)
                .attr('class', 'moduloG')
                //QUANDO HÁ HOVER -- APARECE O NOME DA ESPÉCIE
                .on('mouseover', function () {
                    //DISPLAY CONTAINER
                    let hover_mapa_container = document.getElementById("hover_mapa_container");
                    hover_mapa_container.style.display = "flex"
                    let posX = event.clientX + "px";
                    let posY = Number(event.clientY - 55) + "px";
                    hover_mapa_container.style.left = posX;
                    hover_mapa_container.style.top = posY;
                    //------------------------------
                    //ADICIONAR CONTEÚDO DO CONTAINER
                    let specie_latin_name_botanico = document.getElementById("specie_latin_name_botanico");
                    let specie_name_botanico = document.getElementById("specie_name_botanico");
                    specie_latin_name_botanico.innerHTML = "<em>" + data[Number(index)].nome_especie + "</em>";
                    specie_name_botanico.innerHTML = data[Number(index)].nome_en;
                })
                //QUANDO NÃO HÁ HOVER
                .on('mouseout', function () {
                    let hover_mapa_container = document.getElementById("hover_mapa_container");
                    hover_mapa_container.style.display = "none";
                })
                //QUANDO HÁ CLICK
                .on('click', function () {
                    let containerFiltroLegenda = document.getElementById("containerFiltroLegenda");
                    containerFiltroLegenda.style.display = "none";

                    let click_mapa_container = document.getElementById("click_mapa_container")
                    click_mapa_container.style.display = "flex";

                    //INFORMAÇÃO
                    let click_nomeSpecie = document.getElementById("click_nomeSpecie");
                    click_nomeSpecie.innerHTML = data[Number(index)].nome_especie;
                    let click_taxoSpecie = document.getElementById("click_taxoSpecie");
                    click_taxoSpecie.innerHTML = data[Number(index)].taxonimistas;
                    let click_nomePTSpecie = document.getElementById("click_nomePTSpecie");
                    click_nomePTSpecie.innerHTML = data[Number(index)].nome_en;
                    let click_familiaSpecie = document.getElementById("click_familiaSpecie");
                    click_familiaSpecie.innerHTML = data[Number(index)].nome_familia;
                    let click_regiaoSpecie = document.getElementById("click_regiaoSpecie");
                    click_regiaoSpecie.innerHTML = data[Number(index)].regiao_en;
                    let click_idadeSpecie = document.getElementById("click_idadeSpecie");
                    if (data[Number(index)].idade_max != null) {
                        click_idadeSpecie.innerHTML = data[Number(index)].idade_max + " years";
                    } else {
                        click_idadeSpecie.innerHTML = "Undefined";
                    }
                    let click_larguraSpecie = document.getElementById("click_larguraSpecie");
                    if (data[Number(index)].largura_media != null) {
                        click_larguraSpecie.innerHTML = data[Number(index)].largura_media + " meters";
                    } else {
                        click_larguraSpecie.innerHTML = "Undefined";
                    }
                    let click_alturaSpecie = document.getElementById("click_alturaSpecie");
                    if (data[Number(index)].altura_media != null) {
                        click_alturaSpecie.innerHTML = data[Number(index)].altura_media + " meters";
                    } else {
                        click_alturaSpecie.innerHTML = "Undefined";
                    }
                    let click_grupoSpecie = document.getElementById("click_grupoSpecie");
                    if(data[Number(index)].tipo_arvore=="Gimnospérmica"){
                        click_grupoSpecie.innerHTML = "Gymnosperm";
                    }
                    else if(data[Number(index)].tipo_arvore=="Angiospérmica"){
                        click_grupoSpecie.innerHTML = "Angiosperm";
                    }
                    //ALTEREI click_grupoSpecie.innerHTML = data[Number(index)].tipo_arvore;
                    let click_folhaSpecie = document.getElementById("click_folhaSpecie");
                    if(data[Number(index)].tipo_folha=="Perene"){
                        click_folhaSpecie.innerHTML = "Evergreen";
                    }
                    else if(data[Number(index)].tipo_folha=="Caduca"){
                        click_folhaSpecie.innerHTML = "Deciduous";
                    }
                    else if(data[Number(index)].tipo_folha=="Semi-caduca"){
                        click_folhaSpecie.innerHTML = "Semi-deciduous";
                    }
                    //ALTEREI click_folhaSpecie.innerHTML = data[Number(index)].tipo_folha;
                    let click_dioicaSpecie = document.getElementById("click_dioicaSpecie");
                    if(data[Number(index)].dioica=="Sim"){
                        click_dioicaSpecie.innerHTML = "Dioecious";
                    }
                    else if(data[Number(index)].dioica=="Não"){
                        click_dioicaSpecie.innerHTML = "Monoecious";
                    }
                    //ALTEREI click_dioicaSpecie.innerHTML = data[Number(index)].dioica;
                    let click_estadoSpecie = document.getElementById("click_estadoSpecie");
                    click_estadoSpecie.innerHTML = data[Number(index)].estado_conservacao;

                    //GRÁFICO IDADE
                    drawGrafico(data[element].ident, "click_idade_container", idadeMaximaGrafico);
                    //GRÁFICO ALTURA
                    drawGrafico(data[element].ident, "click_altura_container", alturaMediaGrafico);
                    //GRÁFICO LARGURA
                    drawGrafico(data[element].ident, "click_largura_container", larguraMediaGrafico);
                });
            //CLICAR CRUZ
            let cruz_click_mapa_container = document.getElementById("cruz_click_mapa_container");
            cruz_click_mapa_container.addEventListener("click", function () {
                let containerFiltroLegenda = document.getElementById("containerFiltroLegenda");
                containerFiltroLegenda.style.display = "flex";
            })
            //----------------------------------------------------------------------------------------------------------
            //NÚMERO DE REGIÕES
            let pathNameRegiao = "regiao" + data[element].n_regioes;
            widthRegiao = widthModulo + 20;
            heightRegiao = heightModulo + 20;
            let moduloRegiao = moduloVis.append('image')
                .attr("id", pathNameRegiao + "_" + data[element].id)
                .attr('class', 'moduloRegiao')
                .attr("href", "/assets/img/visualizacao/regioes/" + pathNameRegiao + ".svg")
                .attr('x', function () {
                    let x = projectionMap([coordenadasLong[index], coordenadasLat[index]])[0]
                    return x - Number(widthRegiao / 2)
                })
                .attr('y', function () {
                    let y = projectionMap([coordenadasLong[index], coordenadasLat[index]])[1]
                    return y - Number(heightRegiao / 2)
                })
                .attr('width', widthRegiao)
                .attr('height', heightRegiao)

            //COR DAS IMAGENS-------------------------------------------------------------------------------------------
            let estadoConservacaoCor;
            if (data[element].estado_conservacao == "DD") {
                estadoConservacaoCor = "preto";
            } else if (data[element].estado_conservacao == "LC") {
                estadoConservacaoCor = "ciano";
            } else if (data[element].estado_conservacao == "NT") {
                estadoConservacaoCor = "azul";
            } else if (data[element].estado_conservacao == "VU") {
                estadoConservacaoCor = "roxo";
            } else if (data[element].estado_conservacao == "EN") {
                estadoConservacaoCor = "rosa";
            }
            //----------------------------------------------------------------------------------------------------------
            if (grupoPlantas[index] == "Angiospérmica") {
                //MODULO GIMNO----------------------------------------------------------------------------------------------
                let pathNameAngio = modulosVis["angio_" + idadeScale(idadeMaxima[index])];
                widthAngio = widthModulo + 6;
                heightAngio = heightModulo + 6;
                let moduloAngio = moduloVis.append('image')
                    .attr("id", pathNameAngio + "_" + data[element].id)
                    .attr('class', 'moduloAngio')
                    .attr("href", function () {
                        if (idadeMaxima[index] == 0) {
                            pathNameAngio = "angio_0";
                        } else {
                            pathNameAngio = modulosVis["angio_" + idadeScale(idadeMaxima[index])];
                        }
                        return "/assets/img/visualizacao/angio/" + estadoConservacaoCor + "/" + pathNameAngio + ".svg"
                    })
                    .attr('x', function () {
                        let x = projectionMap([coordenadasLong[index], coordenadasLat[index]])[0]
                        return x - Number(widthAngio / 2)
                    })
                    .attr('y', function () {
                        let y = projectionMap([coordenadasLong[index], coordenadasLat[index]])[1]
                        return y - Number(heightAngio / 2)
                    })
                    .attr('width', widthAngio)
                    .attr('height', heightAngio)
            }
            //MODULO GIMNO----------------------------------------------------------------------------------------------
            let pathNameGimno = modulosVis["gimno_" + idadeScale(idadeMaxima[index])];
            widthGimno = widthModulo;
            heightGimno = heightModulo;
            let moduloGimno = moduloVis.append('image')
                .attr("id", pathNameGimno + "_" + data[element].id)
                .attr('class', 'moduloGimno')
                .attr("href", function () {
                    if (idadeMaxima[index] == 0) {
                        pathNameGimno = "gimno_0";
                    } else {
                        pathNameGimno = modulosVis["gimno_" + idadeScale(idadeMaxima[index])];
                    }
                    return "/assets/img/visualizacao/gimno/" + estadoConservacaoCor + "/" + pathNameGimno + ".svg"
                })
                .attr('x', function () {
                    let x = projectionMap([coordenadasLong[index], coordenadasLat[index]])[0]
                    return x - Number(widthGimno / 2)
                })
                .attr('y', function () {
                    let y = projectionMap([coordenadasLong[index], coordenadasLat[index]])[1]
                    return y - Number(heightGimno / 2)
                })
                .attr('width', widthGimno)
                .attr('height', heightGimno)

            //MODULO IDADE----------------------------------------------------------------------------------------------
            let pathNameIdade = modulosVis["idade_" + idadeScale(idadeMaxima[index])];
            widthIdade = widthModulo - 3;
            heightIdade = heightModulo - 3;
            let moduloIdade = moduloVis.append('image')
                .attr('id', pathNameIdade + "_" + data[element].id)
                .attr('class', 'moduloIdade')
                .attr("href", function () {
                    if (idadeMaxima[index] == 0) {
                        pathNameIdade = "idade_0";
                    } else {
                        pathNameIdade = modulosVis["idade_" + idadeScale(idadeMaxima[index])];
                    }
                    return "/assets/img/visualizacao/idade/" + estadoConservacaoCor + "/" + pathNameIdade + ".svg"
                })
                .attr('x', function () {
                    let x = projectionMap([coordenadasLong[index], coordenadasLat[index]])[0]
                    return x - Number(widthIdade / 2)
                })
                .attr('y', function () {
                    let y = projectionMap([coordenadasLong[index], coordenadasLat[index]])[1]
                    return y - Number(heightIdade / 2)
                })
                .attr('width', widthIdade)
                .attr('height', heightIdade)
        }
    )
}

/*FUNÇÃO PARA DESENHAR OS GRÁFICOS (IDADE, LARGURA E ALTURA) APÓS O CLICK*/
function drawGrafico(index, idContainer, dados) {

    dados.sort((f, s) => {
        return f[1] - s[1]
    });

    //https://d3-graph-gallery.com/graph/barplot_basic.html
    // set the dimensions and margins of the graph
    var marginSVG2 = {top: 30, right: 30, bottom: 70, left: 60},
        //widthSVG2 = 520 - marginSVG2.left - marginSVG2.right,
        widthSVG2 = 600 - marginSVG2.left - marginSVG2.right,
        heightSVG2 = 300 - marginSVG2.top - marginSVG2.bottom,
        heightY_axis = heightSVG2 - 50;

    d3.select("#" + idContainer).html('');

    //svgIdade é o SVG de cada gráfico
    var svgIdade = d3.select("#" + idContainer)
        .append("svg")
        .attr("width", widthSVG2 + marginSVG2.left + marginSVG2.right)
        .attr("height", heightSVG2 + marginSVG2.top + marginSVG2.bottom)
        .append("g")
        .attr("transform",
            "translate(" + marginSVG2.left + "," + marginSVG2.top + ")");

    //a é o g cque engloba tudo
    let a = svgIdade.append("g")
        .attr('transform', "translate(" + widthSVG2 / 2 +", 0)")

    //título do gráfico
    let text = a.append("text")
        //.attr('x', widthSVG2 / 2)
        //.attr('y', 0)
        .attr("fill", "#333333")
        .text(function () {
            if (idContainer == "click_idade_container") {
                return "Chart Maximum Age"
            } else if (idContainer == "click_altura_container") {
                return "Chart Average Height"
            } else if (idContainer == "click_largura_container") {
                return "Chart Average Width"
            }
        })
        .style("text-anchor", "middle") //centra texto
        .style("font-family", "Lato")
        .style("font-size", "0.9rem")

    //get value of text width to transformX buttonContainer---------------------------------------------------
    let widthText = text.node().getBBox().width;
    //posição do buttonContainer------------------------------------------------------------------------------
    let transformX = widthText/2 + 15;
    let transformY = -5;
    //mensagem após passar o rato por cima do botão que está ao lado do texto--------------------------------
    let message = svgIdade.append('text')
        .text("By hovering your mouse over the bars you can compare values")
        .attr('x', widthSVG2 / 2)
        .attr('y', -20)
        .attr("fill", "#333333")
        .style("text-anchor", "middle")
        .style("font-family", "Lato")
        .style("font-size", "0.7rem")
        .style('display', 'none')
    //botão (g)----------------------------------------------------------------------------------------------
    let buttonContainer = a.append("g")
        .attr('transform', 'translate('+ transformX +','+transformY +')')
        .on('mouseover', function(){
            d3.select(this).style("cursor", "pointer")
            message.style('display', 'block')
        })
        .on('mouseout', function(){
            d3.select(this).style("cursor", "auto")
            message.style('display', 'none')
        })
    //círculo do botão---------------------------------------------------------------------------------------
    let c = buttonContainer.append("circle")
        .attr("r", 8)
        .attr("stroke","white")
        .attr("fill","#66CCCC")
        .on('mouseover', function(){
            d3.select(this).style("filter", "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25)")
        })
        .on('mouseout', function(){
            d3.select(this).style("filter", "none")
        })
    let heightCircle =  c.node().getBBox().height;
    //texto do botão-----------------------------------------------------------------------------------------
    let i = buttonContainer.append("text")
        .text("i")
        .attr('y', heightCircle/4)
        .attr("fill", "white")
        .style("text-anchor", "middle")
        .style("font-family", "Lato")
        .style("font-size", "0.7rem");

    //EIXO DO X
    var xAxis = d3.scaleBand()
        .domain(dados.map(x => x[2]).flat(2))
        .range([0, widthSVG2])
        .padding(0.2);

    svgIdade.append("g")
        .attr('class', 'g_text')
        .attr("transform", "translate(0," + heightY_axis + ")")
        .call(d3.axisBottom(xAxis))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .attr("fill", "#333333")
        .style("text-anchor", "end");


    svgIdade.selectAll('.g_text').selectAll('text')
        .style('display', 'block')
        .attr('fill', d => {
            let teste = d3.filter(dados, d => d[0] === index);
            return (d === teste[0][2]) ? '#53b4b4' : '#333333';
        })


    //EIXO DO Y
    let array = [];
    dados.forEach((d, i) => {
        array.push(d[1]);
    })
    let minArray = Math.min(...array);
    let maxArray = Math.max(...array);

    var yAxis = d3.scaleLinear()
        .domain([minArray, maxArray])
        .range([heightY_axis, 0]);
    //.range([heightSVG2, 0]);
    svgIdade.append("g")
        .call(d3.axisLeft(yAxis))
        .selectAll("text")
        .attr("fill", "#333333")

    //BARRAS
    //d[0] é o id da árvore
    //d[1] é o valor do atributo (idade, largura ou altura)
    //d[2] é o nome da espécie
    //index é o clicado
    let barContainer = svgIdade.append('g');
    dados.forEach((d, i) => {

        let teste = d3.filter(dados, d => d[0] === index);
        let textBar = barContainer.append("text")
            .attr('class', "textBar")
            .attr('tree', d[2])
            .attr("x", xAxis(d[2]) + xAxis.bandwidth() / 2)
            .attr("y", yAxis(d[1]) - 10)
            .style("font-family", "Lato")
            .style("font-size", "0.5rem")
            .style("text-anchor", "middle")
            .attr("fill", "#333333")
            .text(d[1])
            .style('display', 'none')

        barContainer.append("rect")
            .attr("x", xAxis(d[2]))
            .attr("y", yAxis(d[1]))
            .attr("width", xAxis.bandwidth())
            .attr("height", heightY_axis - yAxis(d[1]))
            .attr('id', "rect" + i)
            .attr("fill", (d[0] === index) ? "#66CCCC" : "#333333")
            .on("mouseover", function () {
                let specieNameMouse = d[2];
                let specieValueMouse = d[1];
                svgIdade.selectAll('.g_text').selectAll('text')
                    .style('display', c => {
                        //let teste = d3.filter(dados, d => d[0] === index);
                        //console.log(c, teste[0][2], specieNameMouse)
                        return (c === specieNameMouse || c === teste[0][2] ? 'block' : 'none');
                    })

                //console.log(d3.selectAll('text[tree='+specieNameMouse+']'));
                barContainer.selectAll('.textBar')
                    .filter(function(){return d3.select(this).attr('tree')=== teste[0][2]})
                    .style('display', 'block')

                textBar.style('display', 'block');
            })
            .on("mouseout", function () {
                svgIdade.selectAll('.g_text').selectAll('text')
                    .style('display', 'block')
                textBar.style('display', 'none');

                barContainer.selectAll('.textBar')
                    .filter(function(){return d3.select(this).attr('tree')=== teste[0][2]})
                    .style('display', 'none')
            });
    })
}


