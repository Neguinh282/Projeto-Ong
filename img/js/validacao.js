// ===========================================
// ARQUIVO: validacao.js
// FUNÇÃO: Liga o JavaScript e checa o CPF
// ===========================================

// 1. TESTE DE LIGAÇÃO: Se isso aparecer, o JavaScript está funcionando!
alert('O JavaScript está ligado!'); 

// 2. Achamos o nosso formulário na página (o "form").
const formulario = document.querySelector('form');

// 3. Esta é a nossa lista de regras para checar o formulário.
function checarRegras(evento) {
    // PARE! Não envie o formulário ainda. Vamos checar primeiro.
    evento.preventDefault(); 
    
    // 4. Achamos o campo onde a pessoa escreve o CPF.
    const campoCpf = document.querySelector('[name="cpf"]'); 
    
    // 5. Lemos o que foi digitado.
    const cpfValor = campoCpf.value;
    
    // 6. Limpamos o CPF (tiramos pontos e traços) para contar SÓ os números.
    const cpfLimpo = cpfValor.replace(/[^\d]/g, ''); 
    
    // 7. A Regra: Se o CPF limpo não tiver 11 números, está errado!
    if (cpfLimpo.length !== 11) {
        // Se estiver errado, mostramos um aviso vermelho.
        alert('❌ Erro: O CPF deve ter exatamente 11 números!'); 
    } else {
        // Se estiver certo, mostramos um aviso de OK.
        alert('✅ CPF verificado! Está tudo bem.');
    }
}

// 8. Quando o botão de Enviar for apertado, a função checarRegras será chamada.
formulario.addEventListener('submit', checarRegras);