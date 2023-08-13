import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from '../../controllers/product.controller';
import { DataServiceModule } from '../../services/data-service/data-service.module';

@Module({
  imports: [DataServiceModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule { }
