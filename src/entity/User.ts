import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'app_user'})
export class User {
  // @PrimaryGeneratedColumn()
  // id!: number;

  @PrimaryGeneratedColumn({ type: "bigint" }) // Changing to BIGINT for future compatibility
  id!: string; // TypeORM will handle bigint as string in JavaScript

  @Column()
  name!: string;
}
