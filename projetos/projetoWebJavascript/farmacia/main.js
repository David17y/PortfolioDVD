let descricaoProduto = window.document.getElementById('descricao');
let valorProduto = window.document.getElementById('valorProduto');
let saida = window.document.getElementById('saida');
function mostrarPromocao(){
    var valor = parseFloat(valorProduto.value);
    var desc = descricaoProduto.value.trim();
    var valorComDesconto = Math.floor(valor * 2)


    saida.innerHTML = `<h1>Promoção de ${desc}</h1>
    <h1>Leve dois por apenas R$ ${valorComDesconto},00`;
    
}