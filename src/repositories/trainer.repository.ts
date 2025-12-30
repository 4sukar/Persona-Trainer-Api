import { Repository } from "typeorm";
import { Trainer } from "../entities/trainer.entity";

export class TrainerRepository{
    constructor(private readonly repo:Repository< Trainer >){

    }
    async create(trainer: Trainer): Promise < Trainer >{
      return await this.repo.save(trainer)
    }
    async find(): Promise < Trainer[] >{
        return await this.repo.find()
    }
    async findOneByCpf(cpf:string):Promise < Trainer | null >{
        return await this.repo.findOneBy(
            {
                cpf: cpf
            }
        )
    }
     async delete(cpf:string){

    }
    async patch(cpf:string){
        
    }
}