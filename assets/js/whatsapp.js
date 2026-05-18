// CONFIGURAÇÃO: Coloque aqui o número do WhatsApp da Pizzaria (com DDD, sem espaços ou traços)
const NUMERO_PIZZARIA = "5521999983971";

/**
 * Função base que abre o WhatsApp com o texto formatado
 */
function enviarParaWhatsApp(mensagem) {
    const url = `https://api.whatsapp.com/send?phone=${NUMERO_PIZZARIA}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

/**
 * Funções que os botões do HTML vão chamar ao clicar
 */
function acaoBotaoPedir(saborPizza = "") {
    let msg = "Olá! Gostaria de fazer um pedido pelo site.\n";
    if (saborPizza) {
        msg += `Quero a pizza de: *${saborPizza}*`;
    } else {
        msg += "Gostaria de ver as opções do cardápio!";
    }
    enviarParaWhatsApp(msg);
}

function acaoBotaoReserva() {
    let msg = "Olá! Gostaria de solicitar a reserva de uma mesa.";
    enviarParaWhatsApp(msg);
}

function acaoBotaoContato() {
    let msg = "Olá! Gostaria de tirar uma dúvida sobre o cardápio/atendimento.";
    enviarParaWhatsApp(msg);
}