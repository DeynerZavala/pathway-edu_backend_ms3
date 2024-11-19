import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CentroDeEstudioModule } from './centro-de-estudio/centro-de-estudio.module';
import { AreaCentroDeEstudioModule } from './area-centro-de-estudio/area-centro-de-estudio.module';
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
    CentroDeEstudioModule,
    AreaCentroDeEstudioModule,
  ],
})
export class AppModule {}
