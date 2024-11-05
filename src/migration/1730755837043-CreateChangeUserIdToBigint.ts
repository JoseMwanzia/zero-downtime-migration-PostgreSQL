import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChangeUserIdToBigint1730755837043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE app_user ALTER COLUMN id TYPE BIGINT USING id::bigint;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE app_user ALTER COLUMN id TYPE INTEGER USING id::integer;`)
    }

}
