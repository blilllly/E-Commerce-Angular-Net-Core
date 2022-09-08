export interface Instrument {
    id:             number;
    tipo:           string;
    nombre:         string;
    marca:          string;
    descripcion:    string;
    rutaImg:        string;
    precio:         number;
    cantidad?:      number;
    subtotal?:      number;
}

export interface Preguntas {
    id:             number;
    nombre:         string;
    titulo:         string;
    contenido:      string;
}

export interface Respuestas {
    idPre:          number;
    nombre:         string;
    titulo:         string;
    contenido:      string;
}

// export interface Carrito {
//     instrument:     Instrument;
//     cantidad?:      number;
// }

// export interface Guitar {
//     id:             number;
//     nombre:         string;
//     marca:          string;
//     descripcion:    string;
//     rutaImg:        string;
//     precio:         number;
// }

// export interface Bajo {
//     id:             number;
//     nombre:         string;
//     marca:          string;
//     descripcion:    string;
//     rutaImg:        string;
//     precio:         number;
// }

// export interface Ampli {
//     id:             number;
//     nombre:         string;
//     marca:          string;
//     descripcion:    string;
//     rutaImg:        string;
//     precio:         number;
// }

// export interface Micro {
//     id:             number;
//     nombre:         string;
//     marca:          string;
//     descripcion:    string;
//     rutaImg:        string;
//     precio:         number;
// }