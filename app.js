const express = require('express')
const dotenv = require('dotenv').config()
const porta = process.env.PORTA || 3000
const path = require('path')
const { default: axios } = require('axios')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/', (req, res) => {
  let cidade = req.body.nomeCidade
  let endpoint = 'https://api.openweathermap.org/data/2.5/weather'
  let unidade = 'metric'
  let idioma = 'pt_br'
  let apiKey = process.env.API_KEY
  let url = `${endpoint}?q=${cidade}&units=${unidade}&lang=${idioma}&appid=${apiKey}`

  axios
    .get(url)
    .then((resposta) => {
      return resposta.data
    })
    .then((dados) => {
      let temperatura = dados.main.temp
      let descricao = dados.weather[0].description
      let codigoIcone = dados.weather[0].icon
      let urlIcone = `http://openweathermap.org/img/wn/${codigoIcone}@2x.png`
      res.write('<h1>Previsão do Tempo</h1>')
      res.write(`<p>Descrição: ${descricao}.</p>`)
      res.write(`<img src="${urlIcone}" alt="icone">`)
      res.write(`<p>Temperatura em/no ${cidade}: ${temperatura}</p>`)
      res.send()
    })
    .catch((erro) => {
      console.log(erro)
    })
})

app.listen(porta, () => {
  console.log(`Servidor ouvindo na porta ${porta}.`)
})
