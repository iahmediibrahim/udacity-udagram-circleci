import { Sequelize } from 'sequelize-typescript'
import { config } from './config/config'

// export const sequelize = new Sequelize({
// 	username: config.username,
// 	password: config.password,
// 	database: config.database,
// 	host: config.host,
// 	port: config.dbPort,

// 	dialect: 'postgres',
// 	storage: ':memory:',
// })
export const sequelize = new Sequelize(
	`postgres://${config.username}:${config.password}@${config.host}:${config.dbPort}/${config.database}`,
)
// postgres://postgres:postgres@database-1.cjlcl3hgnxm2.us-east-1.rds.amazonaws.com:5432/test
//  eb init udagram-api --platform node.js --region us-east-1
// eb create --sample udagram-api-dev
