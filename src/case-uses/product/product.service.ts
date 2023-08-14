import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../core/dtos/create-product.dto';
import { UpdateProductDto } from '../../core/dtos/update-product.dto';
import { DataServices } from '../../core/abstract/data-services.interface';
import { Product } from 'src/core/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    private readonly dataService: DataServices
  ) { }
  async create(createProductDto: CreateProductDto) {
    const product = new Product();
    // product.id = createProductDto.id
    product.name = createProductDto.name
    product.price = createProductDto.price
    product.stock = createProductDto.stock
    product.descripcion = createProductDto.descripcion
    // product.tags = createProductDto.tagss

    return await this.dataService.products.save(product);
  }

  async findAll() {
    return await this.dataService.products.getAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
