import { GenericRepository } from "src/core/abstract/generic-repository.interface";
import { Product } from "src/core/entities/product.entity";

export class LocalStorageRepository<T> implements GenericRepository<T>{
    data: T[] = []
    // = [{
    //     id: "1s",
    //     name: "Naranaja",
    //     stock: 12,
    //     price: 12.00
    // }];

    getById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<T[]> {
        return new Promise((resolve, reject) => {
            // Resuelve la promesa con el array deseado
            resolve(this.data);
            // Opcional: manejo de errores
            reject(new Error('Ocurrió un error al obtener los datos'));
        });

    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    save(obj: T): Promise<T> {
        this.data.push(obj)
        return new Promise((resolve, reject) => {
            // Resuelve la promesa con el array deseado
            resolve(obj);
            // Opcional: manejo de errores
            reject(new Error('Ocurrió un error al obtener los datos'));
        });


    }

}