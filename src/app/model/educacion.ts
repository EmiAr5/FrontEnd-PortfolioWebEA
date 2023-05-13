export class Educacion {
    id?: number;
    urllogoinst: string;
    institucion: string;
    fechainicio: string;
    fechafin: string;
    carrera: string;
    tituloobtenido: string;
    puntaje: string;

    constructor(urllogoinst: string, institucion: string, fechainicio: string, fechafin: string, carrera: string, tituloobtenido: string, puntaje: string) {
        this.urllogoinst = urllogoinst;
        this.institucion = institucion;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.carrera = carrera;
        this.tituloobtenido = tituloobtenido;
        this.puntaje = puntaje;

    }
}
