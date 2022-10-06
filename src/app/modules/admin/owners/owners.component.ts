import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Owners } from './owners';
import { OwnersService } from './owners.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatDialog } from '@angular/material/dialog';
import { AddpetdialogComponent } from '../addpetdialog/addpetdialog.component';


@Component({
    selector: 'app-owners',
    templateUrl: './owners.component.html',
    styleUrls: ['./owners.component.css'],
    providers: [OwnersService],
})
export class OwnersComponent implements OnInit {
    displayDialogMode: boolean = false;
    displayDialogId: number = 0;
    owners: Array<Owners> = [];
    constructor(
        private _ownersService: OwnersService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmation: FuseConfirmationService,
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this._ownersService.sendGetAll().subscribe((data) => {
            this.owners = data;
        });
        // const confir = this._fuseConfirmation.open({title:'Prueba'});
    }

    // uploadFile(file: string, url: string): void {
    //     const b2 = new B2({
    //             accountId: 'janozelaznog',
    //             applicationKey: '3e48e27141e7'
    //     });
    //     b2.authorize((err: any) => {
    //         if(err){ throw err; }
    //         // this function wraps both a normal upload AND a large file upload
    //         b2.uploadFile(url, {
    //             bucketId: 'c36e84181e02a7c184310e17',
    //             fileName: file, // this is the object storage "key". Can include a full path
    //             // contentType: 'application/zip',
    //             onUploadProgress: (update) => {
    //                 console.log(`Progress: ${update.percent}% (${update.bytesDispatched}/${update.bytesTotal}`);
    //                 // output: Progress: 9% 9012/100024
    //             }
    //         // eslint-disable-next-line @typescript-eslint/no-shadow
    //         }, (err: any, results: any) => {
    //             console.log(err);
    //         });
    //     });
    //     b2.uploadFile( url, {
    //         name: file,
    //     }, (err, res) => {
    //         console.log('Done!', err, res);
    //     });
    // }

    actualizarListado(): void {
        this._ownersService.sendGetAll().subscribe((data) => {
            this.owners = data;
        });
    }

    borrarMascota(petId: number): any {
        const dialogRef = this._fuseConfirmation.open({
            title: '¿Seguro que desea borrar?',
            message: '¿Seguro?',
            actions: {
                confirm: {
                    label: 'Yep',
                },
                cancel: {
                    label: 'Nope',
                },
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'confirmed') {
                this._ownersService.deletePet(petId).subscribe(() => {
                    this.actualizarListado();
                    this._changeDetectorRef.markForCheck();
                });
                console.log(petId);
            }
        });
    }

    openDialog(ownerId: number): void {
        console.log('Open dialog');
        const dialogRef = this.dialog.open(AddpetdialogComponent, {
            width: '60%'
        });
        // eslint-disable-next-line prefer-const
        let instance = dialogRef.componentInstance;
        instance.ownerId = ownerId;
        console.log('OwnerId es igual a: ' + ownerId);
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
            this.actualizarListado();
            this._changeDetectorRef.markForCheck();
          });
    }

    // addPet(name: string, petTypeId: number, ownerId: number): any {
    //     // eslint-disable-next-line prefer-const
    //     let petType = '';
    //     switch (petTypeId) {
    //         case 1: {petType='cat'; break;};
    //         case 2: {petType='dog'; break;};
    //         case 3: {petType='lizard'; break;};
    //         case 4: {petType='snake'; break;};
    //         case 5: {petType='bird'; break;};
    //         case 6: {petType='hamster'; break;};
    //     }
    //     this._ownersService.addPet(name, petType, petTypeId, ownerId).subscribe(() => {
    //         console.log('éxito');
    //     });
    // }
}
