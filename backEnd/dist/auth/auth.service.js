var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { users } from "../mockData/users.mock.js";
import { Provider } from "./enums/providedr.enum.js";
import axios from 'axios';
let AuthService = class AuthService {
    jwtService;
    users = users;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const { email, password, name } = registerDto;
        const userExists = this.users.find((user) => user.email === email);
        if (userExists) {
            throw new BadRequestException('пользователь уже зарегистрован');
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = {
            id: (this.users.length + 1),
            name,
            email,
            provider: Provider.LOCAL,
            password: hashedPassword,
        };
        this.users.push(newUser);
        const { password: _, ...result } = newUser;
        return result;
    }
    async login(loginDto) {
        const { email, password, } = loginDto;
        const user = users.find((user) => user.email === email);
        if (!user) {
            throw new UnauthorizedException('Неверный email или пароль');
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            throw new UnauthorizedException('Неверный email или пароль');
        }
        return this.createAuthResponse(user);
    }
    findById(id) {
        const user = users.find((user) => user.id === id);
        if (!user) {
            throw new UnauthorizedException('Пользователь не найден');
        }
        return user;
    }
    async findOrCreateYandexUser(yandexUser) {
        let user = users.find((item) => item.yandexId === yandexUser.id);
        if (!user) {
            user = users.find((item) => item.email === yandexUser.email);
        }
        if (!user) {
            user = {
                id: users.length + 1,
                name: yandexUser.name,
                email: yandexUser.email,
                password: '',
                provider: Provider.LOCAL,
                yandexId: yandexUser.id,
            };
            users.push(user);
        }
        return this.createAuthResponse(user);
    }
    async createAuthResponse(user) {
        const payload = {
            sub: user.id,
            email: user.email,
        };
        const accessToken = await this.jwtService.signAsync(payload);
        return {
            accessToken,
            user: this.toUserResponse(user),
        };
    }
    toUserResponse(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            provider: user.provider,
        };
    }
    getYandexAuthUrl() {
        const params = new URLSearchParams({
            response_type: 'code',
            client_id: process.env.YANDEX_CLIENT_ID,
            redirect_uri: process.env.YANDEX_REDIRECT_URI,
        });
        return `https://oauth.yandex.ru/authorize?${params.toString()}`;
    }
    async yandexCallback(code) {
        if (!code) {
            throw new BadRequestException('Authorization code не передан');
        }
        const tokenResponse = await axios.post('https://oauth.yandex.ru/token', new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            client_id: process.env.YANDEX_CLIENT_ID,
            client_secret: process.env.YANDEX_CLIENT_SECRET,
        }).toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const yandexAccessToken = tokenResponse.data.access_token;
        const userResponse = await axios.get('https://login.yandex.ru/info', {
            params: {
                format: 'json',
            },
            headers: {
                Authorization: `OAuth ${yandexAccessToken}`,
            },
        });
        const yandexUser = userResponse.data;
        return this.findOrCreateYandexUser({
            id: String(yandexUser.id),
            email: yandexUser.default_email,
            name: yandexUser.real_name ??
                yandexUser.display_name ??
                yandexUser.login,
        });
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map