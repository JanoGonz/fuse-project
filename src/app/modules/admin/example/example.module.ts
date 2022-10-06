import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { OwnersComponent } from '../owners/owners.component';
import { PettypesComponent } from '../pettypes/pettypes.component';
import { PetComponent } from '../pet/pet.component';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { AddpetdialogComponent } from '../addpetdialog/addpetdialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MapComponent } from 'app/map/map.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { TwitterComponent } from '../twitter/twitter.component';
import { ChangeTimelineComponent } from '../change-timeline/change-timeline.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        OwnersComponent,
        PettypesComponent,
        PetComponent,
        AddpetdialogComponent,
        MapComponent,
        TwitterComponent,
        ChangeTimelineComponent,
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatSliderModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        NgxTwitterWidgetsModule
    ]
})
export class ExampleModule
{
}
