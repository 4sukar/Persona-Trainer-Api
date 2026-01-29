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
        this.isLeoncio(trainer.name)
        return await this.trainerRepo.create(trainer)
    }

    async delete(cpf:string){
        await this.trainerRepo.delete(cpf)
    }

    async patch(cpf:string, name:string){
        this.isLeoncio(name)
        await this.trainerRepo.patch(cpf, name)
    }

    private isLeoncio(name: string){
         if( name.toLowerCase() == "leoncio"){
            throw new Error("Sou leonciofobico")
        }
    }
}
