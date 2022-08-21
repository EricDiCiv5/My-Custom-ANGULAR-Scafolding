export interface SeriesDataWrapper {
    code:number;
    status:string;
    copyright:string;
    attributionText:string;
    attributionHTML:string;
    data:SeriesDataContainer;
    etag:string;
}
export interface SeriesDataContainer {
    offset:number;
    limit:number;
    total:number;
    count:number;
    results:Array<Partial<Series>>;
}
export interface Series {
    id:number;
    title:string;
    description:string;
    resourceURI:string;
    urls:Array<Url>;
    startYear:number;
    endYear:number;
    rating:string;
    modified:Date;
    thumbnail:Image;
    comics: ComicList;
    stories:StoryList;
    event:EventSummary;
    characters:CharacterList;
    creator:CreatorList;
    next:EventSummary;
    previous:EventSummary;
}
export interface Url {
    type:string;
    url:string;
}
export interface Image {
    path:string;
    extension:string;
}
export interface ComicList{
    available:number;
    returned:number;
    collectionURI:string;
    items:Array<EventSummary>;
}
export interface ComicSummary {
    resourceURI:string;
    name:string;
}
export interface StoryList{
    available:number;
    returned:number;
    collectionURI:string;
    items:Array<EventSummary>
}
export interface StorySummary{
    resourceURI:string;
    name:string;
    type:string;
}
export interface EventList{
    available:number;
    returned:number;
    collectionURI:string;
    items:Array<EventSummary>
}
export interface EventSummary {
    resourceURI:string;
    name:string;
}
export interface CharacterList{
    available:number;
    returned:number;
    collectionURI:string;
    items:Array<EventSummary>
}
export interface CharacterSummary{
    resourceURI:string;
    name:string;
    role:string;
}
export interface CreatorList{
    available:number;
    returned:number;
    collectionURI:string;
    items:Array<EventSummary>
}
export interface CreatorSummary{
    resourceURI:string;
    name:string;
    role:string;
}
export interface SeriesSummary {
    resourceURI:string;
    name:string;
}