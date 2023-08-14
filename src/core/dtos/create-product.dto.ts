import { IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    // id: string
    @IsString()
    name: string
    @IsString()
    descripcion: string
    @IsNumber()
    stock: number
    @IsNumber()
    price: number
    // tags: string[]
}
