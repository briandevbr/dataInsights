# 📊 data_insights

> 🌐 Read this in [English](./README.en.md)

Projeto de treino para manipulação de dados brutos em JavaScript puro, sem bibliotecas externas. A ideia é praticar leitura, parsing e análise de dados reais (CSV) do zero, incluindo testes automatizados com Vitest nas próximas etapas.

## 📑 Sumário

- [🗂️ Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Tecnologias usadas](#-tecnologias-usadas)
- [🚀 Como rodar](#-como-rodar)
- [✨ Funcionalidades](#-funcionalidades)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

## 🗂️ Estrutura do Projeto

| Caminho | Descrição |
|---|---|
| `data/pib.csv` | Dataset bruto de PIB per capita por país (Banco Mundial, indicador `NY.GDP.PCAP.CD`), em formato CSV original, sem nenhum tratamento |
| `src/parser.js` | Leitura do CSV e parser de linha, tratando corretamente campos entre aspas que contêm vírgula (ex: `"Bahamas, The"`) |

## ⚙️ Tecnologias usadas

- JavaScript (Node.js) — sem bibliotecas externas
- Vitest (planejado para as próximas etapas)

## 🚀 Como rodar

```bash
node src/parser.js
```

Neste estágio, o script lê o dataset bruto e imprime no console o resultado do parsing de cada linha (país) já convertido em array de campos limpos, sem aspas e com as vírgulas internas preservadas corretamente.

## ✨ Funcionalidades

- [x] Ler o CSV bruto e separar em linhas
- [x] Fazer o parsing de cada linha respeitando aspas (evitando quebrar campos com vírgula interna)
- [ ] Converter cada linha em objeto (chave/valor a partir do header)
- [ ] Aplicar filtros e agregações sobre os dados (ex: PIB médio por país/ano)
- [ ] Cobrir a lógica com testes automatizados (Vitest)

## 🤝 Contribuindo

Projeto pessoal de treino — sem processo de contribuição externa no momento.

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE).
