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
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, } from '@nestjs/common';
import { ApiResponse, ApiTags, } from '@nestjs/swagger';
import { VideoService } from "./video.service.js";
import { VideoModel } from "./models/video.interface.js";
import { UpdateVideoDto } from "./dto/update-video.dto.js";
import { ReplaceVideoDto } from "./dto/replace-viceo.dto.js";
import { CreateVideoDto } from "./dto/create-video.dto.js";
let VideoController = class VideoController {
    videosService;
    constructor(videosService) {
        this.videosService = videosService;
    }
    findAll() {
        return this.videosService.findAll();
    }
    findOne(id) {
        return this.videosService.findOne(id);
    }
    create(createVideoDto) {
        return this.videosService.create(createVideoDto);
    }
    update(id, updateVideoDto) {
        return this.videosService.update(id, updateVideoDto);
    }
    replace(id, replaceVideoDto) {
        return this.videosService.replace(id, replaceVideoDto);
    }
    remove(id) {
        this.videosService.remove(id);
    }
};
__decorate([
    Get(),
    ApiResponse({
        status: 200,
        description: 'Get all videos',
        type: [VideoModel],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], VideoController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    ApiResponse({
        status: 200,
        description: 'Get video by id',
        type: VideoModel,
    }),
    ApiResponse({
        status: 404,
        description: 'Video not found',
    }),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", VideoModel)
], VideoController.prototype, "findOne", null);
__decorate([
    Post(),
    HttpCode(HttpStatus.CREATED),
    ApiResponse({
        status: 201,
        description: 'Video created',
        type: VideoModel,
    }),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateVideoDto]),
    __metadata("design:returntype", VideoModel)
], VideoController.prototype, "create", null);
__decorate([
    Patch(':id'),
    ApiResponse({
        status: 200,
        description: 'Video partially updated',
        type: VideoModel,
    }),
    ApiResponse({
        status: 404,
        description: 'Video not found',
    }),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateVideoDto]),
    __metadata("design:returntype", VideoModel)
], VideoController.prototype, "update", null);
__decorate([
    Put(':id'),
    ApiResponse({
        status: 200,
        description: 'Video replaced',
        type: VideoModel,
    }),
    ApiResponse({
        status: 404,
        description: 'Video not found',
    }),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, ReplaceVideoDto]),
    __metadata("design:returntype", VideoModel)
], VideoController.prototype, "replace", null);
__decorate([
    Delete(':id'),
    HttpCode(HttpStatus.NO_CONTENT),
    ApiResponse({
        status: 204,
        description: 'Video deleted',
    }),
    ApiResponse({
        status: 404,
        description: 'Video not found',
    }),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "remove", null);
VideoController = __decorate([
    ApiTags('videos'),
    Controller('videos'),
    __metadata("design:paramtypes", [VideoService])
], VideoController);
export { VideoController };
//# sourceMappingURL=video.controller.js.map