import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  server = {
    protocol: 'http://',
    domain: 'localhost',
    port: '8080',
    version: 'v1'
  };

  serverUrl() {
    return this.server.protocol +
      this.server.domain + ':' +
      this.server.port + '/' +
      this.server.version + '/';
  }
}
