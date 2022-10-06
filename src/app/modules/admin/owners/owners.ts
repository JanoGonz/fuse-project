import { Pet } from '../pet/pet';

export class Owners {
  constructor(
    public address: string,
    public city: string,
    public firstName: string,
    public id: number,
    public lastName: string,
    public telephone: string,
    public pets: Array<Pet>
    )
  {

  }
}
