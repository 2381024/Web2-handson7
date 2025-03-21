import { CallHandler, ExecutionContext, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class ExecutionTime implements NestInterceptor {
    intercept(
        context: ExecutionContext, 
        next: CallHandler<any>
    ): Observable<any> | Promise<Observable<any>> {
        const handler = context.getHandler();
        const methodName = handler.name;
        const className = context.getClass().name
        this.logger.log(`Before... Calling ${className}.${methodName}`);
        const startTime = Date.now();
        return next.handle().pipe(tap(() => {
            this.logger.log(`After... ${className}.${methodName} took ${Date.now() - startTime} ms`)
        }))
    }
    private readonly logger = new Logger(ExecutionTime.name)
}