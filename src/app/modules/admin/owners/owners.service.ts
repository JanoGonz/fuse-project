import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Owners } from './owners';
import { Pet } from '../pet/pet';

@Injectable()
export class OwnersService {
  apiUrl: string = 'http://localhost:9966/petclinic';

  constructor(private httpClient: HttpClient) {

  }

  sendGetAll(): Observable<Owners[]> {
    return this.httpClient.get<any>(this.apiUrl + '/api/owners');
  }

  deletePet(petId: number): any{
    return this.httpClient.delete(this.apiUrl + '/api/pets/' + petId);
  }

  addPet(name: string, petType: string, petTypeId: number, ownerId: number): any {
    const bodyjson: JSON = JSON.parse('{ ' +
        '"birthDate": "2022-10-05", '+
        '"name": "' + name + '", '+
        '"ownerId": '+ ownerId + ', '+
        '"type": { '+
            '"id": "'+ petTypeId + '",'+
            '"name": "' + petType + '"'+
        '},'+
        '"visits": [{}]'+
        '}');
    return this.httpClient.post(this.apiUrl + '/api/owners/' + ownerId + '/pets', bodyjson);
  }
}

// {
//     "birthDate": "2022-10-05",
//     "id": 1,
//     "name": "Leo",
//     "ownerId": 1,
//     "type": {
//       "id": 1,
//       "name": "cat"
//     },
//     "visits": [
//       {
//         "date": "2022-10-05",
//         "description": "rabies shot",
//         "id": 1,
//         "petId": 1
//       }
//     ]
//   }
