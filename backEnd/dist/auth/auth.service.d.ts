import { RegisterDto } from './dto/register.dto.js';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from "./models/user.model.js";
import { Provider } from "./enums/providedr.enum.js";
import { LoginDto } from "./dto/login.dto.js";
import { UserResponseModel } from "./models/user-response.model.js";
export declare class AuthService {
    private readonly jwtService;
    private readonly users;
    constructor(jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        id: number;
        name: string;
        email: string;
        provider: Provider;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: UserResponseModel;
    }>;
    findById(id: number): UserModel;
    findOrCreateYandexUser(yandexUser: {
        id: string;
        email: string;
        name: string;
    }): Promise<{
        accessToken: string;
        user: UserResponseModel;
    }>;
    private createAuthResponse;
    private toUserResponse;
    getYandexAuthUrl(): string;
    yandexCallback(code: string): Promise<{
        accessToken: string;
        user: UserResponseModel;
    }>;
}
