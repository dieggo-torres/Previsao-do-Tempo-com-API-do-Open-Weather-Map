const dotenv = require('dotenv').config()
const { default: axios } = require('axios')
const express = require('express')
const porta = 3000

const app = express()

app.get('/', (req, res) => {
  let endpoint = 'https://api.openweathermap.org/data/2.5/weather'
  let unidades = 'metric'
  let idioma = 'pt_br'
  let cidade = 'Londres'
  let appid = process.env.API_KEY
  let url = `${endpoint}?q=${cidade}&units=${unidades}&lang=${idioma}&appid=${appid}`

  axios.get(url)
    .then(resposta => {
      return resposta.data
    })
    .then(dados => {
      let temperatura = dados.main.temp
      let temperaturaMax = dados.main.temp_max
      let temperaturaMin = dados.main.temp_min
      let descricao = dados.weather[0].description
      console.log(descricao);
    })
    .catch(erro => {
      console.log(erro)
    })

  res.send('Previsão do Tempo')
})

app.listen(porta, () => {
  console.log(`Servidor ouvindo na porta ${porta}.`)
})