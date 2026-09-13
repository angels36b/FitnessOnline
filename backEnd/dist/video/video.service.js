var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let VideoService = class VideoService {
    videos = [{
            id: "1",
            title: "title1",
            duration: 10
        },
        {
            id: "2",
            title: "title2",
            duration: 20
        },];
    findAll() {
        return this.videos;
    }
    findOne(id) {
        const video = this.videos.find((video) => video.id === id);
        if (!video) {
            throw new NotFoundException();
        }
        return video;
    }
    createVideo(video) {
        const newVideo = {
            id: Date.now().toString(),
            title: video.title,
            duration: video.duration,
        };
        this.videos.push(newVideo);
        return newVideo;
    }
};
VideoService = __decorate([
    Injectable()
], VideoService);
export { VideoService };
//# sourceMappingURL=video.service.js.map