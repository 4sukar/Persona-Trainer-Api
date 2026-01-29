import type Response = require("express");
import type e = require("express");
import "reflect-metadata"
import { TypeOrmDataSource } from "./entities/typeorm.config";
import { Trainer } from "./entities/trainer.entity";
import { TrainerRepository } from "./repositories/trainer.repository";
import { TrainerService } from "./services/trainer.service";

const repo = TypeOrmDataSource.getRepository( Trainer)
const trainerRepo = new TrainerRepository(repo)
const trainerService = new TrainerService(trainerRepo) 
const express = require('express')
const app = express()
app.use(express.json());
const port = 3000
const trainers = ["fulana","ciclano"]

app.get('/', (req: e.Request, res: e.Response) => {
  res.send('Hello World!')
})

app.get('/trainers', async (req: e.Request, res: e.Response) => {
  const trainersFound = await repo.find()
  res.send(trainersFound)

})

app.get('/trainers/:name', async (req: e.Request, res: e.Response) => {
    const name = req.params.name
    const nameExist = trainers.find((trainer)=> trainer == name)
    if(!nameExist)  return res.status(404).send({mensage:"não existe"})
    res.send({name})
})



app.delete('/trainers/:cpf', async (req: e.Request, res: e.Response) => {
    const cpf = req.params.cpf
    if(!cpf) return res.status(400).send({mensage:"cpf não informado"})
    const deleteTrainerResult = await trainerService.delete(cpf)
    res.status(204).send()
})

app.post('/trainers',  async (req: e.Request, res: e.Response) => {
    const trainerToAdd = await trainerService.create(req.body)
    res.send({trainerToAdd})
  })

app.patch('/trainers/:cpf', async (req: e.Request, res: e.Response) => {
  try{ 
    const cpf = req.params.cpf
    const name = req.body.name
    const udpdatedUser = {name, cpf}
    if(!cpf) return res.status(400).send({mensage:"cpf não informado"})
    await trainerService.patch(cpf, name)
    res.status(200).send(udpdatedUser)
 }
 catch(e:any){return res.status(400).send({mensage:e.message})} 
  })

app.listen(port, async () => {
  await TypeOrmDataSource.initialize();
  console.log("runnin on port:" + port);
});

