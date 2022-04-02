import express from 'express'
import 'dotenv/config'


export class ServerInitializer {
    public static async startServer() {
        const server = express();

        server.listen(process.env.APP_PORT, () => console.log(`Server is running on port ${process.env.APP_PORT}...`));
    }
}