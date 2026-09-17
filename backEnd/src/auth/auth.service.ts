import { Injectable, BadRequestException } from "@nestjs/common";
import { RegisterDto } from './dto/register.dto.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    private users: any[] = [];

    async register(registerDto: RegisterDto){
        //мы деструктурируем свойства DTO
        const {email, password, name} = registerDto;
        //мы ищем повторных пользователей
        const userExists = this.users.find((user)=> user.email === email);
        //Если он найдет обькет, мы прервем
        if(userExists){
            throw new BadRequestException('пользователь уже зарегистрован');
        }
        //Definimos el factor de coste (saltRounds)
        const saltRounds = 10;
        //Генерируем криптографический хэш пароля
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        //создаем новый обьект сущности 'User'
        const newUser = {
            id: (this.users.length + 1).toString(),
            name,
            email,
            password: hashedPassword, //saved encript password
        };

        this.users.push(newUser);

        const {password: _, ...result } = newUser;

        return result;

    }
}