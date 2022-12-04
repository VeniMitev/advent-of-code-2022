const fs = require('fs');

// A and X are Rock     and = 1 point
// B and Y are Paper    and = 2 points
// C and Z are Scissors and = 3 points

// I am the second column -> X, Y, Z

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
            
            // Wins
            if        (el[0] === 'C' && el[1] === 'X') {
                scoreArr.push(1 + 6);
            } else if (el[0] === 'A' && el[1] === 'Y') {
                scoreArr.push(2 + 6);
            } else if (el[0] === 'B' && el[1] === 'Z') {
                scoreArr.push(3 + 6);
            }
            
            // Loses
            
            if      (el[0] === 'B' && el[1] === 'X') {
                scoreArr.push(1);
            } 
            else if (el[0] === 'C' && el[1] === 'Y') {
                scoreArr.push(2);
            } else if (el[0] === 'A' && el[1] === 'Z') {
                scoreArr.push(3);
            } 

            // Draws  
            if      (el[0] === 'A' && el[1] === 'X') {
                scoreArr.push(1 + 3);
            } 
            else if (el[0] === 'B' && el[1] === 'Y') {
                scoreArr.push(2 + 3);
            } 
            else if (el[0] === 'C' && el[1] === 'Z') {
                scoreArr.push(3 + 3);
            } 
            
 

        }

        const totalScore = scoreArr.reduce((acc: number, val: number) => acc + val, 0)

        console.log(splitData)
        console.log(totalScore)
    }
})

export {};