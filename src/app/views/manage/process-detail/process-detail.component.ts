import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pvs-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {
  @Input() processId: number;

  constructor() { }

  ngOnInit() {
  }

}
