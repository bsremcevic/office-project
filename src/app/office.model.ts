export class Office {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public latitude: string,
    public longitude: string,
    public photo: string
  ){}

}
//   the above is the same as:

//   public id: number;
//   ...
//
//   constructor( id: number, ...) {
//     this.id = id;
//     ...
