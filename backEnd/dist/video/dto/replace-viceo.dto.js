var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsInt, IsNotEmpty, IsPositive, IsString, Length, } from 'class-validator';
export class ReplaceVideoDto {
    title;
    topic;
    duration;
    description;
    size;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], ReplaceVideoDto.prototype, "title", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], ReplaceVideoDto.prototype, "topic", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], ReplaceVideoDto.prototype, "duration", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    Length(10),
    __metadata("design:type", String)
], ReplaceVideoDto.prototype, "description", void 0);
__decorate([
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], ReplaceVideoDto.prototype, "size", void 0);
//# sourceMappingURL=replace-viceo.dto.js.map