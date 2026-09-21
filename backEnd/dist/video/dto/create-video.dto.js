var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString, } from 'class-validator';
export class CreateVideoDto {
    title;
    topic;
    duration;
    description;
    size;
}
__decorate([
    ApiProperty({
        example: 'Утренняя зарядка',
        description: 'Название видео',
    }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "title", void 0);
__decorate([
    ApiProperty({
        example: 'ОФП',
        description: 'Тема видео',
    }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "topic", void 0);
__decorate([
    ApiProperty({
        example: '600',
        description: 'Продолжительность видео в секундах',
    }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "duration", void 0);
__decorate([
    ApiProperty({
        example: 'Комплекс упражнений для утренней зарядки',
        description: 'Описание видео',
    }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "description", void 0);
__decorate([
    ApiProperty({
        example: 15000000,
        description: 'Размер видео в байтах',
    }),
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], CreateVideoDto.prototype, "size", void 0);
//# sourceMappingURL=create-video.dto.js.map