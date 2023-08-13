import { Module } from '@nestjs/common';
import { ProductModule } from './case-uses/product/product.module';
import { DataServiceModule } from './services/data-service/data-service.module';

@Module({
  imports: [ProductModule, DataServiceModule,],
  providers: [],
})
export class AppModule { }
