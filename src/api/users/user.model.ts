import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserRole {
    PATIENT = 'patient',
    DIAGNOSTICIAN = 'diagnostician',
    DOCTOR = 'doctor',
}

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    birth_date: Date;

    @Column()
    PESEL: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.PATIENT,
    })
    role: UserRole;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}