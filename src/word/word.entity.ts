import {
  BaseEntity,
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Word extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  vocabulary: string;

  @Column()
  expression: any;

  @Column()
  example: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
