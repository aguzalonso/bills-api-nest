import { BillsRepository } from './bills.repository';
export declare class BillsService {
    billsRepo: BillsRepository;
    constructor(billsRepo: BillsRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: object): Promise<void>;
}
