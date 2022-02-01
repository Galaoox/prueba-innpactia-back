import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, DeleteDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        length: 50
    })
    username: string;

    @Column({
        length: 100
    })
    password: string;

    @DeleteDateColumn()
    deletedDate: Date;

}