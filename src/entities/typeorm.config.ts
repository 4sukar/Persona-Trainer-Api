import { DataSource } from "typeorm";
import { Trainer } from "./trainer.entity";

 export const TypeOrmDataSource = new DataSource({
   type: "sqlite",
   database: "sqlite3",
   entities: [Trainer],
   synchronize: true,
 });