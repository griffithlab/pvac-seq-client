import { Component, OnInit, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Router, Resolve, ActivatedRoute } from '@angular/router';

import { ProcessService } from '../../services/process.service';

@Component({
  templateUrl: 'manage.component.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ManageComponent implements OnInit {
  private currentProcesses;
  private processes;
  private selectedProcess;

  constructor(private route: ActivatedRoute, processService: ProcessService) {
    console.log('ManageComponent loaded.');
    this.processes = processService;
    this.currentProcesses = this.processes.items;
    this.processes.query();
  }

  ngOnInit() {
    this.selectedProcess = this.processes.selected;
  }

  reload() {
    this.processes.query();
  }
}
