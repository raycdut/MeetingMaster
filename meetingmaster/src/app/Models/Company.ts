import { uuid } from '../Util/uuid';
export class Company {
  id: string;
  name: string;

  constructor(obj?:any)
  {
    this.id = obj&&obj.id || uuid();
    this.name = obj&&obj.name || null;
  }

}
