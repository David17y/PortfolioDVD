let valorPorMin = window.document.getElementById('valorPorMin');
let qntMin = window.document.getElementById('qntMin');
let saida = window.document.getElementById('saida');


function exibirTotal(){
    var valorMin = valorPorMin.value;
    var quntMin = qntMin.value;
    var vezesMin = quntMin/15;

    if(vezesMin > Math.floor(quntMin/15)){
        vezesMin = Math.floor(vezesMin) + 1
    };
    console.log(Math.floor(quntMin))
    var total = valorMin * vezesMin;

    saida.innerHTML = `<h1>Valor a Pagar: R$ ${total}</h1>`

}