import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  server = {
    protocol: 'http://',
    domain: 'localhost',
    port: '4200',
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
