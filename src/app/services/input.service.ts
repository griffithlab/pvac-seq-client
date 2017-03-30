import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { File } from '../store/models/store.model';

import * as _ from 'lodash';

import { ConfigService } from './config.service';

@Injectable()
export class InputService {
  private api: string;

  constructor(
    private http: Http,
    private config: ConfigService,
  ) {
    this.api = config.apiUrl();
  }

  query(): Observable<File[]> {
    return this.http.get(`${this.api}/input`)
      .map(mapFiles);
  }
}

function mapFiles(res: Response): File[] {
  return _.chain(res.json())
    .map(f => f as File)
    .filter(f => _.first(f.display_name) !== '.') // filter hidden
    .value();
}
