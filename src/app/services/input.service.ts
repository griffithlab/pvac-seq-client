import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { File } from '../store/models/store.model';
import { ConfigService } from './config.service';
import * as _ from 'lodash';

@Injectable()
export class InputService {
  private api: string;

  constructor(
    private restangular: Restangular,
    private config: ConfigService,
  ) {
    this.api = config.apiUrl();
  }

  query(component?: string): Observable<File[]> {
    const headers = {};
    if (component) { headers['X-Requesting-Component'] = component; };

    return this.restangular
      .all('input')
      .getList()
      .map(mapFiles);
  }
}

function mapFiles(res: Restangular): File[] {
  return _.chain(res.plain())
    .map(f => f as File)
    .filter(f => _.first(f.display_name) !== '.') // filter hidden
    .value();
}
