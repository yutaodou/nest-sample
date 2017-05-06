import { Module } from 'nest.js'
import { UserController } from "./controllers/user.controller"
import { UserService } from "./services/user.service"

@Module({
    controllers: [UserController],
    components:[UserService]
})
export class ApplicationModule {
}