import { IsString, IsNotEmpty, IsNumber, MinLength  } from "class-validator";

export class CreateVideoDto {
    @IsString()
    @MinLength(3,{message: 'the name must be at least 3 characters long'})
    title:string;
    
    //Требование = Описание видео
    @IsString()
    @IsNotEmpty({ message:'the description is required fild'})
    description:string;
    
    //Требование Тематика видео// Проверяем наличие строкового значения категории
    @IsString()
    @IsNotEmpty({message: 'topic is required in the fild'})
    topic: string;

    @IsNumber({}, {message: 'the duration should be a number'})
    duration:number;

}