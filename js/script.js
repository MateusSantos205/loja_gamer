// Inicia o carosel

const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    // Your options go here
  });

// Função que oculta o menu

const exibeMenu = () => {
  // muda a visualização dos itens com a classe .oculta-navba, mudando de hide para show
  $('.oculta-navbar').toggle()
}