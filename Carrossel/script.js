/* Seleciona o elemento que contém todas as imagens do carrossel */
const track = document.getElementById('carouselTrack');

/* Obtém o número de imagens no carrossel */
const items = document.querySelectorAll('.carousel-item');
let index = 0; /* Indice que rastreia a imagem atual */

/* Função que move o carrossel para a proxima imagem */
function moveCarousel() {
    /* Incrementa o íncide para avançar uma imagem */
    index ++;

    /* Verifica se o indice chegou a ultima imagem clonada */
    if (index >= items.length -1) {
        /* Pequeno atraso para permitir que a transição */
        setTimeout(() =>{
            track.style.transition = 'none'; /* Remove a animação */
            index = 0; /* Volta ao inicio (Primeira imagem) */
            track.style.transform = `translateX(0)`; /* Move para a primeira imagem */ 
        }, 500); /* Tempo suficiente para completar a  */
    }
    else {
        /* Move o carrossel para a proxima imagem */
        track.style.transition = 'transform 0.5s ease'; /* Adiciona a animação */
        track.style.transform = `translateX(-${index *100}%)`; /* Desloca o carrossel */
    }
};

setInterval(moveCarousel, 1000);