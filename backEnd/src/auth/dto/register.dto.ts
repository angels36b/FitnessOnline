import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';

export class RegisterDto {

    @IsEmail({}, { message: 'Электронная почта недействительна'})
    @IsNotEmpty({message: ' электронная почта является обязательной'})
    email:string;

    @IsString()
    @MinLength(6, {message: 'Пароль должен содержать не менее 6 символов'})
    password: string;

    @IsString()
    @IsNotEmpty({message: 'имя обязательно'})
    name: string;
}
