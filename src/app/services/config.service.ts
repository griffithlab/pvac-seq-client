import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  server = {
    protocol: 'http://',
    domain: 'localhost',
    // prod mode directly queries pvacseq-api on port 8080, dev mode provides 4200 -> 8080 proxy
    port: environment.production ? 8080 : 4200,
    api: 'api',
    version: 'v1'
  };

  serverUrl() {
    return this.server.protocol +
      this.server.domain + ':' +
      this.server.port;
  }

  apiUrl() {
    return this.server.protocol +
      this.server.domain + ':' +
      this.server.port + '/' +
      this.server.api + '/' +
      this.server.version;
  }
}
