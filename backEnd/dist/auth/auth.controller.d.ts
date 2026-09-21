import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { UserResponseModel } from "./models/user-response.model.js";
import { LoginDto } from "./dto/login.dto.js";
import type { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        id: number;
        name: string;
        email: string;
        provider: import("./enums/providedr.enum.js").Provider;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: UserResponseModel;
    }>;
    yandexLogin(response: Response): void;
    yandexCallback(code: string): Promise<{
        accessToken: string;
        user: UserResponseModel;
    }>;
}
