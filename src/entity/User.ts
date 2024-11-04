import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'app_user'})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
