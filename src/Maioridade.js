
function maioridade(idade) {
    if (typeof idade !== 'number' || idade < 0) {
        return 'Idade inválida';
    } else if (idade >= 18) {
        return 'Maior Idade';
    } else {
        return 'Menor Idade';
    }
}
