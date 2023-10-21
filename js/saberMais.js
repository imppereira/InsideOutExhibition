//----------------------------------------------------------------------------------------------------------------------
//POP UP EXPLICAÇÃO DE TEXTO

let popUpSaberMaisContainer = document.getElementById("popUpSaberMaisContainer");
let conteudoSaberMais = document.getElementById("conteudoSaberMais");
let popUpSaberMaisCruz = document.getElementById("popUpSaberMaisCruz");

let title1 = document.createElement("p");
title1.classList = "conteudoSaberMais_title";
let text1 = document.createElement("p");
let text2 = document.createElement("p");
let text3 = document.createElement("p");
text1.classList = "conteudoSaberMais_text";
text2.classList = "conteudoSaberMais_text";
text3.classList = "conteudoSaberMais_text";
let image1 = document.createElement("img");
image1.classList = "conteudoSaberMais_img";

conteudoSaberMais.appendChild(title1);
conteudoSaberMais.appendChild(text1);
conteudoSaberMais.appendChild(text2);
conteudoSaberMais.appendChild(text3);
conteudoSaberMais.appendChild(image1);

//PARA FECHAR-----------------------------------------------------------------------------------------------------------
popUpSaberMaisCruz.addEventListener("click", function () {
    popUpSaberMaisContainer.style.display = "none";
})

//PARA ABRIR------------------------------------------------------------------------------------------------------------
function openPopUp() {
    popUpSaberMaisContainer.style.display = "flex";

    let specie_jbuc_container = document.getElementById("specie_jbuc_container");
    let specie_image_anatomy = document.getElementById("specie_image_anatomy");
    let visualization_container = document.getElementById("visualization_container");
    let sobreEspeciesBigContainer = document.getElementById("sobreEspeciesBigContainer");
    let sobreEspecie_container = document.getElementById("sobreEspecie_container");

     if(window.location.pathname == "/2023/insideout/exposicao_digital.html") {
        if (checkViewport(specie_jbuc_container) == true) {
            console.log("Specie JBUC Container é visível");
            let rect = specie_jbuc_container.getBoundingClientRect();
            let elementY = rect.top;
            console.log("valor top do Specie JBUC Container", elementY);
            console.log("valor window.scrollY", window.scrollY);
            popUpSaberMaisContainer.style.left = 0;
            popUpSaberMaisContainer.style.top = elementY + window.scrollY + "px";
            console.log("valor do top do Pop Container", popUpSaberMaisContainer.style.top)
        } else if (checkViewport(visualization_container) == true) {
            console.log("Visualization Container é visível");
            let rect = visualization_container.getBoundingClientRect();
            let elementY = rect.top;
            console.log("valor top da Visualization Container", elementY);
            console.log("valor window.scrollY", window.scrollY);
            popUpSaberMaisContainer.style.left = 0;
            popUpSaberMaisContainer.style.top = elementY + window.scrollY + "px";
            console.log("valor do top do Pop Container", popUpSaberMaisContainer.style.top)
        }
    }
     if(window.location.pathname == "/2023/insideout/sobre_o_projeto.html"){
        if (checkViewport(sobreEspecie_container) == true) {
            console.log("About Specie Container é visível");
            let rect = sobreEspecie_container.getBoundingClientRect();
            let elementY = rect.top;
            console.log("valor top da About Specie Container", elementY);
            console.log("valor window.scrollY", window.scrollY);
            popUpSaberMaisContainer.style.left = 0;
            popUpSaberMaisContainer.style.top = elementY + window.scrollY + "px";
            console.log("valor do top do Pop Container", popUpSaberMaisContainer.style.top)
        }
    }
}

function checkViewport(element) {
    var position = element.getBoundingClientRect();
    let booleanCheck = false;
    /*    // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            console.log('Element is fully visible in screen');
            booleanCheck = true;
        }*/
    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        console.log('Element is partially visible in screen');
        booleanCheck = true;
    }
    return booleanCheck;
}

//-----------BUTTON IMAGEM ANATOMIA
let srcAnatomyImage = false;

function openSaberAnatomia() {
    srcAnatomyImage = !srcAnatomyImage;
    console.log(srcAnatomyImage);
    console.log(idSpecieFinal);
    exposicao_json(idSpecieFinal);
}

//-----------ÁRVORE FILOGENÉTICA
function openSaberArvoreFilo() {
    openPopUp();
    title1.innerHTML = "Árvore Filogenética"
    text1.innerHTML = "Uma <b>árvore filogenética</b> é um diagrama ramificado que mostra as relações evolutivas entre várias espécies biológicas com base em semelhanças e diferenças das suas características físicas ou genéticas."
    text2.innerHTML = "";
    text3.innerHTML = "";
    image1.src = "";
}

//-----------TAXONOMISTAS
function openTaxonomistas() {
    openPopUp();
    title1.innerHTML = "Taxonomista"
    text1.innerHTML = "O botânico sueco Carl Linnaeus inventou as regras da nomenclatura moderna dos nomes científicos das espécies. Associado a cada espécie aparece o nome do <b>taxonomista</b> que a descreveu. Por exemplo, na espécie <em>Ginkgo biloba</em> L. \"L.\" é a abreviatura de \"Linnaeus\". A taxonomia é, no entanto, uma área em constante evolução e, muitas vezes, determinadas espécies mudam de família, ou género, e isso reflete-se no nome e também nos autores que alteraram a designação da espécie. Por exemplo na espécie <em>Afrocarpus falcatus</em> (Thunb.) C. N. Page, o autor que está entre parêntesis, Thunb. (abreviatura de Thunberg) designou esta espécie como <em>Taxus falcatus</em>. No entanto, mais tarde, o taxonomista C.N Page (abreviatura de Christopher Nigel Page) transferiu a espécie para o género <em>Afrocarpus</em>.";
    text2.innerHTML = "Para mais informações sobre as regras da taxonomia consultar o link <a class='aText' href='https://en.wikipedia.org/wiki/Author_citation_(botany)#Introduction' target=”_blank”>Author citation (botany) - Wikipedia</a>. A lista das abreviaturas dos taxonomistas pode ser consultada no link <a class='aText' href='https://en.wikipedia.org/wiki/List_of_botanists_by_author_abbreviation_(A)' target=”_blank”>List of botanists by author abbreviation (A) - Wikipedia</a>."
    text3.innerHTML = "";
    image1.src = "";
}

//-----------NÚMERO DE REGIÕES
function openSaberRegiao() {
    console.log("bla")
    openPopUp();
    title1.innerHTML = "Regiões de Distribuição";
    text1.innerHTML = "Apesar de estarem representadas apenas uma vez, algumas espécies arbóreas estão distribuídas em mais do que uma região no mundo. Clica nas espécies para saberes quais são as suas regiões de distribuição.";
    text2.innerHTML = "";
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ESCALA GRUPO DE PLANTAS
function openSaberPlantas() {
    openPopUp();
    title1.innerHTML = "Angiospérmica vs Gimnospérmica"
    text1.innerHTML = "O termo <b>Angiospérmica</b> deriva da palavra grega <em>angeion</em> que quer dizer ‘recipiente’ ou ‘vaso’ e <em>sperma</em>, que quer dizer semente, indicando que as sementes estão protegidas dentro do fruto. É o grupo mais diverso de plantas com 300 000 espécies descritas."
    text2.innerHTML = "O termo <b>Gimnospérmica</b>vem da palavra composta em grego <em>gymnos</em>, que quer dizer ‘nu' e <em>sperma</em>, que quer dizer 'semente', e descreve uma característica básica deste grupo de plantas, as sementes estão nuas, ao contrário das sementes das Angiospérmicas."
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ESCALA IUCN RED LIST
function openSaberEscala() {
    openPopUp();
    title1.innerHTML = "Escala de acordo com a <a href='https://www.iucnredlist.org/' target=”_blank”>Lista vermelha da IUCN</a>";
    text1.innerHTML = "A Lista Vermelha de Espécies Ameaçadas da União Internacional para a Conservação da Natureza (IUCN), fundada em 1964, é um inventário do estado de conservação global e risco de extinção de espécies biológicas. As espécies são classificadas em nove grupos, tendo como critérios a taxa de declínio, tamanho da população, área de distribuição geográfica e grau de fragmentação da população e distribuição.";
    text2.innerHTML = "A classificação é: (1) Extinta (EX) – além de qualquer dúvida razoável que indica que a espécie não existe mais; (2) Extinto na natureza (EW) – sobrevive apenas em cativeiro, cultivo e/ou fora da área nativa; (3) Criticamente em Perigo (CR) – em estado extremamente crítico; (4) Em Perigo (EN) – risco muito alto de extinção na natureza; (5) Vulnerável (VU) – é considerada de alto risco de extinção não natural (causada pelo homem) sem intervenção humana adicional; (6) Quase ameaçado (NT) – perto de estar em perigo no futuro próximo; (7) Menos preocupante (LC) – é improvável que se torne ameaçada ou extinta num futuro próximo; (8) Dados deficientes (DD); (9) Não avaliado (NE).";
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/iucn_listRed.png";
}

//-----------FOLHA PERENE
function openSaberFolha() {
    openPopUp();
    title1.innerHTML = "Folha Perene vs Folha Caduca"
    text1.innerHTML = "Uma folha <b>perene</b> quer dizer que as folhas duram mais do que um ano. Também se diz árvore perene, ou perenifólia, indicando quais as árvores em que as folhas duram mais do que um ano. Exemplos: o sobreiro e a azinheira."
    text2.innerHTML = "Uma árvore de folha <b>caduca</b>, ou árvore caduca, ou caducifólia, perde as suas folhas no final da estação de crescimento. Exemplos: o castanheiro, a faia."
    text3.innerHTML = "Uma árvore de folha <b>semi-caduca</b>, ou semi-perene, refere-se a plantas que perdem apenas parte da sua folhagem no outono/inverno ou durante a estação seca. No entanto, também podem perder todas as suas folhas, semelhante às árvores de folha caduca, quando o outono/inverno é muito frio, ou quando há uma estação seca severa."
    image1.src = "";
}

//-----------ESCALA DIOICA
function openSaberDioica() {
    openPopUp();
    title1.innerHTML = "Dioica vs Monoica"
    text1.innerHTML = "As espécies <b>dioicas</b> possuem indivíduos unissexuais distintos, cada um produzindo gametas masculinos ou femininos. São mais raras."
    text2.innerHTML = "As espécies <b>monoicas</b> são plantas onde as flores masculinas e femininas estão presentes no mesmo indivíduo."
    text3.innerHTML = "";
    image1.src = "";
}

//PALAVRAS IMAGEM-------------------------------------------------------------------------------------------------------
//-----------TRAQUEÍDO
function openSaberTraqueido() {
    openPopUp();
    title1.innerHTML = "Traqueído"
    text1.innerHTML = "Um <b>traqueídeo</b> é uma célula lenhificada longa e afilada presente no xilema de plantas vasculares. As principais funções dos traqueídos são o transporte de água, e fornecer suporte estrutural para as árvores."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/traqueido.jpg";
}

//-----------VASOS
function openSaberVasos() {
    openPopUp();
    title1.innerHTML = "Vaso"
    text1.innerHTML = "Um elemento de vaso, ou simplesmente <b>vaso</b>, é um dos tipos de células encontradas no xilema das angiospermas (plantas com flores), mas ausentes nas gimnospermas. Os vasos têm paredes finas, apresentam um lúmen muito maior comparado com os traqueídos, e a sua função é o transporte de água."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/vasos.jpg";
}

//-----------FIBRAS
function openSaberFibras() {
    openPopUp();
    title1.innerHTML = "Fibra"
    text1.innerHTML = "Células de parede muito grossa lenhificada, ocorrem no xilema das Angiospermas e têm a função de suporte mecânico."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/fibras.jpg";
}

//-----------RAIOS MEDULARES PARÊNQUIMA
function openSaberRaios() {
    openPopUp();
    title1.innerHTML = "Raios Medulares de Parênquima"
    text1.innerHTML = "Os <b>raios medulares</b> são estruturas celulares encontradas no xilema, perpendiculares aos anéis de crescimento, e podem ser visíveis a olho nu. São constituídos por células de parênquima e são essenciais para a condução radial da água, minerais e outras substâncias orgânicas."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/raios.jpg";
}

//-----------ANEIS DE CRESCIMENTO
function openSaberAneis() {
    openPopUp();
    title1.innerHTML = "Anéis de Crescimento"
    text1.innerHTML = "Uma secção transversal de um tronco de uma árvore pode revelar os anéis de crescimento. Os anéis de crescimento resultam de um novo crescimento do câmbio vascular, uma camada de células próxima à casca, classificado também como meristema lateral, levando a um aumento em diâmetro do tronco da árvore."
    text2.innerHTML = "Os anéis são mais visíveis em árvores de zonas temperadas, com as estações bem demarcadas. A parte interna de um anel de crescimento é formada no início da estação de crescimento, quando o crescimento é comparativamente mais rápido, portanto, a madeira é menos densa. É conhecido como madeira ou lenho de primavera. A parte externa é formada mais tarde e é mais densa. É também designada por madeira ou lenho de verão, sendo produzida no verão ou outono."
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/anel.jpg";
}

//-----------XILEMA E FLOEMA
function openSaberXilemaFloema() {
    openPopUp();
    title1.innerHTML = "Xilema vs Floema"
    text1.innerHTML = "O <b>xilema</b> é um dos dois tipos de tecido de transporte nas plantas vasculares, sendo o outro o floema. A função básica do xilema é transportar água das raízes para os caules e folhas, mas também transporta nutrientes."
    text2.innerHTML = "O <b>floema</b> é o tecido vivo nas plantas vasculares que transporta os compostos orgânicos solúveis produzidos durante a fotossíntese, em particular o açúcar sacarose, para o resto da planta. Nas árvores, o floema é a camada mais interna da casca."
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/xilema.jpg";
}

//-----------FEIXE VASCULAR
function openSaberFeixeVascular() {
    openPopUp();
    title1.innerHTML = "Feixe Vascular"
    text1.innerHTML = "Um <b>feixe vascular</b> é uma parte do sistema de transporte das plantas vasculares, e contém o xilema e o floema, para além de outros tecidos de sustentação e proteção. Entre o xilema e o floema ocorre o câmbio. "
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------CÂMBIO VASCULAR
function openSaberCambio() {
    openPopUp();
    title1.innerHTML = "Câmbio Vascular"
    text1.innerHTML = "O <b>câmbio vascular</b> é uma camada fina de células vivas que ocorre entre o xilema e o floema, e é o principal tecido de crescimento dos caules e raízes. Produz xilema para dentro, em direção à medula, e floema para fora, em direção à casca."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/pt/cambio.jpg";
}

//-----------PERIDERME
function openSaberPeriderme() {
    openPopUp();
    title1.innerHTML = "Periderme"
    text1.innerHTML = "A <b>periderme</b> substitui a epiderme e atua como uma cobertura protetora como a epiderme. As células apresentam suberina nas paredes, que protegem o caule da dessecação e do ataque de patógenos. A cortiça produzida pelo sobreiro é uma periderme."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/periderme.jpg";
}

//PALAVRAS TEXTO--------------------------------------------------------------------------------------------------------
//-----------CANAIS DE RESINA
function openSaberCanaisResina() {
    openPopUp();
    title1.innerHTML = "Canais de Resina"
    text1.innerHTML = "Os <b>canais de resina</b> são espaços intercelulares, em forma de tubo alongado, rodeados por células que segregam resina. A resina previne os ataques por fungos e insetos. Nem todas as espécies apresentam canais de resina. Exemplos de espécies resinosas: pinheiro bravo e o pinheiro manso."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ARILO
function openSaberArilo() {
    openPopUp();
    title1.innerHTML = "Arilo"
    text1.innerHTML = "O <b>arilo</b> é uma excrescência desenvolvida a partir de uma semente que cobre parcial ou completamente a semente."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ALCALOIDE
function openSaberAlcaloide() {
    openPopUp();
    title1.innerHTML = "Alcalóide"
    text1.innerHTML = "Classe de compostos orgânicos que contêm pelo menos um átomo de azoto. São produzidos por bactérias, fungos plantas e animais, e têm várias aplicações farmacológicas como no tratamento da malária (quinino), como analgésico (morfina). Outros alcaloides podem ter efeitos estimulantes (p.ex. a cafeína)."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------PALUDISMO
function openSaberPaludismo() {
    openPopUp();
    title1.innerHTML = "Paludimo"
    text1.innerHTML = "O <b>paludismo</b>, ou malária, é uma doença infeciosa transmitida por mosquitos que afeta humanos e outros animais. Os principais sintomas são febre, cansaço, vómitos e dores de cabeça."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------SÉPALA
function openSaberSepalas() {
    openPopUp();
    title1.innerHTML = "Sépala"
    text1.innerHTML = "A <b>sépala</b> é uma parte da flor das angiospermas, apresenta normalmente uma cor verde e funciona como uma proteção da flor quando ainda em botão, e como suporte das pétalas da flor."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------OPÉRCULO
function openSaberOperculo() {
    openPopUp();
    title1.innerHTML = "Opérculo"
    text1.innerHTML = "Nas plantas com flores, o <b>opérculo</b>, também conhecido como caliptra, é a cobertura em forma de tampa da flor ou fruto que se destaca na maturidade. O opérculo é formado pela fusão de sépalas e/ou pétalas e geralmente desprende-se como uma única estrutura à medida que a flor ou fruto amadurece."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ESTAMES
function openSaberEstames() {
    openPopUp();
    title1.innerHTML = "Estames"
    text1.innerHTML = "Estrutura reprodutora da flor que produz o pólen."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------EPIFITA
function openSaberEpifita() {
    openPopUp();
    title1.innerHTML = "Epífita"
    text1.innerHTML = "Planta que cresce na superfície de outra planta."
    text2.innerHTML = ""
    image1.src = "";
}

//-----------FOLIOLOS
function openSaberFoliolos() {
    openPopUp();
    title1.innerHTML = "Folíolos"
    text1.innerHTML = "Parte semelhante a uma folha de uma folha composta. Embora se pareça com uma folha inteira, um folíolo não nasce do caule ou ramo principal da planta, como ocorre com uma folha, mas sim de um pecíolo ou ramo da folha."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------CURARE
function openSaberCurare() {
    openPopUp();
    title1.innerHTML = "Curare"
    text1.innerHTML = "Nome comum para vários venenos alcaloides originários de extratos de plantas. É usado como agente paralisante por povos indígenas da América Central e do Sul para caça e fins terapêuticos."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------CANFORA
function openSaberCanfora() {
    openPopUp();
    title1.innerHTML = "Cânfora"
    text1.innerHTML = "Cera incolor com um aroma forte, classificado do ponto de vista químico como um terpenóide. É encontrado na madeira da espécie <em>Cinnamomum camphora</em>, uma árvore perene encontrada no leste da Ásia."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------SIMBIOISE
function openSaberSimbioise() {
    openPopUp();
    title1.innerHTML = "Simbioise"
    text1.innerHTML = "Do grego <em>sýn</em>, que significa ‘juntos’ e <em>bíōsis</em>, que significa ‘viver’ e define uma interação biológica entre dois organismos biológicos de espécies diferentes."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

