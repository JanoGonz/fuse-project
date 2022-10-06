import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PetTypes } from './PetTypes';

@Injectable()
export class PetTypesService {
  apiUrl: string = 'http://localhost:9966/petclinic';

  constructor(private httpClient: HttpClient) {

  }

  sendGetAll(): Observable<PetTypes[]> {
    return this.httpClient.get<any>(this.apiUrl + '/api/pettypes');
  }
}
