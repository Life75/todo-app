//for now its any come back and place in templates to allow for any update changes easily 
export default interface DataSource {
    create(request: any): any
    update(request: any): any
    getAll(): any 
}