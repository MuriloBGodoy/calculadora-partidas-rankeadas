# Calculadora de Partidas Rankeadas

Projeto desenvolvido como parte do desafio **Calculadora de Partidas Rankeadas** da **Formação Lógica de Programação** na **Digital Innovation One (DIO)**.

---

## 🎯 Objetivo

Criar uma função que receba a quantidade de vitórias e derrotas de um jogador, calcule o saldo de partidas rankeadas (`vitórias - derrotas`) e utilize estruturas de decisão para determinar o nível do herói com base na quantidade de vitórias:

| Quantidade de Vitórias | Nível |
|------------------------|-------|
| Menor ou igual a 10 | **Ferro** |
| 11 a 20 | **Bronze** |
| 21 a 50 | **Prata** |
| 51 a 80 | **Ouro** |
| 81 a 90 | **Diamante** |
| 91 a 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

---

## 📤 Saída Esperada

A função exibe a mensagem padronizada no console:

> "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

### Exemplo de Execução:
```text
=== CALCULADORA DE PARTIDAS RANKEADAS ===

O Herói tem de saldo de **6** está no nível de **Ferro**
O Herói tem de saldo de **10** está no nível de **Bronze**
O Herói de nome **25** está no nível de **Prata**
O Herói tem de saldo de **48** está no nível de **Ouro**
O Herói tem de saldo de **70** está no nível de **Diamante**
O Herói tem de saldo de **76** está no nível de **Lendário**
O Herói tem de saldo de **90** está no nível de **Imortal**

=========================================
```

---

## 🛠️ Conceitos Aplicados

- **Funções:** Encapsulamento da lógica com parâmetros (`vitorias`, `derrotas`) e retorno de objeto com saldo e nível.
- **Operadores Aritméticos e Relacionais:** Cálculo de saldo (`vitorias - derrotas`) e comparações de faixas (`>=`, `<=`, `&&`).
- **Estruturas de Decisão:** `if / else if / else` para classificação precisa.
- **Laços de Repetição:** Iteração através de lista de jogadores com `for...of`.
- **Testes Automatizados:** Testes unitários com o runner nativo do Node.js (`node:test` e `node:assert`).

---

## ⚙️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18+)

### 1. Clonar o repositório
```bash
git clone https://github.com/MuriloBGodoy/calculadora-partidas-rankeadas.git
cd calculadora-partidas-rankeadas
```

### 2. Executar a aplicação
```bash
node index.js
# ou
npm start
```

### 3. Executar os testes automatizados
```bash
npm test
```

Resultado dos testes:
```text
✔ classifica como Ferro para vitorias <= 10
✔ classifica como Bronze para vitorias entre 11 e 20
✔ classifica como Prata para vitorias entre 21 e 50
✔ classifica como Ouro para vitorias entre 51 e 80
✔ classifica como Diamante para vitorias entre 81 e 90
✔ classifica como Lendário para vitorias entre 91 e 100
✔ classifica como Imortal para vitorias >= 101
✔ calcula saldo e formata mensagem de saida corretamente

tests 8 | pass 8 | fail 0
```
