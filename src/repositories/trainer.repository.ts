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
    //deletar por cpf, atualizar por cpf, pode atualizar só o nome
     async delete(cpf: string): Promise<void> {
        await this.repo.delete({ cpf });
    }
     async patch(cpf: string, name: string): Promise<void> {
        await this.repo.update(
            { cpf },
            { name }
        );
    }
}
