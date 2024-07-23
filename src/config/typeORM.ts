import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORM = (): TypeOrmModuleOptions => {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'users',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
  };
};
