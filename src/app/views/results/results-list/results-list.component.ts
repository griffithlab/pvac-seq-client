import { Component, Input, OnInit } from '@angular/core';
import { ProcessSummaryVM } from '../../../store/models/process.model';

@Component({
  selector: 'pvs-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  @Input() processSummaries: Array<ProcessSummaryVM>;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
