import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('programming_language')
export class ProgrammingLanguage {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
}
