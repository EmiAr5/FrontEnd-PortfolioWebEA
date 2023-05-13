export class Experiencia {
    id?: number;
    urllogocomp: string;
    fechainicio: string;
    fechafin: string;
    puesto: string;
    compania: string;
    descripciontrabajo: string;

    constructor(urllogocomp: string, fechainicio: string, fechafin: string, puesto: string, compania: string, descripciontrabajo: string) {
        this.urllogocomp = urllogocomp;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.puesto = puesto;
        this.compania = compania;
        this.descripciontrabajo = descripciontrabajo;
    }
}
