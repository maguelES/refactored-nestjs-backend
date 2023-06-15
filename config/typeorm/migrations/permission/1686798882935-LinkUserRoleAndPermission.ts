import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class LinkUserRoleAndPermission1686798882935
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // user_has_permission
    await queryRunner.createTable(
      new Table({
        name: 'user_has_permission',
        columns: [
          {
            name: 'permission_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'int',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'permission',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );

    // user_has_roles
    await queryRunner.createTable(
      new Table({
        name: 'user_has_role',
        columns: [
          {
            name: 'role_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'int',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'role',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_has_permission');

    await queryRunner.dropTable('user_has_role');
  }
}
