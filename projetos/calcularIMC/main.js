const saida = document.getElementById('saida');

function exibirResultado() {
    const nome = document.getElementById('nome').value.trim();
    const massa = parseFloat(document.getElementById('massa').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const imc = massa / (altura * altura);
    let situacao = '';

    if (sexo === 'feminino') {
        if (imc < 19.1) {
            situacao = 'abaixo do peso';
        } else if (imc < 25.8) {
            situacao = 'no peso normal';
        } else if (imc < 27.3) {
            situacao = 'marginalmente acima do peso';
        } else if (imc < 32.3) {
            situacao = 'acima do peso ideal';
        } else {
            situacao = 'obesa';
        }
    } else {
        if (imc < 20.7) {
            situacao = 'abaixo do peso';
        } else if (imc < 26.4) {
            situacao = 'no peso normal';
        } else if (imc < 27.8) {
            situacao = 'marginalmente acima do peso';
        } else if (imc < 31.1) {
            situacao = 'acima do peso ideal';
        } else {
            situacao = 'obeso';
        }
    }

    saida.innerHTML = `
      <h1>Resultado</h1>
      <p>Olá <strong>${nome}</strong>, seu IMC é <strong>${imc.toFixed(2)}</strong> e você está <strong>${situacao}</strong>.</p>
    `;
}

document.getElementById('btnExibir').addEventListener('click', exibirResultado)