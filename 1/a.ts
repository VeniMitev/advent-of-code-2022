const fs = require('fs');

const data = fs.readFile('./1/puzzle.txt', 'utf8', (err: any, data: any) => {
    if (err) {
        console.log(err)
    } else {
        const fileData = data.toString()
        
        let result = fileData.split('\r\n').join('/').split('/\n\s*\n/').join('||').split('//')

        let calcArr: any = []

        for (let i = 0; i < result.length; i++) {
            const res = result[i].split('/')
            const calc = res.reduce((acc: number, val: string) => {
                const total = Number(val) + acc;
                return total
            }, 0)
            calcArr.push(calc)
        }

        console.log(Math.max(...calcArr))
    }
})

export {};