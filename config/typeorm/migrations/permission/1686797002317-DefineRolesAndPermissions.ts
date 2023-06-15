import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class DefineRolesAndPermissions1686797002317
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // role
    await queryRunner.createTable(
      new Table({
        name: 'role',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'guard_name',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    // permission
    await queryRunner.createTable(
      new Table({
        name: 'permission',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'guard_name',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    // role_has_permission
    await queryRunner.createTable(
      new Table({
        name: 'role_has_permission',
        columns: [
          {
            name: 'permission_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'role_id',
            type: 'int',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'permission',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'role',
            onDelete: 'CASCADE',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('role_has_permission');

    await queryRunner.dropTable('role');

    await queryRunner.dropTable('permission');
  }
}
