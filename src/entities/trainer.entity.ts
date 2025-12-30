import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Trainer{
    @PrimaryColumn()
    cpf: string

    @Column()
    name: string
}
