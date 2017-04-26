import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/models/app.model';

@Component({
  selector: 'app-result-process',
  templateUrl: './result-process.component.html',
  styleUrls: ['./result-process.component.scss']
})
export class ResultProcessComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
