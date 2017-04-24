import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { File } from '../store/models/store.model';
import { ConfigService } from './config.service';

@Injectable()
export class FileService {
  private api: string;

  constructor(private http: Http, private config: ConfigService) {
    this.api = config.apiUrl();
  }

  query(processId): Observable<File[]> {
    return this.http.get(`${this.api}/processes/{processId}/results`)
      .map(mapFiles);
  }

}

function mapFiles(res: Response): File[] {
  return res.json().map(mapFile);
}

function mapFile(res: Response): File {
  return toFile(res.json());
}

function toFile(f: any): File {
  return f as File;
}
