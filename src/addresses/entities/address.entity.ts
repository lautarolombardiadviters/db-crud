import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
}
