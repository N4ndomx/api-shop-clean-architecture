import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataServices } from 'src/core/abstract/data-services.interface';
import { Repository } from 'typeorm';
import { Product } from './model/product.model';
import { TypeormRepository } from './typeorm.repository';

@Injectable()
export class TypeormService implements DataServices, OnApplicationBootstrap {
    products: TypeormRepository<Product>;
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) { }
    onApplicationBootstrap() {
        // TODO: iniciar los repos
        this.products = new TypeormRepository<Product>(this.productRepository)
    }
}
