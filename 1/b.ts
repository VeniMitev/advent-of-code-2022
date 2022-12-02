const fs = require('fs');

const data = fs.readFile('./1/input.txt', 'utf8', (err: any, data: any) => {
    if (err) {
        console.log(err)
    } else {
        const fileData = data.toString()
        
        let splitData = fileData.split('\r\n').join('/').split('/\n\s*\n/').join('||').split('//')

        let calcArr: any = []

        for (let i = 0; i < splitData.length; i++) {
            const res = splitData[i].split('/')
            const calc = res.reduce((acc: number, val: string) => {
                const total = Number(val) + acc;
                return total
            }, 0)
            calcArr.push(calc)
        }

        const sortedArr = calcArr.sort((a: number, b: number) => a - b)

        const result = sortedArr.splice(-3).reduce((acc: number, val: string) => acc + val, 0)

        console.log(result)
    }
})

export {};