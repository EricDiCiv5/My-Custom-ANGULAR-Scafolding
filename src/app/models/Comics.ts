export interface ComicDataWrapper {
    code:number;
    status:string;
    copyright:string;
    attributionText:string;
    attributionHTML:string;
    data:ComicDataContainer;
    etag:string;
}
export interface ComicDataContainer {
    offset:number;
    limit:number;
    total:number;
    count:number;
    results:Array<Partial<Comic>>;
}
export interface Comic {
    id:number;
    title:string;
    description:string;
    modified:Date;
    resourceURI:string;
    urls:Array<Url>;
    format:string;
    series:SeriesSummary;
    variants:Array<ComicSummary>;
    collections:Array<ComicSummary>;
    collectedIssues:Array<ComicSummary>;
    dates:Array<ComicDate>;
    prices:Array<ComicPrice>;  
    thumbnail:Image;
    images: Array<Image>;
    creators:CreatorList;
    characters:CharacterList;
    stories:StoryList;
    events:EventList;
}
export interface TextObject{
    type:string;
    language:string;
    text:string;
}
export interface Url {
    type:string;
    url:string;
}
export interface SeriesSummary {
    resourceURI:string;
    name:string;
}
export interface ComicSummary {
    resourceURI:string;
    name:string;
}
export interface ComicDate{
    type:string;
    date:Date;
}
export interface ComicPrice{
    type:string;
    price:number;
}
export interface Image {
    path:string;
    extension:string;
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
export interface EventList {
    available:number;
    returned:number;
    collectionURI:string;
    items:Array<EventSummary>
}
export interface EventSummary {
    resourceURI:string;
    name:string;
}