import { Component, ViewEncapsulation, OnInit, Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';

import { ProcessService } from '../../services/process.service';

@Component({
  templateUrl: 'manage.component.html',
  providers: []
})

export class ManageComponent implements OnInit {
  private currentProcesses;
  private processes;

  constructor(private route: ActivatedRoute, processService: ProcessService) {
    console.log('ManageComponent loaded.');
    this.processes = processService;
  }

  ngOnInit() {
    this.currentProcesses = this.route.snapshot.data['processes'];
  }

  reload() {
    this.processes.query();
  }
}

@Injectable()
export class ProcessResolve implements Resolve<any> {

  constructor(private processes: ProcessService) { }

  resolve() {
    return this.processes.query();
  }
}
