import { MigrationInterface, QueryRunner } from "typeorm"

export class BigProductExtension1707046198132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\"" +
            " ADD COLUMN \"label\" text"
        )
        await queryRunner.query(
            "ALTER TABLE \"product\"" +
            " ADD COLUMN \"genre\" text"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\" DROP COLUMN \"label\""
        )
        await queryRunner.query(
            "ALTER TABLE \"product\" DROP COLUMN \"genre\""
        )
    }

}
