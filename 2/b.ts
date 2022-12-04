const fs = require('fs');

// A is Rock     and = 1 point
// B is Paper    and = 2 points
// C is Scissors and = 3 points

// X -> I need to lose
// Y -> I need to draw
// Z -> I need to win

// 6 points for win | 3 points for draw | 0 points for loss

fs.readFile('./2/puzzle.txt', 'utf8', (err: any, data: any) => {
    if (err) {
        console.error(err);
    } else {
        const fileData = data.toString();

        const splitData = fileData.toString().split('\r\n');

        const scoreArr: Array<number> = [];

        for (const a of splitData) {
            const el = a.split(' ');   
            
            // Loses
            if(el[1] === 'X') {
                if       (el[0] === 'A') {
                    // I need to choose Scissors
                    scoreArr.push(0 + 3);
                } else if(el[0] === 'B') {
                    // I need to choose Rock
                    scoreArr.push(0 + 1);
                } else if(el[0] === 'C') {
                    // I need to choose Paper
                    scoreArr.push(0 + 2);
                }  
            } 

            // Draws
            if(el[1] === 'Y') {
                if       (el[0] === 'A') {
                    // I need to choose Rock
                    scoreArr.push(3 + 1);
                } else if(el[0] === 'B') {
                    // I need to choose Paper
                    scoreArr.push(3 + 2);
                } else if(el[0] === 'C') {
                    // I need to choose Scissors
                    scoreArr.push(3 + 3);
                }  
            } 

            // Wins
            if(el[1] === 'Z') {
                if       (el[0] === 'A') {
                    // I need to chose Paper
                    scoreArr.push(6 + 2);
                } else if(el[0] === 'B') {
                    // I need to chose Scissors
                    scoreArr.push(6 + 3);
                } else if(el[0] === 'C') {
                    // I need to chose Rock
                    scoreArr.push(6 + 1);
                } 
            } 
        }

        const totalScore = scoreArr.reduce((acc: number, val: number) => acc + val, 0)

        console.log(scoreArr)
        console.log(totalScore)
    }
})

export {};