import { Component } from '@angular/core';
import { SwaggerApiService } from './services/swagger-api.service';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  private apiJson;

  constructor(api: SwaggerApiService) {
    api.getApi()
      .subscribe((apiJson) => {
        this.apiJson = apiJson;
      });
  }
}
