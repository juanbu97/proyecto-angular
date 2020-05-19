export class Noticia{
  constructor(
    public id: number,
    public noticia_texto:string,
    public idCurso:number,
    public fecha:Date,
    public fechaInicio:Date,
    public fechaFinal:Date,

  ){

  }
}
