import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Process, ProcessSummary } from '../../../store/models/process.model';

@Component({
  selector: 'pvs-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss'],
})

export class ProcessTableComponent implements OnInit {
  @Input() processSummaries: ProcessSummary[];
  @Input() processes: Process[];
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
