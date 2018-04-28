export class Ball{
    id: number;
    color: string;
    size: string;
    
    constructor(inColor: string, inSize: string) {                                                       
        this.color = inColor;
        this.size = inColor; 
    }
    
    about(): string {
        return `Ball:   id=${this.id},
                        color=${this.color},
                        size=${this.size}`;
    }
}