export interface GenericRepository<T> {

    save(obj: T): Promise<T>;
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    update(id: string, item: T): Promise<boolean>;
}