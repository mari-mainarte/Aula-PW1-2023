//variável com os 20 números
const numeros20 = [11, 30, 865, 342, 45, 12, 6, 10, 9, 34, 53, 58, 20, 41, 31, 55, 78, 101, 119, 200]

//variável que vai receber os números pares da array20
const num_pares = []

numeros20.map( (num) => {
    if(num%2===0)
    {
        num_pares.push(num)
    }
} )
console.log(numeros20)
console.log(num_pares)

