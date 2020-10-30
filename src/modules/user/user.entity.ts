import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({ type:'varchar', unique:true, length:100, nullable:false })
    username:string;

    @Column({ type:'varchar',  nullable:false })
    email:string;

    @Column({ type:'varchar',  nullable:false })
    password:string;

    @Column({ type:'varchar',  default:'ACTIVE', length:15})
    status:string;

    @Column({ type: 'timestamp', name:'created_at' })
    createdAt:Date;

    @Column({ type: 'timestamp', name:'update_at' })
    updatedAt:Date;
}