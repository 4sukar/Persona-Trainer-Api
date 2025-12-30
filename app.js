const express = require('express')
const app = express()
app.use(express.json());
const port = 3000
const trainers = ["fulana","ciclano"]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/trainers', (req, res) => {
  res.send({trainers})
})

app.get('/trainers/:name', (req, res) => {
    const name = req.params.name
    const nameExist = trainers.find((trainer)=> trainer == name)
    if(!nameExist)  return res.status(404).send({mensage:"não existe"})
    res.send({name})
})


//codar rota do delete, retornar 204 e remover do arry quando existir, e quando não existir 404
app.delete('/trainers/:name', (req, res) => {
    const name = req.params.name
    res.send({name})
})

app.post('/trainers', (req, res) => {
    const trainerToAdd = req.body.name
    trainers.push(trainerToAdd)
    res.send({name:trainerToAdd})

})
//atualizar um nome, no param vai vir o nome atual, e no body o nome a ser atualizado. quando não existir o nome do param no array, retornar 404
app.patch('/trainers/:name', (req, res) => {
    const name = req.params.name
    const trainerToAdd = req.body.name
    res.send({name:trainerToAdd})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

