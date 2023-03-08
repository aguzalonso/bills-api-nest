import { IsObject } from 'class-validator';

export class CreateBillDto {
  @IsObject()
  content: object;
}
