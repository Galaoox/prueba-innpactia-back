import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Phone } from './phone';

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        length: 100,
        nullable: false
    })
    name: string;

    @Column({
        length: 100,
        nullable: false
    })
    lastname: string;

    @Column({
        length: 150,
        nullable: false
    })
    address: string;

    @Column({
        length: 15,
        nullable: false
    })
    numberPhone: string;

    @OneToMany(type => Phone, phone => phone.customer)
    phones: Phone[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @DeleteDateColumn()
    deletedDate: Date;
}