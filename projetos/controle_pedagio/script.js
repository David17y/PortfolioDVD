const distancia = 120
const valorPadrao = 20
let registros = []

function calcularMinutos(hora) {
    const [h, m] = hora.split(":").map(Number)
    return h * 60 + m
}

function registrarVeiculo() {
    const placa = document.getElementById("placa").value
    const horaEntrada = document.getElementById("horaEntrada").value
    const horaSaida = document.getElementById("horaSaida").value

    const tempo = calcularMinutos(horaSaida) - calcularMinutos(horaEntrada)
    const velocidade = (distancia / (tempo / 60)).toFixed(2)

    let desconto = 0
    if (velocidade <= 60) desconto = 0.15
    else if (velocidade <= 100) desconto = 0.10

    const valorPago = (valorPadrao * (1 - desconto)).toFixed(2)

    const registro = {
        placa,
        horaEntrada,
        horaSaida,
        tempo,
        velocidade: Number(velocidade),
        valorPago: Number(valorPago)
    }

    registros.push(registro)
    mostrarTicket(registro)
}

function mostrarTicket(registro) {
    const div = document.getElementById("tickets")
    const html = `
        <h3>Ticket</h3>
        <p>Placa: ${registro.placa}</p>
        <p>Hora Entrada: ${registro.horaEntrada}</p>
        <p>Hora Saída: ${registro.horaSaida}</p>
        <p>Tempo: ${registro.tempo} min</p>
        <p>Velocidade: ${registro.velocidade} Km/h</p>
        <p>Valor Pago: R$ ${registro.valorPago}</p>
        <hr>
    `
    div.innerHTML += html
}

function fecharCaixa() {
    if (registros.length === 0) return

    let menorVelocidade = registros[0].velocidade
    let maiorVelocidade = registros[0].velocidade
    let somaVelocidades = 0
    let totalValores = 0

    registros.forEach(r => {
        if (r.velocidade < menorVelocidade) menorVelocidade = r.velocidade
        if (r.velocidade > maiorVelocidade) maiorVelocidade = r.velocidade
        somaVelocidades += r.velocidade
        totalValores += r.valorPago
    })

    const mediaVelocidade = (somaVelocidades / registros.length).toFixed(2)
    const inicioProcesso = registros[0].horaEntrada
    const finalProcesso = registros[registros.length - 1].horaSaida

    const div = document.getElementById("relatorio")
    div.innerHTML = `
        <h3>Relatório do Turno</h3>
        <p>Menor Velocidade: ${menorVelocidade} Km/h</p>
        <p>Maior Velocidade: ${maiorVelocidade} Km/h</p>
        <p>Média das Velocidades: ${mediaVelocidade} Km/h</p>
        <p>Total de Valores: R$ ${totalValores.toFixed(2)}</p>
        <p>Início do Processamento: ${inicioProcesso}</p>
        <p>Final do Processamento: ${finalProcesso}</p>
    `
}
