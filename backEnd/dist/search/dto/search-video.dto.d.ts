export declare enum VideoSearchSortBy {
    TITLE = "title",
    DURATION = "duration",
    SIZE = "size"
}
export declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}
export declare class SearchVideoDto {
    q?: string;
    topic?: string;
    page: number;
    limit: number;
    sortBy?: VideoSearchSortBy;
    order: SortOrder;
}
