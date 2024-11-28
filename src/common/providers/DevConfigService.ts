import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DBHOST = 'localhost';
  getdbhost() {
    return this.DBHOST;
  }
}
