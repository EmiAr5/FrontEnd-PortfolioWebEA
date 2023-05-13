export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    acercade: string;
    fechanac: string;
    celular: string;
    email: string;
    ocupacion: string;
    paisresidencia: string;
    urlfoto: string;
    urlbanner: string;

    constructor(nombre: string, apellido: string, acercade: string, fechanac: string, celular: string, email: string, ocupacion: string, paisresidencia: string, urlfoto: string, urlbanner: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercade = acercade;
        this.fechanac = fechanac;
        this.celular = celular;
        this.email = email;
        this.ocupacion = ocupacion;
        this.paisresidencia = paisresidencia;
        this.urlfoto = urlfoto;
        this.urlbanner = urlbanner;
    }
}
