import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }
}
