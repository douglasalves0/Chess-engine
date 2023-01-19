import { Piece } from "./types/piece";

export class Chess{

    private table: Piece[];
    private turn: boolean;

    constructor(){

        this.turn = false;
        this.table = new Array<Piece>(64);
        const beginCodes: number[] = [4, 2, 3, 5, 6, 3, 2, 4];

        for(let i=0;i<8;i++){
            this.table[8*0+i] = {
                code: beginCodes[i],
                color: false
            };
            this.table[8*7+i] = {
                code: beginCodes[i],
                color: true
            };
        }

        for(let i=1;i<8;i++){
            this.table[8*1+i] = {
                code: 1,
                color: false
            };
            this.table[8*6+i] = {
                code: 1,
                color: true
            };
        }

        for(let i=2;i<=5;i++){
            for(let j=0;j<8;j++){
                this.table[8*i+j] = {
                    code: 0,
                    color: false
                };
            }
        }

    }

    public change(table: string[][], turn: boolean): void{
        
    }

}