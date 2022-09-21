// export interface Instrument {
//     id:             number;
//     tipo:           string;
//     nombre:         string;
//     marca:          string;
//     descripcion:    string;
//     rutaImg:        string;
//     precio:         number;
//     cantidad?:      number;
//     subtotal?:      number;
// }

export interface Instrument {
    id?:             number;
    marca:          string;
    modelo:         string;
    descripcion?:    string;
    precio:         number;
    tipoProductoId: number;
    imagen?:         string;
}

export interface Preguntas {
    id?:              number;
    textoPregunta:   string;
    tituloPregunta:  string;
    usuarioPregunta: string;
}

export interface Respuestas {
    id?:               number;
    preguntaId:       number;
    textoRespuesta:   string;
    tituloRespuesta:  string;
    usuarioRespuesta: string;
}

// export interface Preguntas {
//     id:             number;
//     nombre:         string;
//     titulo:         string;
//     contenido:      string;
// }

// export interface Respuestas {
//     idPre:          number;
//     nombre:         string;
//     titulo:         string;
//     contenido:      string;
// }

export interface ItemCarrito {
    instrument:      Instrument;
    cantidad?:       number;
    total?:          number;
}

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