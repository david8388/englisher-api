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
  _id: ObjectID;

  @Column()
  vocabulary: string;

  @Column()
  expression: string;

  @Column()
  example: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
