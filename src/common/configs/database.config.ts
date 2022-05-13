import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfiguration: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['./dist/**/*.entity{.ts,.js}'],
  synchronize: !!+process.env.DB_SYNCHRONIZE,
};
