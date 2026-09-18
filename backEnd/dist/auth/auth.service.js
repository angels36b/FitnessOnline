var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, BadRequestException } from "@nestjs/common";
import bcrypt from 'bcryptjs';
let AuthService = class AuthService {
    users = [];
    async register(registerDto) {
        const { email, password, name } = registerDto;
        const userExists = this.users.find((user) => user.email === email);
        if (userExists) {
            throw new BadRequestException('пользователь уже зарегистрован');
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = {
            id: (this.users.length + 1).toString(),
            name,
            email,
            password: hashedPassword,
        };
        this.users.push(newUser);
        const { password: _, ...result } = newUser;
        return result;
    }
};
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map