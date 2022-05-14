export interface IVideosList {
    ok: boolean,
    message: string,
    result: [IVideosListElement],
}

export interface IVideosListElement {
    idvideo: number,
    numeroVideo: number,
    url: string,
    nombre: string,
}