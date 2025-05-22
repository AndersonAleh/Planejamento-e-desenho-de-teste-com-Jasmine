
describe('Funcao maioridade', function() {
    it('deve retornar "Maior Idade" para Idades maiores ou iguais a 18', function() {
        expect(maioridade(20)).toBe('Maior Idade');  
        expect(maioridade(18)).toBe('Maior Idade');  
    })
    it('deve retornar "Menor Idade" para Idades menores que 18', function() {
        expect(maioridade(17)).toBe('Menor Idade');   
        expect(maioridade(0)).toBe('Menor Idade');    
    })
    it('deve retornar "Idade inválida" para Idades inválidas', function() {
        expect(maioridade(-1)).toBe('Idade inválida'); 
        expect(maioridade('texto')).toBe('Idade inválida'); 
    })
})
