import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Restangular } from 'ngx-restangular';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { File } from '../store/models/store.model';
import { ConfigService } from './config.service';

@Injectable()
export class FileService {
  private api: string;

  constructor(private restangular: Restangular,
    private config: ConfigService) {
    this.api = config.apiUrl();
  }

  query(processId): Observable<File[]> {
    return this.restangular
      .one('processes', processId)
      .all('results')
      .getList();
  }

}
