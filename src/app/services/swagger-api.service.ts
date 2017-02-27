import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { ConfigService } from './config.service';

@Injectable()
export class SwaggerApiService {

  private server: string;

  constructor(private http: Http, private config: ConfigService) {
    console.log('server URL: ' + config.serverUrl());
    this.server = config.serverUrl();
  }

  getApi() {
    return this.http
      .get(this.server + '/swagger.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  // getCustomersSummary(): Observable<ICustomer[]> {
  //     return this.http.get(this.url + 'customers')
  //         .map((resp: Response) => resp.json())
  //         .catch(this.handleError);
  // }

  // updateCustomer(customer: ICustomer) {
  //     return this.http.put(this.url + 'putCustomer/' + customer.id, customer)
  //         .map((response: Response) => response.json())
  //         .catch(this.handleError);
  // }

  handleError(error: any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
