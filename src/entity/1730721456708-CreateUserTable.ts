import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1730721456708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE app_user ("id" SERIAL PRIMARY KEY,
                "name" VARCHAR NOT NULL
            )
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE app_user
            `);
    }

}
