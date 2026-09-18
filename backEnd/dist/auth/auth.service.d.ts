import { RegisterDto } from './dto/register.dto.js';
export declare class AuthService {
    private users;
    register(registerDto: RegisterDto): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
}
