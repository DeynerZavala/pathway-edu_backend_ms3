import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { CentroDeEstudiosModule } from './centro-de-estudios/centro-de-estudios.module';
import { AreaUniversidadModule } from './area-centro-de-estudios/area-centro-de-estudios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isSSL = configService.get('DB_SSL') === 'true'; // Variable de entorno para habilitar/deshabilitar SSL
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          ssl: isSSL
            ? {
                rejectUnauthorized: false,
              }
            : false, // Deshabilita SSL si no es necesario
          autoLoadEntities: true,
          synchronize: true, // Desactivar en producción
        };
      },
    }),
    CentroDeEstudiosModule,
    AreaUniversidadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
