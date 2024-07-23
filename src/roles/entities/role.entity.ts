import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
}
