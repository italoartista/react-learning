 const nome = 'Lucas'

function imprime(nome) { 
    return nome; 
}

console.log(imprime(nome))



// function map( callback ) { 
//     const arr = [1, 2, 3, 4, 5]
//     const resultado = []
//     for(let i = 0; i < arr.length; i++) {
//         resultado.push(callback(arr[i]))
//     }

//     return resultado
// }


// function soma(valor) { 
//     return valor * 2
// }


// const resultado = map(soma)

// console.log(resultado)

// function filter( callback ) {
//     const arr = [1, 2, 3, 4, 5]
//     const newArr = []

//     for(let i = 0; i < arr.length; i++) {
//         if(callback(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }

//     return newArr
// }