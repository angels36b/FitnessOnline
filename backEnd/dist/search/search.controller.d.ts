import { SearchService } from "./search.service.js";
import { SearchVideoResponseDto } from "./models/search-video.model.js";
import { SearchVideoDto } from "./dto/search-video.dto.js";
export declare class SearchController {
    private readonly videoService;
    constructor(videoService: SearchService);
    search(searchDto: SearchVideoDto): SearchVideoResponseDto;
}
