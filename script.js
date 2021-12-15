let pedra = document.getElementById("pedra");
let papel = document.getElementById("papel");
let tesoura = document.getElementById("tesoura");
let result = document.getElementById("result");
let card = document.getElementById("card");
let Card = document.getElementById("Card");
let bnt = document.getElementById("bnt");
let punctuation = document.getElementById("punctuation");
let counter = 0;

function roboPedra(x) {
  let sorteio = null;

  sorteio = Math.random() * 3;
  sorteio = parseInt(sorteio)

  roboImgs(sorteio)

  if(sorteio === x){
    result.innerText = "EMPATE"
    
  } if(sorteio > x  && sorteio < 2){
    result.innerText = "PERDEU"

  } if(sorteio > x && sorteio > 1){
    result.innerText = "GANHOU"
    counter++
    punctuation.innerHTML = counter
}
};

function roboPapel(y) {
  let sorteio = null;

  sorteio = Math.random() * 3;
  sorteio = parseInt(sorteio)

  roboImgs(sorteio)

  if(sorteio < y){
    result.innerText = "GANHOU"
    counter++
    punctuation.innerHTML = counter
    
  } if(sorteio === y){
    result.innerText = "EMPATE"

  } if(sorteio > y && sorteio > 1){
    result.innerText = "PERDEU"
}
};

function roboTesoura(z) {
  let sorteio = null;

  sorteio = Math.random() * 3;
  sorteio = parseInt(sorteio);

  roboImgs(sorteio);

  if(sorteio < z && sorteio < 1){
    result.innerText = "PERDEU"
    
  } if(sorteio < z && sorteio == 1){
    result.innerText = "GANHOU"
    counter++
    punctuation.innerHTML = counter

  } if(sorteio >= z){
    result.innerText = "EMPATE"
}
};

pedra.addEventListener("click", () => {
  roboPedra(0)
  img(0)
  card.style.display = "none"
  Card.style.display = "flex"
});

papel.addEventListener("click", () => {
  roboPapel(1)
  img(1)
  card.style.display = "none"
  Card.style.display = "flex"
});

tesoura.addEventListener("click", () => {
  roboTesoura(2)
  img(2)
  card.style.display = "none"
  Card.style.display = "flex"
});

bnt.addEventListener("click", () => {
  card.style.display = "block"
  Card.style.display = "none"
})

// ==========================================================
let you = document.getElementById("you");
let border = document.getElementById("border");
let robo_border = document.getElementById("robo-Border");
let robo = document.getElementById("robo");

function img(i) {
  if(i == 0){
    you.src = "./img/icon-rock.svg"
    you.style.paddingTop = "27px"
    border.style.borderColor = "hsl(349, 71%, 52%)"

  } else if(i == 1){
    you.src = "./img/icon-paper.svg" 
    you.style.paddingTop = "20px"
    border.style.borderColor = "hsl(230, 89%, 65%)"

  } else {
    you.src = "./img/icon-scissors.svg"
    you.style.paddingTop = "20px"
    border.style.borderColor = "hsl(39, 89%, 49%)"
  }
}

function roboImgs(i) {
  if(i == 0){
    robo.src = "./img/icon-rock.svg"
    robo.style.paddingTop = "27px"
    robo_border.style.borderColor = "hsl(349, 71%, 52%)"

  } else if(i == 1){
    robo.src = "./img/icon-paper.svg" 
    robo.style.paddingTop = "20px"
    robo_border.style.borderColor = "hsl(230, 89%, 65%)"

  } else {
    robo.src = "./img/icon-scissors.svg"
    robo.style.paddingTop = "20px"
    robo_border.style.borderColor = "hsl(39, 89%, 49%)"
  }
}

// ==========================================================
let exit = document.getElementById("exit");
let see_rules = document.getElementById("see-rules");

exit.addEventListener("click", () => {
  document.getElementById("rules")
  .classList.toggle("ativo")
})

see_rules.addEventListener("click", () => {
  document.getElementById("rules")
  .classList.toggle("ativo")
})