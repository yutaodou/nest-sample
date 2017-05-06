import { Middleware, NestMiddleware } from "nest.js"
import { Request, Response, Next } from "nest.js"

@Middleware()
export class LoggingMiddleware implements NestMiddleware {
    resolve() {
        return ( req, res, next)  => {
            console.log('get one request...')
            next()
        }
    }
}