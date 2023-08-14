import { Module } from '@nestjs/common';
import { ProductModule } from './case-uses/product/product.module';
import { DataServiceModule } from './services/data-service/data-service.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule, DataServiceModule,],
  providers: [],
})
export class AppModule { }
