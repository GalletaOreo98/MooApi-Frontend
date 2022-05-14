export interface IFrame {
    ok: boolean,
    message: string,
    caption: string,
    url: string
}

export interface IActualFrame {
    caption: string,
    url: string,
    isOn: boolean
}

export interface IGalleryPage {
    ok: boolean,
    message: string,
    page: [IGalleryPageElement]
}

export interface IGalleryPageElement {
    numeroFrame: string,
    url: string
}

export interface IGallerySize {
    ok: boolean,
    message: string,
    size: number
}