import { SearchVideoDto } from "./dto/search-video.dto.js";
import { SearchVideoResponseDto } from "./models/search-video.model.js";
export declare class SearchService {
    search(searchDto: SearchVideoDto): SearchVideoResponseDto;
}
