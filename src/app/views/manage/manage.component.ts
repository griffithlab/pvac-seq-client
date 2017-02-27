import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'manage.component.html',
    providers: []
})

export class ManageComponent {
    constructor() {
        console.log('ManageComponent loaded.');
    }
}
