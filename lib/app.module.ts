import { Module, MiddlewaresConsumer } from 'nest.js'
import { UserController } from "./controllers/user.controller"
import { UserService } from "./services/user.service"
import { LoggingMiddleware } from "./middleware.logging"
@Module({
    controllers: [UserController],
    components: [UserService]
})
export class ApplicationModule {
    configure(consumer:MiddlewaresConsumer){
        consumer.apply(LoggingMiddleware).forRoutes(UserController)
    }
}