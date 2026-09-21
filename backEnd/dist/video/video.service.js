var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException, } from '@nestjs/common';
import { videos } from "../mockData/videos.mock.js";
let VideoService = class VideoService {
    videos = videos;
    findAll() {
        return this.videos;
    }
    findOne(id) {
        const video = this.videos.find((video) => video.id === id);
        if (!video) {
            throw new NotFoundException(`Video with id ${id} not found`);
        }
        return video;
    }
    create(createVideoDto) {
        const newVideo = {
            id: this.getNextId(),
            ...createVideoDto,
        };
        this.videos.push(newVideo);
        return newVideo;
    }
    update(id, updateVideoDto) {
        const video = this.findOne(id);
        Object.assign(video, updateVideoDto);
        return video;
    }
    replace(id, replaceVideoDto) {
        const videoIndex = this.videos.findIndex((video) => video.id === id);
        if (videoIndex === -1) {
            throw new NotFoundException(`Video with id ${id} not found`);
        }
        const replacedVideo = {
            id,
            ...replaceVideoDto,
        };
        this.videos[videoIndex] = replacedVideo;
        return replacedVideo;
    }
    remove(id) {
        const videoIndex = this.videos.findIndex((video) => video.id === id);
        if (videoIndex === -1) {
            throw new NotFoundException(`Video with id ${id} not found`);
        }
        this.videos.splice(videoIndex, 1);
    }
    getNextId() {
        if (this.videos.length === 0) {
            return 1;
        }
        return Math.max(...this.videos.map((video) => video.id)) + 1;
    }
};
VideoService = __decorate([
    Injectable()
], VideoService);
export { VideoService };
//# sourceMappingURL=video.service.js.map