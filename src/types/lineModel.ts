export class LineModel {
  private _yang:boolean;
  private _changing:boolean;

  constructor() {
    this.generate();
  }
  
  generate() {
    this.yang = Math.random() < .5 ? true : false;
    this.changing = Math.random() < .5 ? true: false;
  }

  get yang() {
    return this._yang;
  }

  set yang(b:boolean) {
    this._yang = b;
  }
  get changing() {
    return this._changing;
  }

  set changing(b:boolean) {
    this._changing = b;
  }


}

export default { LineModel }