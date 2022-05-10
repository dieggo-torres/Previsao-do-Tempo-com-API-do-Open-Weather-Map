# Previsão do Tempo com API do Open Weather Map

<img alt="nodejs-badge" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">

Este app usa a API do [Open Weather Map](https://openweathermap.org/) para obter as seguintes informações acerca de uma cidade:

- Temperatura
- Descrição do tempo
- Ícone

O nome da cidade é obtido por meio de um formulário que o usuário preenche na homepage. Assim que o formulário é enviado, o app faz uma requisição usando o _axios_ e obtém os dados acima mencionados. Com esses dados, o app renderiza uma página de resumo para o usuário.

## Módulos Usados

Usei estes módulos neste projeto:

- express
- path
- dotenv
- axios
