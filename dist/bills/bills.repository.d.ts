export declare class BillsRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: object): Promise<void>;
}
