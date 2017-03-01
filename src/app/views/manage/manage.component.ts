import { Component, ViewEncapsulation, OnInit, Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';

import { ProcessService } from '../../services/process.service';

@Component({
  templateUrl: 'manage.component.html',
  providers: []
})

export class ManageComponent {
  private processes;

  constructor(private route: ActivatedRoute, processes: ProcessService) {
    console.log('ManageComponent loaded.');
    // this.processes = this.route.snapshot.data['processes'];
    processes.query().subscribe((processes) => {
      this.processes = processes;
    });
  }
}

@Injectable()
export class ProcessResolve implements Resolve<any> {

  constructor(private processes: ProcessService) { }

  resolve() {
    return this.processes.query();
  }
}
