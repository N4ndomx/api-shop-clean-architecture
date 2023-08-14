import { GenericRepository } from "src/core/abstract/generic-repository.interface";
import { Repository } from "typeorm";

export class TypeormRepository<T> implements GenericRepository<T> {

    constructor(
        private readonly __repo: Repository<T>
    ) { }
    save(obj: T): Promise<T> {
        return this.__repo.save(obj)
    }
    getById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<T[]> {
        return this.__repo.find();

    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}