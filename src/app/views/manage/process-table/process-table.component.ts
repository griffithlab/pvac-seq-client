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

  @Output('reload')
  processTableEmitter = new EventEmitter();

  constructor() { }

  reload() {
    this.processTableEmitter.emit('reload');
  }

  ngOnInit() {
  }
}
