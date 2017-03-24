import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Store } from '@ngrx/store';
import { ProcessService } from '../../../services/process.service';

import { Process } from '../../../store/models/process.model';

@Component({
  selector: 'pvs-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})
export class ProcessDetailComponent implements OnInit {
  @Input() processId: number;

  process$: Observable<Process>;

  constructor() {

  }

  ngOnInit() {
  }

}
