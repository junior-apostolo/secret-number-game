function verificaValorValido(chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor Invalido</div>"
    return
  }

  if (validaIntervalo(numero)) {
    elementoChute.innerHTML += ` 
    </div>valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}
    <div>`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Voce acertou!</h2>
      <h3>O numero secreto é ${numeroSecreto}</h3>

      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div class="size">O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div> -->
    `
  } else {
    elementoChute.innerHTML += `
      <div class="size">O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div> -->
    `
  }
}

function validaIntervalo(numero) {
  return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
  return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
  if(e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})