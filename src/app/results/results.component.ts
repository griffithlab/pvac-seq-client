import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'results.component.html',
    providers: []
})

export class ResultsComponent {
    constructor() {
        console.log('ResultsComponent loaded.');
    }
}
