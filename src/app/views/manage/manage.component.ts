import { Component, ViewEncapsulation, OnInit, Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProcessService } from '../../services/process.service';

@Component({
    templateUrl: 'manage.component.html',
    providers: []
})

export class ManageComponent {
    constructor() {
        console.log('ManageComponent loaded.');
    }
}

@Injectable()
export class ProcessResolve implements Resolve<any> {

  constructor(private processes: ProcessService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.processes.query();
  }
}
