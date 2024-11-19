/* Seleciona o elemento que contém todas as imagens do carrossel */
const track = document.getElementById('carouselTrack');

/* Obtém o número de imagens no carrossel */
const items = document.querySelectorAll('.carousel-item'); /* "querySelectorALL" ele vai olhar para cada div individualmente com o nome de ".carousel-item" */

let index = 0; /* Variavel que mantem o indice da imagem atual exibida no carrossel (começa em 0, a primeira imagem) */

/* Função que move o carrossel para a proxima imagem */
function moveCarousel() {

    /* Incrementa o íncide para avançar uma imagem */
    index++;

    /* Verifica se o indice chegou a ultima imagem clonada */
    if (index >= items.length - 1) {

        /* Em JavaScript, a propriedade length é usada para retornar o numero de elementos em uma estrutura de dados, como uma string, um array ou uma lista de elementos do DOM */


        /* Pequeno atraso para permitir que a transição */
        setTimeout(() => {  /* "setTimeout sempre vai estar vinculado ao tempo" */
            track.style.transition = 'none'; /* Remove a animação */
            index = 0; /* Volta ao inicio (Primeira imagem) */
            track.style.transform = `translateX(0)`; /* Move para a primeira imagem */
        }, 500); /* Tempo suficiente para completar a transição anterior (se houver)  seja completada*/
    }
    else {
        /* Caso o indice ainda n tenha atingido o final, move o carrossel para a proxima imagem */

        /* Adiciona uma transição suave de 0.5 segundos para o movimento do carrossel */

        /* Move o carrossel para a proxima imagem */
        track.style.transition = 'transform 0.5s ease'; /* Adiciona a animação */
        track.style.transform = `translateX(-${index * 100}%)`; /* Desloca o carrossel */
    }
};

setInterval(moveCarousel, 1000);