import { IsString, IsInt, Min, MinLength } from "class-validator";

export class CreateVideoDto {
    @IsString()
    @MinLength(6)
    title:string;

    duration:number;
}