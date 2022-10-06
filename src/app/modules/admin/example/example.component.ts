import { Component, ViewEncapsulation } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
