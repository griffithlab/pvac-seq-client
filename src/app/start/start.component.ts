import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'start.component.html',
    providers: []
})

export class StartComponent {
    constructor() {
        console.log('StartComponent loaded.');
    }
}
