import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('faculty')
export class Faculty{

    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    expertise:string;

    @Column()
    noOfPublication:number;
}
