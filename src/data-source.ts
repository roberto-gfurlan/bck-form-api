import dotenv from 'dotenv'
import "reflect-metadata"
import { DataSource } from 'typeorm'
import { UsersProfile } from './entity/UsersProfile'


dotenv.config()

export const myDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: process.env.MYSQLDB_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  entities: [UsersProfile],
  synchronize: true,
  logging: false,
})

