import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Phone } from './phone';

@Entity()
export class Repair extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 200
    })
    description: string


    @ManyToOne(type => Phone, phone => phone.repairs)
    phone: Phone;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @DeleteDateColumn()
    deletedDate: Date;

}