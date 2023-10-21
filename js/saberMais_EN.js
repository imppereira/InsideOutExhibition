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

     if(window.location.pathname == "/2023/insideout/digital_exhibition.html") {
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
     if(window.location.pathname == "/2023/insideout/about_the_project.html"){
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
    exposicao_json(idSpecieFinal); //ALTEREI exposicao_json_EN
}

//-----------ÁRVORE FILOGENÉTICA
function openSaberArvoreFilo() {
    openPopUp();
    title1.innerHTML = "Phylogenetic Tree"
    text1.innerHTML = "A <b>phylogenetic tree</b> is a branching diagram that shows the evolutionary relationships between various biological species based on similarities and differences in their physical or genetic characteristics."
    text2.innerHTML = "";
    text3.innerHTML = "";
    image1.src = "";
}

//-----------TAXONOMISTAS
function openTaxonomistas() {
    openPopUp();
    title1.innerHTML = "Taxonomists"
    text1.innerHTML = "The Swedish botanist Carl Linnaeus invented the rules of the modern nomenclature to designate the scientific names of each species. Associated with each species is the name of the <b>taxonomist</b> who described it. For example, in the species <em>Ginkgo biloba</em> L. \"L.\" is the abbreviation of \"Linnaeus\". The taxonomy is, however, an area in constant evolution and, often, certain species change family, or genus, and this is reflected in the name and in the authors who changed the species designation. For example, in the species <em>Afrocarpus falcatus</em> (Thunb.) C. N. Page, the author in brackets, Thunb. (short for Thunberg) designated this species as <em>Taxus falcatu</em>>. However, later the taxonomist C.N Page (short for Christopher Nigel Page) transferred the species to the genus <em>Afrocarpus</em>.";
    text2.innerHTML = "Para mais informações sobre as regras da taxonomia consultar o link <a class='aText' href='https://en.wikipedia.org/wiki/Author_citation_(botany)#Introduction' target=”_blank”>Author citation (botany) - Wikipedia</a>. A lista das abreviaturas dos taxonomistas pode ser consultada no link <a class='aText' href='https://en.wikipedia.org/wiki/List_of_botanists_by_author_abbreviation_(A)' target=”_blank”>List of botanists by author abbreviation (A) - Wikipedia</a>."
    text3.innerHTML = "";
    image1.src = "";
}

//-----------NÚMERO DE REGIÕES
function openSaberRegiao() {
    console.log("bla")
    openPopUp();
    title1.innerHTML = "Distribution Regions";
    text1.innerHTML = "Although they are represented only once, some tree species are distributed in more than one region in the world. Click on the species to find out which are their regions of distribution.";
    text2.innerHTML = "";
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ESCALA GRUPO DE PLANTAS
function openSaberPlantas() {
    openPopUp();
    title1.innerHTML = "Angiosperms vs Gymnosperm"
    text1.innerHTML = "The term <b>Angiosperms</b> derives from the Greek word <em>angeion</em> which means 'vessel' and <em>sperma</em>, which means seed, indicating that the seeds are protected within the fruit. It is the most diverse group of plants with 300,000 described species."
    text2.innerHTML = "The term <b>Gymnosperm</b> comes from the compound word in Greek <em>gymnos</em>, which means 'naked' and <em>sperma</em>, which means 'seed', and describes a basic characteristic of this group of plants, that the seeds are naked, unlike the seeds of Angiosperms."
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ESCALA IUCN RED LIST
function openSaberEscala() {
    openPopUp();
    title1.innerHTML = "Scale according to the <a href='https://www.iucnredlist.org/' target=”_blank”>IUCN Red List</a>";
    text1.innerHTML = "The Red List of Threatened Species of the International Union for Conservation of Nature (IUCN), founded in 1964, is an inventory of the global conservation status and risk of extinction of biological species. The species are classified into nine groups, based on the rate of decline, population size, geographical distribution area and degree of fragmentation of the population and distribution.";
    text2.innerHTML = "The classification is: (1) Extinct (EX) – beyond a reasonable doubt that the species no longer exists; (2) Extinct in the wild (EW) – survives only in captivity, cultivation and/or outside the native range; (3) Critically Endangered (CR) – in extremely critical condition; (4) Endangered (EN) – very high risk of extinction in the wild; (5) Vulnerable (VU) – considered to be at high risk of unnatural (man-made) extinction without further human intervention; (6) Near Threatened (NT) – close to being endangered in the near future; (7) Least Concern (LC) – unlikely to become endangered or extinct in the near future; (8) Deficient data (DD); (9) Not Evaluated (NE).";
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/iucn_listRed.png";
}

//-----------FOLHA PERENE
function openSaberFolha() {
    openPopUp();
    title1.innerHTML = "Evergreen vs Deciduous"
    text1.innerHTML = "<b>Evergreen</b> leaves last longer than one year, also referred as evergreen tree, or evergreen, indicating a tree whose leaves last more than one year. Examples: cork oak and holm oak."
    text2.innerHTML = "A <b>deciduous tree</b> loses its leaves at the end of the growing season. Examples: chestnut tree, beech."
    text3.innerHTML = "A <b>semi-deciduous</b>, or semi-evergreen tree refers to plants that lose only part of their foliage in autumn/winter or during the dry season. However, they can also lose all two leaves, like deciduous trees, when autumn/winter is very cold, or when there is a severe dry season."
    image1.src = "";
}

//-----------ESCALA DIOICA
function openSaberDioica() {
    openPopUp();
    title1.innerHTML = "Dioecious vs Monoecious"
    text1.innerHTML = "<b>Dioecious</b> species have distinct unisexual individuals, each producing male or female gametes."
    text2.innerHTML = "<b>Monoecious</b> species are plants where male and female flowers are present on the same individual."
    text3.innerHTML = "";
    image1.src = "";
}

//PALAVRAS IMAGEM-------------------------------------------------------------------------------------------------------
//-----------TRAQUEÍDO
function openSaberTraqueido() {
    openPopUp();
    title1.innerHTML = "Tracheid"
    text1.innerHTML = "A <b>tracheid</b> is a long, thin, lignified cell present in the xylem of vascular plants. The main functions of tracheids are to transport water, and to provide structural support for trees."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/traqueido.jpg";
}

//-----------VASOS
function openSaberVasos() {
    openPopUp();
    title1.innerHTML = "Vessels"
    text1.innerHTML = "A vessel element, or simply <b>vessel</b>, is one of the types of cells found in the xylem of angiosperms (flowering plants) but absent in gymnosperms. Vessels have thin walls, have a much larger lumen compared to tracheids, and their function is to transport water."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/vasos.jpg";
}

//-----------FIBRAS
function openSaberFibras() {
    openPopUp();
    title1.innerHTML = "Fibres"
    text1.innerHTML = "Cells with very thick lignified wall, occur in the xylem of Angiosperms and have the function of mechanical support."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/fibras.jpg";
}

//-----------RAIOS MEDULARES PARÊNQUIMA
function openSaberRaios() {
    openPopUp();
    title1.innerHTML = "Rays"
    text1.innerHTML = "<b>Rays</b> are cellular structures found in the xylem, perpendicular to the growth rings, and can be visible to the naked eye. They are made up of parenchyma cells and are essential for the radial conduction of water, minerals and other organic substances."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/raios.jpg";
}

//-----------ANEIS DE CRESCIMENTO
function openSaberAneis() {
    openPopUp();
    title1.innerHTML = "Growth Rings"
    text1.innerHTML = "A cross-section of a tree trunk can reveal the growth rings. The growth rings result from a new growth of the vascular cambium, a layer of cells next to the bark, also classified as lateral meristem, leading to an increase in the diameter of the tree trunk."
    text2.innerHTML = "Growth rings are more visible in trees from temperate zones, with well-defined seasons. The inner part of a growth ring is formed at the beginning of the growing season, when growth is comparatively faster, hence the wood is less dense, and is known as earlywood or spring wood; the outer part is formed later, thus named latewood, also summer wood, being produced in summer or autumn, and is denser."
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/anel.jpg";
}

//-----------XILEMA E FLOEMA
function openSaberXilemaFloema() {
    openPopUp();
    title1.innerHTML = "Xylem vs Phloem"
    text1.innerHTML = "<b>Xylem</b> is one of two types of transport tissue in vascular plants, the other being phloem. The basic function of the xylem is to transport water from the roots to the stems and leaves, but it also transports nutrients."
    text2.innerHTML = "<b>Phloem</b> is the living tissue in vascular plants that transports the soluble organic compounds produced during photosynthesis, like the sugar sucrose, to the rest of the plant. In trees, the phloem is the innermost layer of the bark."
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/xilema.jpg";
}

//-----------FEIXE VASCULAR
function openSaberFeixeVascular() {
    openPopUp();
    title1.innerHTML = "Vascular Bundle"
    text1.innerHTML = "A <b>vascular bundle</b> is a part of the transport system of vascular plants, and contains xylem and phloem, in addition to other supportive and protective tissues. Between the xylem and phloem occurs the cambium."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------CÂMBIO VASCULAR
function openSaberCambio() {
    openPopUp();
    title1.innerHTML = "Vascular Cambium"
    text1.innerHTML = "The <b>vascular cambium</b> is a thin layer of living cells between the xylem and the phloem, and the main growth tissue of stems and roots. It produces xylem inwards towards the pith and phloem outwards towards the bark."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/cambio.jpg";
}

//-----------PERIDERME
function openSaberPeriderme() {
    openPopUp();
    title1.innerHTML = "Periderm"
    text1.innerHTML = "The <b>periderm</b> replaces the epidermis and acts as a protective covering like the epidermis. The cells have suberin in the walls, which protect the stem from desiccation and attack by pathogens. The cork produced by the cork oak is a periderm."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "/assets/img/saberMais/en/periderme.jpg";
}

//PALAVRAS TEXTO--------------------------------------------------------------------------------------------------------
//-----------CANAIS DE RESINA
function openSaberCanaisResina() {
    openPopUp();
    title1.innerHTML = "Resin Canals"
    text1.innerHTML = "<b>Resin canals</b> are intercellular spaces, in the form of an elongated tube, surrounded by cells that secrete resin. The resin prevents attacks by fungi and insects. Not all species have resin canals. Examples of species with resin canals: maritime pine and stone pine."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ARILO
function openSaberArilo() {
    openPopUp();
    title1.innerHTML = "Aril"
    text1.innerHTML = "<b>Aril</b> is an outgrowth developed from a seed that partially or completely covers the seed."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ALCALOIDE
function openSaberAlcaloide() {
    openPopUp();
    title1.innerHTML = "Alkaloid"
    text1.innerHTML = "Class of organic compounds that contain at least one nitrogen atom. They are produced by bacteria, fungi, plants and animals, and have several pharmacological applications, such as in the treatment of malaria (quinine), as an analgesic (morphine). Other alkaloids may have stimulant effects (e.g. caffeine)."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------PALUDISMO
function openSaberPaludismo() {
    openPopUp();
    title1.innerHTML = "Malaria"
    text1.innerHTML = "An infectious disease transmitted by mosquitoes that affects humans and other animals. The main symptoms are fever, tiredness, vomiting and headaches."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------SÉPALA
function openSaberSepalas() {
    openPopUp();
    title1.innerHTML = "Sepal"
    text1.innerHTML = "<b>Sepal</b> is a part of the flower of angiosperms, they are usually green in colour and function as a protection for the flower when it is still in bud, and as a support for the flower when it blooms."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------OPÉRCULO
function openSaberOperculo() {
    openPopUp();
    title1.innerHTML = "Operculum"
    text1.innerHTML = "In flowering plants, the <b>operculum</b>, also known as calyptra, is the cap-shaped covering of the flower or fruit that detaches at maturity. The operculum is formed by the fusion of sepals and/or petals and usually falls off as a single structure as the flower or fruit matures."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------ESTAMES
function openSaberEstames() {
    openPopUp();
    title1.innerHTML = "Stamens"
    text1.innerHTML = "Reproductive structure of the flower that produces pollen."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------EPIFITA
function openSaberEpifita() {
    openPopUp();
    title1.innerHTML = "Epiphyte"
    text1.innerHTML = "Plant that grows on the surface of another plant."
    text2.innerHTML = ""
    image1.src = "";
}

//-----------FOLIOLOS
function openSaberFoliolos() {
    openPopUp();
    title1.innerHTML = "Leaflets"
    text1.innerHTML = "The leaf-like part of a compound leaf. Although it looks like a whole leaf, a leaflet does not grow from the main stem or branch of the plant, as a leaf does, but from a petiole or branch of the leaf."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------CURARE
function openSaberCurare() {
    openPopUp();
    title1.innerHTML = "Curare"
    text1.innerHTML = "Common name for various alkaloid poisons originating from plant extracts. It is used as a paralyzing agent by indigenous peoples of Central and South America for hunting and therapeutic purposes."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------CANFORA
function openSaberCanfora() {
    openPopUp();
    title1.innerHTML = "Camphor"
    text1.innerHTML = "Colourless wax with a strong aroma, classified chemically as a terpenoid. It is found in the wood of the Cinnamomum camphora species, an evergreen tree found in East Asia."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

//-----------SIMBIOISE
function openSaberSimbioise() {
    openPopUp();
    title1.innerHTML = "Symbiosis"
    text1.innerHTML = "From the Greek <em>sýn</em>, which means 'together' and <em>bíōsis</em>, which means 'to live', defines a biological interaction between two biological organisms of different species."
    text2.innerHTML = ""
    text3.innerHTML = "";
    image1.src = "";
}

