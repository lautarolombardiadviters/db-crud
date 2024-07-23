import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
}
