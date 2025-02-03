require(`dotenv`).config();
import express, { Express } from "express";
import { ArtifactsRouter } from "./routes/artifacts.routes";

export class Server {
    private client: Express;
    private port: number;

    constructor() {
        this.client = express();
        this.port = Number(process.env.PORT) || 3000;

        this.middleware();
        this.routes();
    };

    private middleware() {
        this.client.use(express.json());
    };

    private routes() {
        this.client.use(`/api/artifacts/`, new ArtifactsRouter().getRouter());
    };

    public start() {
        this.client.listen(this.port, () => {
            console.log(`Genshin Artifacts API is running!`);
        });
    };
};

new Server().start();