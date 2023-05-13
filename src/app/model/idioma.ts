export class Idioma {
    id?: number;
    nombre: string;
    escritura: string;
    lectura: string;
    oralidad: string;

    constructor(nombre: string, escritura: string, lectura: string, oralidad: string) {
        this.nombre = nombre;
        this.escritura = escritura;
        this.lectura = lectura;
        this.oralidad = oralidad;
    }
}
