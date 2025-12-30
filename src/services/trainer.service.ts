import { error } from "node:console";
import { Trainer } from "../entities/trainer.entity";
import { TrainerRepository } from "../repositories/trainer.repository";

export class TrainerService{
    constructor(private readonly trainerRepo: TrainerRepository){
    
    }
    async create(trainer: Trainer){
        const trainerExists = await this.trainerRepo.findOneByCpf(trainer.cpf)
        if(trainerExists){
            throw new Error("Cpf já existe!")
        }
        return await this.trainerRepo.create(trainer)
    }
    async delete(cpf:string){

    }
    async patch(cpf:string){
        
    }
}
