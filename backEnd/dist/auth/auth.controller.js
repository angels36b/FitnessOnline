var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserResponseModel } from "./models/user-response.model.js";
import { AuthResponseModel } from "./models/auth-response.model.js";
import { LoginDto } from "./dto/login.dto.js";
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async login(loginDto) {
        return this.authService.login(loginDto);
    }
    yandexLogin(response) {
        const url = this.authService.getYandexAuthUrl();
        return response.redirect(url);
    }
    async yandexCallback(code) {
        return this.authService.yandexCallback(code);
    }
};
__decorate([
    Post('register'),
    ApiOperation({
        summary: 'Регистрация пользователя',
    }),
    ApiOkResponse({
        type: UserResponseModel,
    }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    Post('login'),
    ApiOperation({
        summary: 'Авторизация пользователя',
    }),
    ApiOkResponse({
        type: AuthResponseModel,
    }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    Get('yandex'),
    ApiOperation({
        summary: 'Авторизация через Яндекс',
    }),
    __param(0, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "yandexLogin", null);
__decorate([
    Get('yandex/callback'),
    ApiOperation({
        summary: 'Callback авторизации через Яндекс',
    }),
    __param(0, Query('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "yandexCallback", null);
AuthController = __decorate([
    ApiTags('Авторизация'),
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map