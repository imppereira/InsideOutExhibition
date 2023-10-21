window.onload = function () {
    let videoInicial = document.querySelector("#videoInicial");
    let imgInicial = document.querySelector("#fundoImg");

    let nVezes = 1;
    let contador = 1;

    videoInicial.onended = function() {
        if(contador<nVezes){
            videoInicial.play();
        }
        //QUANDO O LOOP TERMINAR MUDA DE PÁGINA
        else{
            videoInicial.pause();
            setTimeout(function(){
                window.location.href = "exposicao_digital.html";
            }, 1000);
        }
        contador = contador + 1;
        console.log(contador)
    };

    let w = window.innerWidth;
    console.log(w);
    if(w<480){
        setTimeout(function(){
            window.location.href = "exposicao_digital.html";
        }, 500);
    }

    //AO CLICAR MUDA DE PÁGINA
    videoInicial.addEventListener("click", function(){
        videoInicial.pause();
        setTimeout(function(){
            window.location.href = "exposicao_digital.html";
        }, 1000);
    })
    imgInicial.addEventListener("click", function(){
        setTimeout(function(){
            window.location.href = "exposicao_digital.html";
        }, 1000);
    })


}