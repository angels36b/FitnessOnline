var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiPropertyOptional, } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min, } from 'class-validator';
import { Type } from 'class-transformer';
export var VideoSearchSortBy;
(function (VideoSearchSortBy) {
    VideoSearchSortBy["TITLE"] = "title";
    VideoSearchSortBy["DURATION"] = "duration";
    VideoSearchSortBy["SIZE"] = "size";
})(VideoSearchSortBy || (VideoSearchSortBy = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DESC"] = "desc";
})(SortOrder || (SortOrder = {}));
export class SearchVideoDto {
    q;
    topic;
    page = 1;
    limit = 10;
    sortBy;
    order = SortOrder.ASC;
}
__decorate([
    ApiPropertyOptional({
        description: 'Поисковый запрос. Ищет по названию, теме и описанию видео.',
        example: 'спина',
    }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], SearchVideoDto.prototype, "q", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Фильтр по теме видео.',
        example: 'ЛФК',
    }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], SearchVideoDto.prototype, "topic", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Номер страницы.',
        example: 1,
        default: 1,
        minimum: 1,
    }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], SearchVideoDto.prototype, "page", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Количество видео на странице.',
        example: 10,
        default: 10,
        minimum: 1,
        maximum: 100,
    }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(100),
    __metadata("design:type", Number)
], SearchVideoDto.prototype, "limit", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Поле, по которому выполняется сортировка.',
        enum: VideoSearchSortBy,
        example: VideoSearchSortBy.TITLE,
    }),
    IsOptional(),
    IsEnum(VideoSearchSortBy),
    __metadata("design:type", String)
], SearchVideoDto.prototype, "sortBy", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Направление сортировки.',
        enum: SortOrder,
        example: SortOrder.ASC,
        default: SortOrder.ASC,
    }),
    IsOptional(),
    IsEnum(SortOrder),
    __metadata("design:type", String)
], SearchVideoDto.prototype, "order", void 0);
//# sourceMappingURL=search-video.dto.js.map