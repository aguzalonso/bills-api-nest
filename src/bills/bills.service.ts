import { Injectable } from '@nestjs/common';
import { BillsRepository } from './bills.repository';

@Injectable()
export class BillsService {
  constructor(public billsRepo: BillsRepository) {}

  findOne(id: string) {
    return this.billsRepo.findOne(id);
  }

  findAll() {
    return this.billsRepo.findAll();
  }

  create(content: object) {
    return this.billsRepo.create(content);
  }
}
