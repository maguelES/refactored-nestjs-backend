import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log('Init DB');

    return {
      type: 'postgres',
      host: this.configService.get('database.url'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.username'),
      password: this.configService.get('database.password'),
      synchronize: this.configService.get('database.synchronize'),
      database: this.configService.get('database.name'),
      entities: [__dirname + '/../../src/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      dropSchema: false,
      keepConnectionAlive: true,
      logging: this.configService.get('app.nodeEnv') !== 'production',
      extra: {
        max: this.configService.get('database.maxConnections'),
        ssl: this.configService.get('database.sslEnabled')
          ? {
              rejectUnauthorized: this.configService.get(
                'database.rejectUnauthorized',
              ),
              ca: this.configService.get('database.ca') ?? undefined,
              key: this.configService.get('database.key') ?? undefined,
              cert: this.configService.get('database.cert') ?? undefined,
            }
          : undefined,
      },
    };
  }
}
