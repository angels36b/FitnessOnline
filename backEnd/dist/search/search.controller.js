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
import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from "./search.service.js";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { SearchVideoResponseDto } from "./models/search-video.model.js";
import { SearchVideoDto } from "./dto/search-video.dto.js";
let SearchController = class SearchController {
    videoService;
    constructor(videoService) {
        this.videoService = videoService;
    }
    search(searchDto) {
        return this.videoService.search(searchDto);
    }
};
__decorate([
    Get(),
    ApiOperation({
        summary: 'Поиск видео',
        description: 'Выполняет серверный поиск видео по названию, теме и описанию с поддержкой фильтрации, сортировки и пагинации.',
    }),
    ApiOkResponse({
        description: 'Результаты поиска видео.',
        type: SearchVideoResponseDto,
    }),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SearchVideoDto]),
    __metadata("design:returntype", SearchVideoResponseDto)
], SearchController.prototype, "search", null);
SearchController = __decorate([
    Controller('search'),
    __metadata("design:paramtypes", [SearchService])
], SearchController);
export { SearchController };
//# sourceMappingURL=search.controller.js.map