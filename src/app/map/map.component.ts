import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    map!: Map;
    constructor(
        private _changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.map = new Map({
            layers: [new TileLayer({source: new OSM()})],
            target: 'map',
            view: new View({
                center: [0,0],
                zoom: 2, maxZoom:20
            })
          });
          setTimeout(() => { this.map.updateSize(); });
    }


}
