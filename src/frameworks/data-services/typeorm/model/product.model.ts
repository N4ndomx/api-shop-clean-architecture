
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity() // Con este decorador indico que la clase sera usada como una entidad 
// con la propiedad Name puedo indicar el nombre que puede tener la taba en la bd
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column('varchar', {
        unique: true,
    })
    name: string;

    @Column('float', {
        default: 0
    })
    price: number;

    @Column({
        type: 'varchar',
        nullable: true
    })
    descripcion: string

    @Column('int', {
        default: 0
    })
    stock: number




    // // Ya no se usa el column > no se considera columna sino una relacion 
    // @OneToMany(
    //     () => ProductImg, // retornara un obj de tipo producimg
    //     (producimg) => producimg.product, // Indica como se relaciona ProductImg  con nuetra tabla (La columna que hace de relacion)
    //     {
    //         cascade: true,// esa opcion permite eliminar si existee una relacion con otra tabla 
    //         eager: true // permite que todos los metodos finde* de los repositorios cargen las relaciones 
    //     }
    // )  // un producto puede tener muchas images Relacion
    // imags?: ProductImg[]

    // //indica que antes del insert ejecutar el metodo que checa el campo slug
    // @BeforeInsert()
    // /// @BeforeUpdate()
    // checkSlugInsert() {
    //     if (!this.slug) {
    //         this.slug = this.title

    //     }
    //     this.slug = this.slug
    //         .toLowerCase()
    //         .replaceAll("'", "")
    //         .replaceAll(" ", "_")
    // }

    // @BeforeUpdate()
    // checkSlugUpdate() {
    //     this.slug = this.slug
    //         .toLowerCase()
    //         .replaceAll("'", "")
    //         .replaceAll(" ", "_")
    // }

}
// Representacion de una tabla de la bd

