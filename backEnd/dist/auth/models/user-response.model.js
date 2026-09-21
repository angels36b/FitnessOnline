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
import { Provider } from "../enums/providedr.enum.js";
export class UserResponseModel {
    id;
    name;
    email;
    provider;
}
__decorate([
    ApiProperty({
        example: 1,
    }),
    __metadata("design:type", Number)
], UserResponseModel.prototype, "id", void 0);
__decorate([
    ApiProperty({
        example: 'Иван Иванов',
    }),
    __metadata("design:type", String)
], UserResponseModel.prototype, "name", void 0);
__decorate([
    ApiProperty({
        example: 'ivan@example.com',
    }),
    __metadata("design:type", String)
], UserResponseModel.prototype, "email", void 0);
__decorate([
    ApiProperty({
        example: Provider.LOCAL,
        enum: Provider,
    }),
    __metadata("design:type", String)
], UserResponseModel.prototype, "provider", void 0);
//# sourceMappingURL=user-response.model.js.map