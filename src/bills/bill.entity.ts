import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  concept: string;

  @Column()
  amount: number;
}
