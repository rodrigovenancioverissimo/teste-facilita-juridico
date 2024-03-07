import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  private readonly pool: Pool;

  constructor(private readonly configService: ConfigService) {
    this.pool = new Pool({
      user: this.configService.get<string>('PG_USER'),
      host: this.configService.get<string>('PG_HOST'),
      database: this.configService.get<string>('PG_DATABASE'),
      password: this.configService.get<string>('PG_PASSWORD'),
      port: this.configService.get<number>('PG_PORT'),
    });
  }

  getPool(): Pool {
    return this.pool;
  }
}
