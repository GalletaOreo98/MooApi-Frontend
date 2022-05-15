export interface IUsuario {
    email: string,
    password: string,
    name: string
}

export interface IAuthRes {
    ok: boolean,
    message: string,
    token: string,
    nombre: string
}