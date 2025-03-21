import { Logger, NestMiddleware } from "@nestjs/common";

export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger(LoggerMiddleware.name);
    use(req: Request, res: any, next: (error?: any) => void) {
        switch (req.method) {
            case 'POST':
            case 'PUT':
                this.logger.log(
                    `LoggerMiddleware | Request [${req.method}] | Request Body ${JSON.stringify(req.body)}`,
                );
                break;
            case 'GET':
            case 'DELETE':
                this.logger.log(`LoggerMiddleware | Request [${req.method}]`);
                break;
            default:
                this.logger.log(
                    `LoggerMiddleware | Request [${req.method}] default logging`,
                );
        }
        next();
    }
}