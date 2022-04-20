
 export class Serie {
    id: number;
    nombre: string;
    cadena:string;
    temporadas:number;
    descripcion: string;
    link:string;
    imagen:string;

    constructor(id: number,nombre: string,cadena:string, temporadas:number, descripcion: string,link:string,
        imagen:string) {
      this.id=id;
      this.nombre = nombre;
      this.cadena = cadena;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.link = link;
      this.imagen = imagen;
      //aaaa
    }
}


