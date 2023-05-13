export class Proyecto {
        id?: number;
    enlace: string;
    urlimagen: string;
    nombre: string;
    fechainicio: string;
    fechafin: string;
    descripcion: string;

    constructor(enlace: string, urlimagen: string, nombre: string, fechainicio: string, fechafin: string, descripcion: string) {
        this.enlace = enlace;
        this.urlimagen = urlimagen;
        this.nombre = nombre;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.descripcion = descripcion;
    }
}
