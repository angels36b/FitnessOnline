import { Provider } from "../enums/providedr.enum.js";
export declare class UserModel {
    id: number;
    name: string;
    email: string;
    password: string;
    provider: Provider;
    yandexId?: string;
}
