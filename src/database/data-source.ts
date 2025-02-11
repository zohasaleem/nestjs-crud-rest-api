import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource } from "typeorm";

dotenvConfig({ path: '.env' });

export default new DataSource({
    type: 'postgres',
    host: `${process.env.DATABASE_HOST}`,
    port: +`${process.env.DATABASE_PORT}`,
    username: `${process.env.DATABASE_USER}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    synchronize: false,
    dropSchema: false,
    logging: true,
    logger: 'file',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    migrationsTableName: 'migration_table',
})


