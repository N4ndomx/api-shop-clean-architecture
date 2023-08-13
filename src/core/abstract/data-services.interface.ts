import { Product } from "../entities/product.entity";
import { GenericRepository } from "./generic-repository.interface";

export abstract class DataServices {
    abstract products: GenericRepository<Product>;
}