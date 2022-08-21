export interface EventDataWrapper {
    code:number;
    status:string;
    copyright:string;
    attributionText:string;
    attributionHTML:string;
    data:EventDataContainer;
    etag:string;
}
export interface EventDataContainer {
    offset:number;
    limit:number;
    total:number;
    count:number;
    results:Array<Partial<Event>>;
}
export interface Event {
    id:number;
    title:string;
    description:string;
    resourceURI:string;
    urls:Array<Url>;
    modified:Date;
    start:Date;
    end:Date;
    thumbnail:Image;
    series:SeriesSummary;
    stories:StoryList;
    comics: ComicList;
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
export interface SeriesList{
    available:number;
    returned:number;
    collectionURI:string;
    items:Array<EventSummary>
}
export interface SeriesSummary {
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
export interface EventSummary {
    resourceURI:string;
    name:string;
}