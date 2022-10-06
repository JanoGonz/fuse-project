import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-change-timeline',
    templateUrl: './change-timeline.component.html',
    styleUrls: ['./change-timeline.component.scss'],
})
export class ChangeTimelineComponent implements OnInit {
    @ViewChild('userName') userName: ElementRef | undefined;
    rendered: boolean = true;
    screenName: string;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,) {}

    ngOnInit(): void {}
    changeUser(): void {
        this.rendered = false;
        this.screenName = this.userName.nativeElement.value;
        console.log('Rendered: ' + this.rendered);
        this._changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.rendered = true;
        }, 1);
    }
}
