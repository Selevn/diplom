import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {ID} from "../../common/types/id";

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    id: ID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'date' })
    birthDate: Date;

    @Column({ type: 'decimal' })
    height: number;

    @Column({ type: 'decimal' })
    weight: number;

    @Column()
    contacts: string;

    @Column()
    description: string;

    @Column({ type: 'int', width: 512 })
    bitMap: number;
}
