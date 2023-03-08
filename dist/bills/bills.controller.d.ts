import { CreateBillDto } from './dtos/create-bill.dto';
import { BillsService } from './bills.service';
export declare class BillsController {
    billsService: BillsService;
    constructor(billsService: BillsService);
    listBills(): Promise<any>;
    createBill(body: CreateBillDto): Promise<void>;
    getBill(id: string): Promise<any>;
}
