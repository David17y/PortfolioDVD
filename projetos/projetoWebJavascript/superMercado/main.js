let saida = window.document.getElementById('saida');
let nomeProduto = window.document.getElementById('nomeProduto');
let precoUnit = window.document.getElementById('precoUnit');

function exibirPromo(){
    var nomProduto = nomeProduto.value.trim();
    var valorPreco = precoUnit.value;
    var diferencaPreco = valorPreco * 0.50;
    var total = valorPreco * 2 + diferencaPreco;

    saida.innerHTML = `<h1>${nomProduto} - Promoção: Leve 3 por: R$ ${total}</h1>
    <h1>O 3° produto sai por: R$ ${diferencaPreco}`;
}