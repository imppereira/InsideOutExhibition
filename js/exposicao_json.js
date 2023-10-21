function exposicao_json(indice) {
// var specie_image_anatomy = document.getElementById("specie_image_anatomy"); NA PÁGINA NO_JBUC
//     var specie_image_jbuc = document.getElementById("specie_image_jbuc_0");
    var specie_cientific_name = document.getElementById("specie_latin_name");
    var specie_family_name = document.getElementById("specie_family_name");
    var specie_taxo = document.getElementById("specie_taxo");
    var specie_taxo1_name = document.getElementById("specie_taxo1_name");
    var specie_taxo2_name = document.getElementById("specie_taxo2_name");
    var specie_taxo3_name = document.getElementById("specie_taxo3_name");
    var specie_name = document.getElementById("specie_name");
    var specie_region = document.getElementById("specie_region");
    var specie_text_p1 = document.getElementById("specie_text_p1");
    var specie_text_p2 = document.getElementById("specie_text_p2");
    var specie_text_p3 = document.getElementById("specie_text_p3");

    console.log("id_clicado specie_v2", indice);

//APARECE INFO SOBRE ESPÉCIE APÓS CLICK
    specie_container.style.display = "flex";
    specie_jbuc_container.style.display = "flex";
    specie_image_anatomy_container.style.display = "flex";

    let specie_latin_name_botanico = document.getElementById("specie_latin_name_botanico");
    specie_latin_name_botanico.scrollIntoView();

//FICHEIRO DE CSV PARA OS RESTANTES DADOS
    function functionSpeciesContainers() {
        //SPECIE CONTAINER
        //Nome Espécie
        specie_cientific_name.innerHTML = data[indice].nome_especie + " ";
        //Nome dos Taxonomistas
        specie_taxo.innerHTML = data[indice].taxonimistas;
        //Imagem JBUC
        if (indice + 1 == 20 || indice + 1 == 21) {
            document.getElementById("specie_image_jbuc_container").style.display = "none";
        } else {
            document.getElementById("specie_image_jbuc_container").style.display = "block";
        }
        specie_image_jbuc.src = "/assets/img/specie_image_jbuc/Sp" + [indice + 1] + "_0.jpg";
        specie_image_jbuc_1.src = "/assets/img/specie_image_jbuc/Sp" + [indice + 1] + "_1.jpg";
        specie_image_jbuc_2.src = "/assets/img/specie_image_jbuc/Sp" + [indice + 1] + "_2.jpg";
        /* specie_image_jbuc.style.backgroundImage = "url('/assets/img/specie_image_jbuc/Sp" + [indice + 1] + "_0.jpg')";
         specie_image_jbuc_1.style.backgroundImage = "url('/assets/img/specie_image_jbuc/Sp" + [indice + 1] + "_1.jpg')";
         specie_image_jbuc_2.style.backgroundImage = "url('/assets/img/specie_image_jbuc/Sp" + [indice + 1] + "_2.jpg')";
 */

        // saber quantas imagens há
        console.log(n_imgs)
        n_imgs = 0;
        let my_log;
        let http = new XMLHttpRequest();
        for (let i = 0; i < 3; i += 1) {
            myLog = '/assets/img/specie_image_jbuc/Sp' + [indice + 1] + '_' + i + '.jpg';
            http.open('HEAD', myLog, false);
            http.send();
            if (http.status === 200) {
                n_imgs++;
            } else {
                break;
            }
        }
        //SPECIE_JBUC_CONTAINER
        //----------------------INFO SPECIE CONTAINER
        //Nome PT
        specie_name.innerHTML = data[indice].nome_pt;
        //Região
        specie_region.innerHTML = data[indice].regiao_pt;
        //Text
        specie_text_p1.innerHTML = data[indice]["textos"].pt_p1;
        specie_text_p2.innerHTML = data[indice]["textos"].pt_p2;
        if (data[indice]["textos"].pt_p3 !== " ") {
            specie_text_p3.innerHTML = data[indice]["textos"].pt_p3;
        }
        //----------------------FAMILY TAXO CONTAINER
        //Nome da família
        specie_family_name.innerHTML = data[indice].nome_familia;
        //Taxonomistas
        if (data[indice].taxonomista1 !== undefined || data[indice].taxonomista1 !== null || data[indice].taxonomista1 !== NaN) {
            specie_taxo1_name.innerHTML = data[indice].taxonomista1;
        }
        if (data[indice].taxonomista2 !== undefined || data[indice].taxonomista2 !== null || data[indice].taxonomista2 !== NaN) {
            specie_taxo2_name.innerHTML = data[indice].taxonomista2;
        }
        if (data[indice].taxonomista3 !== undefined || data[indice].taxonomista3 !== null || data[indice].taxonomista3 !== NaN) {
            specie_taxo3_name.innerHTML = data[indice].taxonomista3;
        }

        specie_image_anatomy.src = "/assets/img/specie_image_anatomy/Sp" + [indice + 1] + "_2000.jpg";
        specie_image_anatomy_button.src = "/assets/img/specie_image_anatomy/button_pt/Sp" + [indice + 1] + "_2000_button.png";

        //SPECIE IMAGE ANATOMY
        if (srcAnatomyImage == true) { //quando se clica no botão
            document.getElementById("backgroundContainerAnatomy").style.display = "block";
        } else {
            document.getElementById("backgroundContainerAnatomy").style.display = "none";
        }
    }

    d3.json("/assets/data/dados_inside_out_v6.json").then(d => {
        nSpecies = Object.keys(d.species_data).length;
        data = d.species_data;
        functionSpeciesContainers();
    })
}