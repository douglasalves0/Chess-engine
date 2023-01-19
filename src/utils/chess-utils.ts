export class Utils{

    public static cellToIndex(cell: string): number{
        cell = cell.toLowerCase();
        Utils.validateCell(cell);
        const index: number = 8 * (cell.charCodeAt(0) - 'a'.charCodeAt(0)) + (cell.charCodeAt(1) - '0'.charCodeAt(0));
        return index;
    }

    public static indexToCell(index: number): string{
        let cell: string = "";
        let line: number = index/8;
        let column: number = index%8;
        
        return cell;
    }

    public static tableValidator(table: Map<string, number>): void{
        for(let i=0;i<64;i++){

        }
    }

    public static validateCell(cell: string): void{
        if(cell.length != 2) throw new Error('Cell string should have only 2 chars!');
        if(cell[0] > 'h' || cell[0] < 'a') throw new Error('First char of the table cell should be between A and H');
        if(cell[0] > '8' || cell[0] < '1') throw new Error('Second char of the table cell should be between 1 and 8');
    }

    public static numToAlfa(){
        
    }

}