import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DataServices } from 'src/core/abstract/data-services.interface';
import { Product } from 'src/core/entities/product.entity';
import { LocalStorageRepository } from './local-storage.repository';

@Injectable()
export class LocalStorgeService implements DataServices, OnApplicationBootstrap {
    products: LocalStorageRepository<Product>;

    onApplicationBootstrap() {
        this.products = new LocalStorageRepository<Product>;
    }
}
