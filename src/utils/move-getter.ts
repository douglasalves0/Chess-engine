import { Piece } from "../types/piece";

export class MoveGetter{

    public static get(pieces: Piece[], index: number): number[]{
        if(pieces[index].code == 1) return MoveGetter.pawnGetter();
        if(pieces[index].code == 2) return MoveGetter.horseGetter();
        if(pieces[index].code == 3) return MoveGetter.bishopGetter();
        if(pieces[index].code == 4) return MoveGetter.rookGetter();
        if(pieces[index].code == 5) return MoveGetter.queenGetter();
        if(pieces[index].code == 6) return MoveGetter.kingGetter();
        return [-1];
    }

    public static pawnGetter(): number[]{
        let answer: number[] = [];
        
        return answer;
    }

    public static horseGetter(): number[]{
        let answer: number[] = [];
        return answer;
    }

    public static bishopGetter(): number[]{
        let answer: number[] = [];
        return answer;
    }

    public static rookGetter(): number[]{
        let answer: number[] = [];
        return answer;
    }

    public static queenGetter(): number[]{
        let answer: number[] = [];
        return answer;
    }
    
    public static kingGetter(): number[]{
        let answer: number[] = [];
        return answer;
    }

}