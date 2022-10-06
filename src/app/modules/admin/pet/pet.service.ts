import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from './pet';


@Injectable()
export class PetService {
  apiUrl: string = 'http://localhost:9966/petclinic';

  constructor(private httpClient: HttpClient) {

  }

  sendGetAll(): Observable<Pet[]> {
    return this.httpClient.get<any>(this.apiUrl + '/api/pets');
  }
}
