import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Process } from '../../../store/models/process.model';

@Component({
  selector: 'pvs-process-table',
  providers: [],
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.scss']
})

export class ProcessTableComponent implements OnInit {
  @Input() processes: Array<Process>;
  @Input() title: string;

  @Output()
  onReload: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
}
