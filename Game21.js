import readlineSync from 'readline-sync';

class Game21{    
    
    constructor(){
        this.bDone = false;
        this.nComputer = 0;
    }
    takeTurn(sInput){
        let aNumbers = sInput.split(",");
        let nCurrent = aNumbers[aNumbers.length - 1];
        if(nCurrent >= 21){
            return("I win");
        }else if(this.nComputer >= nCurrent){
            return("please try again starting at " + (this.nComputer + 1));
        }else if(aNumbers.length > 4){
            return("please enter 4 or fewer numbers starting at " + (this.nComputer + 1));
        }
        for(let n = 0; n< aNumbers.length; n++){
            if(isNaN(aNumbers[n])){
                return("Please enter only numbers starting at " + (this.nComputer + 1));
            }else if(n > 0 && aNumbers[n] - aNumbers[n-1] != 1){
                return("Please enter numbers in sequence starting at " + (this.nComputer + 1));
            }else if(n == 0 && aNumbers[n] != this.nComputer + 1){
                return("Please enter numbers in sequence starting at " + (this.nComputer + 1));                
            }
        }
        let sSequence = "" + ++nCurrent;
        if(nCurrent == 21){
            this.bDone = true;
            return("You win");
        }
        let nNumbers = Math.ceil(Math.random() * 3);
        for(let n = 0; n < nNumbers; n++){
            if(nCurrent == 20){
                break;
            }
            this.nComputer = ++nCurrent
            sSequence += "," + this.nComputer;
        }
        return(sSequence);
        
    }
    done(){
        return this.bDone;
    }
}

let oGame = new Game21();

while(!oGame.done()){
    let sSequence = readlineSync.question('Enter the next 1 to 4 numbers: ');
    console.log(oGame.takeTurn(sSequence));
}