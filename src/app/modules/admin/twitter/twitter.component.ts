import { ChangeDetectionStrategy } from '@angular/core';
import { Inject } from '@angular/core';
import { ChangeDetectorRef, ElementRef, Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { timeout } from 'rxjs';
import { timer } from 'rxjs';

@Component({
    selector: 'app-twitter',
    templateUrl: './twitter.component.html',
    styleUrls: ['./twitter.component.scss'],
})

export class TwitterComponent implements OnInit {
    @ViewChild('userName') userName: ElementRef | undefined;
    @ViewChild('timeline') timelineElement: ElementRef | undefined;
    @Input() screenName: string;
    timeline: NgxTwitterWidgetsModule;
    changeDetection: ChangeDetectionStrategy.OnPush;
    loading: boolean = true;


    constructor(
        private ref: ChangeDetectorRef,
    ) {
    }
    ngOnInit(): void {
        if (this.screenName == null) {
            this.screenName = 'makavana_romik';
        }
    }

    onLoad(event: Event): void {
        console.log('CARGADO');
        this.loading = false;
    }


}
