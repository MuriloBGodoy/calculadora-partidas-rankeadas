const test = require('node:test');
const assert = require('node:assert');
const { calcularNivel, calcularPartidasRankeadas } = require('./index');

test('classifica como Ferro para vitorias <= 10', () => {
    assert.strictEqual(calcularNivel(0), 'Ferro');
    assert.strictEqual(calcularNivel(9), 'Ferro');
    assert.strictEqual(calcularNivel(10), 'Ferro');
});

test('classifica como Bronze para vitorias entre 11 e 20', () => {
    assert.strictEqual(calcularNivel(11), 'Bronze');
    assert.strictEqual(calcularNivel(15), 'Bronze');
    assert.strictEqual(calcularNivel(20), 'Bronze');
});

test('classifica como Prata para vitorias entre 21 e 50', () => {
    assert.strictEqual(calcularNivel(21), 'Prata');
    assert.strictEqual(calcularNivel(35), 'Prata');
    assert.strictEqual(calcularNivel(50), 'Prata');
});

test('classifica como Ouro para vitorias entre 51 e 80', () => {
    assert.strictEqual(calcularNivel(51), 'Ouro');
    assert.strictEqual(calcularNivel(65), 'Ouro');
    assert.strictEqual(calcularNivel(80), 'Ouro');
});

test('classifica como Diamante para vitorias entre 81 e 90', () => {
    assert.strictEqual(calcularNivel(81), 'Diamante');
    assert.strictEqual(calcularNivel(85), 'Diamante');
    assert.strictEqual(calcularNivel(90), 'Diamante');
});

test('classifica como Lendário para vitorias entre 91 e 100', () => {
    assert.strictEqual(calcularNivel(91), 'Lendário');
    assert.strictEqual(calcularNivel(95), 'Lendário');
    assert.strictEqual(calcularNivel(100), 'Lendário');
});

test('classifica como Imortal para vitorias >= 101', () => {
    assert.strictEqual(calcularNivel(101), 'Imortal');
    assert.strictEqual(calcularNivel(200), 'Imortal');
});

test('calcula saldo e formata mensagem de saida corretamente', () => {
    const resultado = calcularPartidasRankeadas(85, 15);
    assert.strictEqual(resultado.saldoVitorias, 70);
    assert.strictEqual(resultado.nivel, 'Diamante');
    assert.strictEqual(
        resultado.mensagem,
        'O Herói tem de saldo de **70** está no nível de **Diamante**'
    );
});
