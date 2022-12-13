import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { Configuration } from '../config/config.keys';
import { ConnectionOptions } from 'tls';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'sqlite',
        database: config.get(Configuration.DATABASE),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
        dropSchema: true,
        autoLoadEntities: true,
        // migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
