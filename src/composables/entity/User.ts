import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column(type => String)
    firstName: String

    @Column(type => String)
    lastName: String

    @Column(type => Number)
    age: number
}
