import { Component } from '@angular/core';
import { SwaggerApiService } from './services/swagger-api.service';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(api: SwaggerApiService) {
    console.log('url: ' + api.getUrl());
  }
}
