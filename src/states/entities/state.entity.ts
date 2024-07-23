import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('state')
export class State {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
}
