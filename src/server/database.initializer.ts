import { createConnection } from 'typeorm';
import { User } from '../api/users/user.model';

export class DatabaseInitializer {
  public static async startDatabase() {
    try {
      await createConnection({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT as unknown as number,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
        entities: [User],
        synchronize: true,
      });
      console.log('Database connection established');
    } catch (error) {
      console.log('Database connection failed');
    }
  }
}
