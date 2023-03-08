import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateBillDto } from './dtos/create-bill.dto';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
  constructor(public billsService: BillsService) {}

  @Get()
  listBills() {
    return this.billsService.findAll();
  }

  @Post()
  createBill(@Body() body: CreateBillDto) {
    return this.billsService.create(body.content);
  }

  @Get('/:id')
  async getBill(@Param('id') id: string) {
    const message = await this.billsService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
