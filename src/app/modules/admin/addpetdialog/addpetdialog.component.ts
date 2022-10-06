import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OwnersService } from '../owners/owners.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Component({
    selector: 'app-addpetdialog',
    templateUrl: './addpetdialog.component.html',
    styleUrls: ['./addpetdialog.component.scss'],
    providers: [OwnersService],
})
export class AddpetdialogComponent implements OnInit {
    @Input() ownerId: number;
    @ViewChild('name') name: ElementRef | undefined;
    @ViewChild('tipo') tipo: any;

    constructor(
        private _ownerService: OwnersService,
        private dialogRef: MatDialogRef<AddpetdialogComponent>,
        private _fuseConfirmation: FuseConfirmationService
    ) {}

    ngOnInit(): void {}

    addPet(): any {
        // eslint-disable-next-line prefer-const
        console.log(this.tipo);
        let petType = '';
        switch (this.tipo) {
            case '1': {
                petType = 'cat';
                break;
            }
            case '2': {
                petType = 'dog';
                break;
            }
            case '3': {
                petType = 'lizard';
                break;
            }
            case '4': {
                petType = 'snake';
                break;
            }
            case '5': {
                petType = 'bird';
                break;
            }
            case '6': {
                petType = 'hamster';
                break;
            }
        }
        if (this.name.nativeElement.value != null && petType !== '') {
            this._ownerService
                .addPet(
                    this.name.nativeElement.value,
                    petType,
                    this.tipo,
                    this.ownerId
                )
                .subscribe(() => {
                    console.log('éxito');
                    this.dialogRef.close();
                });
        } else {
            const dialogRef = this._fuseConfirmation.open({
                title: 'Debe rellenar todos los campos',
                message: '',
                actions: {
                    confirm: {
                        show: true,
                        label: 'Aceptar',
                    },
                    cancel: {
                        show: false,
                        label: 'Cancel',
                    },
                },
            });
        }
    }
}
