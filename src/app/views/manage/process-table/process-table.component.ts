import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Process, ProcessSummaryVM } from '../../../store/models/process.model';

@Component({
  selector: 'pvs-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss'],
})

export class ProcessTableComponent implements OnInit {
  @Input() processSummaries: Array<ProcessSummaryVM>;
  @Input() processes: Array<Process>;
  @Input() title: string;

  @Output()
  onReload: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  getProcessDetail(id: number): Process {
    return this.processes[id];
  }
}
