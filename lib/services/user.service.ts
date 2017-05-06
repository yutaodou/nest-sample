import { Component } from "nest.js"

@Component()
export class UserService {
    async getUsers() {
        return [
            {
                id: 1,
                name: "Yutao Dou"
            }
        ]
    }
}