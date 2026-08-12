//for now its any come back and place in templates to allow for any update changes easily 
export default interface DataSource<T> {
    create(entity: T): Promise<T>
    update(entity: T): Promise<T>
    getAll(): Promise<T[]> 
}