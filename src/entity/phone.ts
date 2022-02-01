import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Customer } from './customer';
import { Repair } from './repair';

@Entity()
export class Phone extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    model: string;

    @Column({
        length: 200
    })
    description: string;

    @ManyToOne(type => Customer, customer => customer.phones)
    customer: Customer;

    @OneToMany(type => Repair, repair => repair.phone)
    repairs: Repair[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @DeleteDateColumn()
    deletedDate: Date;

}