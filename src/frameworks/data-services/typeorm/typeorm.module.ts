import { Module } from '@nestjs/common';
import { TypeormService } from './typeorm.service';
import { DataServices } from '../../../core/abstract/data-services.interface';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './model/product.model';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true, // carga auto las entidades
      synchronize: true, // en produccion false
    }),
    TypeOrmModule.forFeature([Product])],
  providers: [{
    provide: DataServices,
    useClass: TypeormService,
  },],
  exports: [DataServices],
})
export class TypeormModule { }
