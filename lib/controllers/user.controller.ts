import { Controller, Get, Post, HttpStatus, Request, Response, Next } from 'nest.js'
import { UserService } from "../services/user.service"

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Get()
    async getUsers( @Request() req, @Response() res, @Next() next) {
        let users = await this.userService.getUsers()
        res.status(HttpStatus.OK).json(users)
    }

}
