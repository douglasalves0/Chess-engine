import { Piece } from "../types/piece";

export class Utils{

    public static cellToIndex(cell: string): number{
        Utils.validateCell(cell);
        const index: number = 8 * (cell.charCodeAt(0) - 'a'.charCodeAt(0)) + (cell.charCodeAt(1) - '0'.charCodeAt(0));
        return index;
    }

    public static indexToCell(index: number): string{
        let cell: string = "";
        let line: number = index/8;
        let column: number = index%8;
        cell += Utils.digitToAlfa(line);
        cell += Utils.digitToChar(column);
        return cell;
    }

    public static tableValidator(table: Map<string, Piece>): void{
        for(let i=0;i<64;i++){
            const cell: string = Utils.indexToCell(i);
            if(!table.get(cell)) throw Error(`The cell ${cell} does not have have a value defined`);
        }
    }

    public static validateCell(cell: string): void{
        if(cell.length != 2) throw new Error('Cell string should have only 2 chars!');
        if(cell[0] > 'h' || cell[0] < 'a') throw new Error('First char of the table cell should be lowercase between a and h');
        if(cell[0] > '8' || cell[0] < '1') throw new Error('Second char of the table cell should be between 1 and 8');
    }

    public static digitToChar(n: number): string{
        if(n==0) return '1';
        if(n==1) return '2';
        if(n==2) return '3';
        if(n==3) return '4';
        if(n==4) return '5';
        if(n==5) return '6';
        if(n==6) return '7';
        if(n==7) return '8';
        throw new Error('The number should be between 0 and 7');
    }

    public static digitToAlfa(n: number): string{
        if(n==0) return 'a';
        if(n==1) return 'b';
        if(n==2) return 'c';
        if(n==3) return 'd';
        if(n==4) return 'e';
        if(n==5) return 'f';
        if(n==6) return 'g';
        if(n==7) return 'h';
        throw new Error('The number should be between 0 and 7');
    }

}