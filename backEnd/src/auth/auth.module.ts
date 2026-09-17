import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller.js";
import { AuthService } from "./auth.service.js";

// Декаратор @Module обьединяет части контекста футентификаций
// the module decorator group the pieces of the  autentication context  
@Module({

    controllers: [AuthController],
    providers: [AuthService],

})
export class AuthModule {}