import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAppUserTable1730751811796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE app_user (id SERIAL PRIMARY KEY, NAME VARCHAR NOT NULL);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE app_user;`)
    }

}
