import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ProcessService } from '../../services/process.service';
import { Process } from '../../store/models/process.model';

@Component({
  templateUrl: 'manage.component.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ManageComponent implements OnInit {
  private processes;
  private currentProcesses$: Observable<Array<Process>>;
  private selectedProcess$: Observable<Process>;

  constructor(private route: ActivatedRoute, processService: ProcessService) {
    this.processes = processService;
    this.currentProcesses$ = this.processes.items;
    this.processes.query();
  }

  ngOnInit() {
    this.selectedProcess$ = this.processes.selected;
  }

  reload() {
    this.processes.query();
  }
}
