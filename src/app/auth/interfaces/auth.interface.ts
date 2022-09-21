export interface UsuarioNuevo {
    nombre: string;
    apellidos: string;
    email: string;
    password: string;
}

export interface Auth {
    token: string;
    nombre: string;
    apellidos: string;
    role: string;
}

export interface Login {
    email: string;
    password: string;
}