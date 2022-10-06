import { Component, OnInit } from '@angular/core';
import { PetTypes } from './PetTypes';
import { PetTypesService } from './pettypes.service';

@Component({
  selector: 'app-pettypes',
  templateUrl: './pettypes.component.html',
  styleUrls: ['./pettypes.component.css'],
  providers: [PetTypesService]
})
export class PettypesComponent implements OnInit {
  listado: Array<PetTypes> = [];

  constructor(private _pettypesService: PetTypesService) {

   }

  ngOnInit(): void {
    this._pettypesService.sendGetAll().subscribe(data => {this.listado = data})
  }

}
